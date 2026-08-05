#!/usr/bin/env node
/**
 * Repo consistency checks.
 *
 * Zero dependencies on purpose — the portfolio's whole promise is single
 * files with nothing to install, and its tooling should not be the thing
 * that breaks that. Plain Node, no npm install, no browser.
 *
 * Every assertion here exists because the mistake it catches actually
 * happened. Run with `node tools/check.mjs`.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = f => readFileSync(join(ROOT, f), 'utf8');

let failed = 0;
const results = [];
function check(name, fn) {
  try {
    const detail = fn();
    results.push({ ok: true, name, detail });
  } catch (e) {
    failed++;
    results.push({ ok: false, name, detail: e.message });
  }
}
const assert = (cond, msg) => { if (!cond) throw new Error(msg); };

/* ------------------------------------------------------------------ */
const index = read('index.html');
const readme = read('README.md');
const appFiles = readdirSync(ROOT).filter(f => f.endsWith('.html') && f !== 'index.html');

/** Pull the PRODUCTS catalogue out of index.html without executing it. */
function parseProducts() {
  const block = index.slice(index.indexOf('const PRODUCTS = ['), index.indexOf('const EMAIL'));
  const entries = block.split(/\{\s*emoji:/).slice(1);
  return entries.map(chunk => {
    const grab = k => (chunk.match(new RegExp(k + ":\\s*'([^']*)'")) || [])[1];
    return {
      emoji: (chunk.match(/^\s*'([^']*)'/) || [])[1],
      name: grab('name'), file: grab('file'), cat: grab('cat'),
      g1: grab('g1'), g2: grab('g2'), pat: grab('pat'),
      demo: /demo:/.test(chunk)
    };
  });
}
const products = parseProducts();

/* ---- catalogue integrity ---- */
check('catalogue parses and is non-empty', () => {
  assert(products.length > 0, 'parsed zero products out of index.html');
  return `${products.length} apps`;
});

check('every catalogue entry has all its fields', () => {
  const bad = products.filter(p => !p.name || !p.file || !p.cat || !p.g1 || !p.g2 || !p.pat || !p.emoji || !p.demo);
  assert(!bad.length, 'missing fields: ' + bad.map(p => p.name || '(unnamed)').join(', '));
});

check('every catalogue entry points at a file that exists', () => {
  const missing = products.filter(p => !existsSync(join(ROOT, p.file)));
  assert(!missing.length, 'no such file: ' + missing.map(p => `${p.name} -> ${p.file}`).join(', '));
});

/* ---- the "twelve vs 13" bug ---- */
check('no stale app count in the homepage copy', () => {
  const words = { eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15 };
  const head = index.slice(0, index.indexOf('</head>')) + index.slice(index.indexOf('<h1'), index.indexOf('</h1>') + 5);
  const wrong = [];
  for (const [word, n] of Object.entries(words)) {
    if (new RegExp(word, 'i').test(head) && n !== products.length) wrong.push(`"${word}" but there are ${products.length}`);
  }
  assert(!wrong.length, wrong.join('; '));
  return `${products.length} apps, copy agrees`;
});

check('the app count is derived, not hardcoded, in the rendered page', () => {
  assert(/PRODUCTS\.length/.test(index), 'nothing derives from PRODUCTS.length — a count is hardcoded somewhere');
});

/* ---- the "six apps, three previews" bug ---- */
check('every app has its own gradient', () => {
  const grads = products.map(p => p.g1 + p.g2);
  assert(new Set(grads).size === products.length,
    `${products.length} apps but ${new Set(grads).size} distinct gradients`);
});

check('no two neighbours in the rendered grid share a pattern', () => {
  /* The grid renders grouped by category, not in catalogue order — the
     first pattern assignment put two identical covers side by side
     precisely because of that. */
  const cats = [...new Set(products.map(p => p.cat))];
  const ordered = cats.flatMap(c => products.filter(p => p.cat === c));
  const clash = ordered.filter((p, i) => i > 0 && p.pat === ordered[i - 1].pat);
  assert(!clash.length, 'adjacent same pattern: ' + clash.map(p => `${p.name} (${p.pat})`).join(', '));
});

/* ---- the "flagship had no demo cap" bug ---- */
const NO_CAP_EXPECTED = new Set(['emoji-simulator.html']);   // a free toy, deliberately ungated
check('every listed app enforces a demo cap', () => {
  const ungated = products
    .filter(p => !NO_CAP_EXPECTED.has(p.file))
    /* Require an assignment, not a mention: renaming the constant while
       leaving the guards referencing it must not pass. */
    .filter(p => !/DEMO_[A-Z_]+\s*=\s*\d+/.test(read(p.file)));
  assert(!ungated.length, 'no cap in: ' + ungated.map(p => p.file).join(', '));
  return `${products.length - 0} apps gated`;
});

check('a stated demo cap matches the number in the code', () => {
  /* Catches copy that promises a limit the code does not enforce. */
  const mismatches = [];
  for (const p of products) {
    if (NO_CAP_EXPECTED.has(p.file)) continue;
    const src = read(p.file);
    const caps = [...src.matchAll(/DEMO_[A-Z_]+\s*=\s*(\d+)/g)].map(m => Number(m[1]));
    if (!caps.length) continue;
    const card = index.slice(index.indexOf(`'${p.name}'`), index.indexOf(`'${p.name}'`) + 1400);
    const demoText = (card.match(/demo:\s*'([^']*)'/) || [])[1] || '';
    /* Only the Demo clause states the cap. The Full version clause is
       marketing copy and its numbers ("4K", "unlimited") are not limits. */
    const demoClause = demoText.split(/Full version/i)[0];
    const claimed = [...demoClause.matchAll(/(\d+)/g)].map(m => Number(m[1]));
    const unmet = claimed.filter(n => !caps.includes(n));
    if (unmet.length) mismatches.push(`${p.name}: card says ${unmet.join('/')}, code has ${caps.join('/')}`);
  }
  assert(!mismatches.length, mismatches.join(' | '));
});

/* ---- documentation drift ---- */
/* Only the link table counts. Matching anywhere in the README lets a
   deleted table row pass because the prose section below still names the
   file. */
const linkTable = readme.slice(readme.indexOf('| App | Link |'), readme.indexOf('\n## '));

check('README link table lists every app the homepage does', () => {
  const missing = products.filter(p => !linkTable.includes(p.file));
  assert(!missing.length, 'absent from the README table: ' + missing.map(p => p.file).join(', '));
  return `${products.length} rows`;
});

check('README link table lists every app file in the repo', () => {
  const missing = appFiles.filter(f => !linkTable.includes(f));
  assert(!missing.length, 'in the repo but not in the README table: ' + missing.join(', '));
});

check('every app also has a written-up section in the README', () => {
  const missing = appFiles.filter(f => !new RegExp('\\(' + f.replace('.', '\\.') + '\\)').test(readme));
  assert(!missing.length, 'no README section for: ' + missing.join(', '));
});

/* ---- the address move ---- */
check('no links to the old /Projects/ path', () => {
  const files = ['README.md', 'index.html', ...appFiles];
  const stale = files.filter(f => /github\.io\/Projects/.test(read(f)));
  assert(!stale.length, 'stale URL in: ' + stale.join(', '));
});

check('the homepage never links to the source repository', () => {
  assert(!/github\.com/i.test(index), 'index.html links to github.com — that hands visitors the source');
});

/* ---- the portfolio's own promise ---- */
check('no app loads anything over the network at page load', () => {
  /* Fetching at startup would break the offline promise. Runtime fetches
     to declared APIs (weather, traffic) are fine and expected. */
  const offenders = appFiles.filter(f => /<script[^>]+src=["']http/i.test(read(f)) || /<link[^>]+href=["']http/i.test(read(f)));
  assert(!offenders.length, 'external asset in: ' + offenders.join(', '));
});

check('no app carries an image file reference', () => {
  /* data: URIs and `${...}` template slots are fine — the builders embed
     user uploads as data URIs rather than fetching anything. Only a real
     path or URL in a src would break the self-contained promise. */
  const offenders = [...appFiles, 'index.html']
    .filter(f => /<img[^>]+src=["'](?!data:|\$\{)/i.test(read(f)));
  assert(!offenders.length, 'external image in: ' + offenders.join(', '));
});

/* ------------------------------------------------------------------ */
const pad = 52;
for (const r of results) {
  const label = r.ok ? '\x1b[32mPASS\x1b[0m' : '\x1b[31mFAIL\x1b[0m';
  console.log(`${label}  ${r.name.padEnd(pad)}${r.detail ? '  ' + r.detail : ''}`);
}
console.log(failed
  ? `\n\x1b[31m${failed} of ${results.length} checks failed\x1b[0m`
  : `\n\x1b[32mall ${results.length} checks passed\x1b[0m`);
process.exit(failed ? 1 : 0);
