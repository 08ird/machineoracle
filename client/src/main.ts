import { Identity } from 'spacetimedb';
import {
  DbConnection,
  type EventContext,
} from './module_bindings';
import type { Message, User } from './module_bindings/types';

// --- Config -----------------------------------------------------------------
// Overridable at build time via .env (VITE_STDB_URI / VITE_STDB_DB); falls back
// to the local dev host so `npm run dev` works with no env file.
const HOST = import.meta.env.VITE_STDB_URI ?? 'ws://127.0.0.1:3000';
const DB_NAME = import.meta.env.VITE_STDB_DB ?? 'guestbook';
const TOKEN_KEY = 'stdb_guestbook_token';

// --- DOM refs ---------------------------------------------------------------
const statusEl = document.getElementById('status') as HTMLParagraphElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const saveNameBtn = document.getElementById('save-name') as HTMLButtonElement;
const messagesEl = document.getElementById('messages') as HTMLUListElement;
const composeForm = document.getElementById('compose') as HTMLFormElement;
const textInput = document.getElementById('text') as HTMLInputElement;

// --- Local state ------------------------------------------------------------
let conn: DbConnection | null = null;
let myIdentity: Identity | null = null;

function setStatus(text: string, kind: 'ok' | 'warn' | 'info' = 'info') {
  statusEl.textContent = text;
  statusEl.dataset.kind = kind;
}

/** Short, readable form of an Identity for anonymous authors. */
function shortId(id: Identity): string {
  const hex = id.toHexString();
  return `${hex.slice(0, 6)}…${hex.slice(-4)}`;
}

function displayName(sender: Identity): string {
  const user = conn?.db.user.identity.find(sender);
  if (user && user.name.length > 0) return user.name;
  return `guest ${shortId(sender)}`;
}

/** Re-render the full message list, oldest first. */
function renderMessages() {
  if (!conn) return;
  const messages = [...conn.db.message.iter()].sort((a, b) =>
    a.sentAt.microsSinceUnixEpoch < b.sentAt.microsSinceUnixEpoch ? -1 : 1
  );

  messagesEl.replaceChildren();
  for (const msg of messages) messagesEl.appendChild(renderMessage(msg));
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function renderMessage(msg: Message): HTMLLIElement {
  const li = document.createElement('li');
  li.className = 'message';
  if (myIdentity && msg.sender.equals(myIdentity)) li.classList.add('mine');

  const meta = document.createElement('div');
  meta.className = 'meta';

  const author = document.createElement('span');
  author.className = 'author';
  author.textContent = displayName(msg.sender);

  const when = document.createElement('time');
  when.className = 'when';
  when.textContent = msg.sentAt.toDate().toLocaleString();

  meta.append(author, when);

  const body = document.createElement('div');
  body.className = 'body';
  body.textContent = msg.text;

  li.append(meta, body);
  return li;
}

/** Reflect the current user's saved name into the name input placeholder. */
function syncNameField() {
  if (!conn || !myIdentity) return;
  const me = conn.db.user.identity.find(myIdentity);
  if (me && document.activeElement !== nameInput) nameInput.value = me.name;
}

// --- Connect ----------------------------------------------------------------
function onConnected(connection: DbConnection, identity: Identity, token: string) {
  conn = connection;
  myIdentity = identity;
  localStorage.setItem(TOKEN_KEY, token);
  setStatus(`connected as ${shortId(identity)}`, 'ok');

  // Table change callbacks — any change re-renders the affected view.
  connection.db.message.onInsert((_ctx: EventContext, _row: Message) => renderMessages());
  connection.db.message.onDelete((_ctx: EventContext, _row: Message) => renderMessages());
  connection.db.user.onInsert((_ctx: EventContext, _row: User) => {
    renderMessages();
    syncNameField();
  });
  connection.db.user.onUpdate((_ctx: EventContext, _old: User, _new: User) => {
    renderMessages();
    syncNameField();
  });

  // Subscribe to the public guestbook tables. Initial rows arrive on apply.
  connection
    .subscriptionBuilder()
    .onApplied(() => {
      renderMessages();
      syncNameField();
    })
    .onError((_ctx) => setStatus('subscription error', 'warn'))
    .subscribe(['SELECT * FROM message', 'SELECT * FROM user']);
}

function onDisconnected() {
  setStatus('disconnected — refresh to reconnect', 'warn');
  conn = null;
}

function connect() {
  setStatus('connecting…', 'info');
  DbConnection.builder()
    .withUri(HOST)
    .withDatabaseName(DB_NAME)
    .withToken(localStorage.getItem(TOKEN_KEY) ?? undefined)
    .onConnect(onConnected)
    .onConnectError((_ctx, err) => setStatus(`connect failed: ${err.message}`, 'warn'))
    .onDisconnect(onDisconnected)
    .build();
}

// --- UI wiring --------------------------------------------------------------
saveNameBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (!conn || name.length === 0) return;
  conn.reducers.setName({ name });
});

composeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = textInput.value.trim();
  if (!conn || text.length === 0) return;
  conn.reducers.sendMessage({ text });
  textInput.value = '';
  textInput.focus();
});

connect();
