/**
 * Temporary review gate. Client-side only — meant to keep the site quiet
 * while it circulates for feedback, not to secure the content. Remove by
 * deleting this file and its <script> tags in index.html and tracker.html.
 */
(function () {
  var KEY = 'mo-gate';
  // sha-256 of the review password.
  var HASH = 'bc020a35b7f9cb1382e7b534c68e3c531d849b119bf14f75ddead6cc45c3ccc1';

  if (localStorage.getItem(KEY) === HASH) return;

  // Hide the page immediately; the form replaces it once the DOM exists.
  document.documentElement.style.visibility = 'hidden';

  function sha256hex(text) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function (buf) {
      return Array.from(new Uint8Array(buf))
        .map(function (b) {
          return b.toString(16).padStart(2, '0');
        })
        .join('');
    });
  }

  function showGate() {
    document.documentElement.style.visibility = '';
    document.body.innerHTML = '';
    document.body.style.cssText = 'margin:0;background:#eceded;min-height:100vh;display:flex;align-items:center;justify-content:center;';

    var card = document.createElement('div');
    card.style.cssText =
      'background:#fdfdfd;border:1px solid #d2d3d6;border-radius:6px;padding:2.5rem 2.25rem;max-width:22rem;width:calc(100% - 3rem);text-align:center;font-family:Georgia,serif;color:#17181a;';

    var mark = document.createElement('div');
    mark.textContent = 'MACHINE ORACLE';
    mark.style.cssText = 'font-size:1.05rem;letter-spacing:0.35em;font-weight:700;margin-bottom:0.5rem;';

    var sub = document.createElement('p');
    sub.textContent = 'This site is in private review.';
    sub.style.cssText = 'font-size:0.85rem;color:#63666d;margin:0 0 1.5rem;';

    var form = document.createElement('form');
    var input = document.createElement('input');
    input.type = 'password';
    input.placeholder = 'Password';
    input.autocomplete = 'off';
    input.style.cssText =
      'width:100%;box-sizing:border-box;padding:0.6rem 0.8rem;border:1px solid #d2d3d6;border-radius:4px;font-size:0.9rem;margin-bottom:0.75rem;background:#fff;color:#17181a;';

    var btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = 'Enter';
    btn.style.cssText =
      'width:100%;padding:0.6rem;border:0;border-radius:4px;background:#1b5fd0;color:#fff;font-size:0.9rem;font-weight:600;cursor:pointer;';

    var err = document.createElement('p');
    err.style.cssText = 'font-size:0.78rem;color:#b8452c;min-height:1.1em;margin:0.75rem 0 0;';

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      sha256hex(input.value).then(function (hex) {
        if (hex === HASH) {
          localStorage.setItem(KEY, HASH);
          location.reload();
        } else {
          err.textContent = 'That isn’t it.';
          input.value = '';
          input.focus();
        }
      });
    });

    // Belt-and-braces: submit on Enter even if implicit submission is blocked.
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit', { cancelable: true }));
      }
    });

    form.append(input, btn);
    card.append(mark, sub, form, err);
    document.body.append(card);
    input.focus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showGate);
  } else {
    showGate();
  }
})();
