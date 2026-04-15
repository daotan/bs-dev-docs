#!/usr/bin/env node
// Patch webpackbar to fix compatibility with webpack 5.90+ strict ProgressPlugin validation.
//
// Root cause: webpackbar extends webpack's ProgressPlugin and overrides `this.options`
// with its own options (name, color, reporters, reporter). Newer webpack validates
// `this.options` against the ProgressPlugin JSON schema and rejects unknown properties.
//
// Fix: rename webpackbar's internal option storage to `_barOptions` so it no longer
// conflicts with the parent class's `this.options`.

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'node_modules', 'webpackbar', 'dist', 'index.cjs');

if (!fs.existsSync(filePath)) {
  console.log('[patch-webpackbar] File not found, skipping.');
  process.exit(0);
}

let content = fs.readFileSync(filePath, 'utf8');

if (content.includes('this._barOptions')) {
  console.log('[patch-webpackbar] Already patched, skipping.');
  process.exit(0);
}

const replacements = [
  // Rename the class field declaration from "options" to "_barOptions"
  ['__publicField(this, "options");', '__publicField(this, "_barOptions");'],
  // Rename the assignment in the constructor
  ['this.options = Object.assign({}, DEFAULTS, options);', 'this._barOptions = Object.assign({}, DEFAULTS, options);'],
  // Rename reads of reporters/reporter from options
  ['...this.options.reporters || [],', '...this._barOptions.reporters || [],'],
  ['this.options.reporter\n', 'this._barOptions.reporter\n'],
  // Rename reads of profile
  ['this.options.profile && !', 'this._barOptions.profile && !'],
  // Rename dynamic reporter key lookups
  ['if (this.options[reporter] === false)', 'if (this._barOptions[reporter] === false)'],
  ['{ ...this.options[reporter], ...options2 }', '{ ...this._barOptions[reporter], ...options2 }'],
  // Rename reads of name and color in methods
  ['globalStates[this.options.name]', 'globalStates[this._barOptions.name]'],
  ['this.states[this.options.name]', 'this.states[this._barOptions.name]'],
  ['color: this.options.color,', 'color: this._barOptions.color,'],
  ['startCase(this.options.name)', 'startCase(this._barOptions.name)'],
];

let patched = false;
for (const [from, to] of replacements) {
  if (content.includes(from)) {
    // Replace all occurrences
    content = content.split(from).join(to);
    patched = true;
  } else {
    console.warn(`[patch-webpackbar] Warning: pattern not found: "${from.slice(0, 60)}"`);
  }
}

if (patched) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('[patch-webpackbar] Patched successfully.');
} else {
  console.log('[patch-webpackbar] Nothing to patch.');
}
