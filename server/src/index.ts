import { schema, table, t, SenderError } from 'spacetimedb/server';

/**
 * A registered visitor. One row per identity; keyed by the caller's Identity so
 * a visitor can (re)claim a display name without creating duplicates.
 */
const user = table(
  { name: 'user', public: true },
  {
    identity: t.identity().primaryKey(),
    name: t.string(),
  }
);

/**
 * A guestbook message. `id` is auto-incremented (not sequential — order by
 * `sentAt`), `sender` is the authenticated author, `sentAt` is the deterministic
 * server timestamp of the reducer call.
 */
const message = table(
  {
    name: 'message',
    public: true,
    indexes: [{ accessor: 'by_sent_at', algorithm: 'btree', columns: ['sentAt'] }],
  },
  {
    id: t.u64().primaryKey().autoInc(),
    sender: t.identity(),
    text: t.string(),
    sentAt: t.timestamp(),
  }
);

const spacetimedb = schema({ user, message });
export default spacetimedb;

export const init = spacetimedb.init(_ctx => {
  // Called once when the module is initially published.
});

export const onConnect = spacetimedb.clientConnected(_ctx => {
  // A new client connected. Nothing to do until they set a name / post.
});

export const onDisconnect = spacetimedb.clientDisconnected(_ctx => {
  // A client disconnected.
});

/** Set (or change) the caller's display name. */
export const setName = spacetimedb.reducer(
  { name: t.string() },
  (ctx, { name }) => {
    const trimmed = name.trim();
    if (trimmed.length === 0) throw new SenderError('name cannot be empty');
    if (trimmed.length > 32) throw new SenderError('name too long (max 32)');

    const existing = ctx.db.user.identity.find(ctx.sender);
    if (existing) {
      ctx.db.user.identity.update({ ...existing, name: trimmed });
    } else {
      ctx.db.user.insert({ identity: ctx.sender, name: trimmed });
    }
  }
);

/** Post a message to the guestbook, authored by the caller. */
export const sendMessage = spacetimedb.reducer(
  { text: t.string() },
  (ctx, { text }) => {
    const trimmed = text.trim();
    if (trimmed.length === 0) throw new SenderError('message cannot be empty');
    if (trimmed.length > 256) throw new SenderError('message too long (max 256)');

    ctx.db.message.insert({
      id: 0n,
      sender: ctx.sender,
      text: trimmed,
      sentAt: ctx.timestamp,
    });
  }
);
