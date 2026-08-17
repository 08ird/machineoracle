/**
 * Dev-only review endpoint. The review mode on the local preview (src/review.ts)
 * POSTs { oldText, newText } here; the middleware finds the one source file
 * containing oldText verbatim and rewrites it in place. Nothing in this plugin
 * runs in a production build — configureServer only exists on the dev server.
 */

import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';

function reviewSave(): Plugin {
  return {
    name: 'review-save',
    configureServer(server) {
      server.middlewares.use('/__review/save', (req, res) => {
        const send = (code: number, msg: string) => {
          res.statusCode = code;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: code === 200, msg }));
        };
        if (req.method !== 'POST') return send(405, 'POST only');
        let body = '';
        req.on('data', (c: Buffer) => (body += c));
        req.on('end', () => {
          try {
            const { oldText, newText } = JSON.parse(body) as { oldText?: unknown; newText?: unknown };
            if (typeof oldText !== 'string' || typeof newText !== 'string' || !oldText.trim() || !newText.trim()) {
              return send(400, 'empty edit');
            }
            if (/[\\\n\r]/.test(newText)) return send(400, 'newText may not contain backslashes or line breaks');

            const root = server.config.root;
            const contentDir = path.join(root, 'src/content');
            const files = [
              ...fs
                .readdirSync(contentDir)
                .filter((f) => f.endsWith('.ts'))
                .map((f) => path.join(contentDir, f)),
              path.join(root, 'src/data/slides.ts'),
            ];

            const hits: string[] = [];
            for (const f of files) {
              const txt = fs.readFileSync(f, 'utf8');
              let i = txt.indexOf(oldText);
              while (i !== -1) {
                hits.push(f);
                i = txt.indexOf(oldText, i + 1);
              }
            }
            if (hits.length === 0) return send(404, 'text not found in source — reload the page and retry');
            if (hits.length > 1) return send(409, 'text appears more than once in source — ask Claude to edit it');

            const f = hits[0];
            // House style: typographic apostrophes. Also keeps the single-quoted
            // TS string literal intact without escape sequences.
            const safe = newText.replace(/'/g, '’');
            fs.writeFileSync(f, fs.readFileSync(f, 'utf8').replace(oldText, safe));
            send(200, path.relative(root, f));
          } catch {
            send(400, 'bad request');
          }
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [reviewSave()],
});
