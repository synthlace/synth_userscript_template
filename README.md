# @synthlace/synth_userscript_template

## Prerequisites

- Node.js >= 18
- pnpm >= 8

## Get Started

```bash
# Install pnpm
$ npm i -g pnpm

# Install and patch packages
$ pnpm install

# Build
$ pnpm build
```

## Output

Build produces two bundles inside `dist` directory:

- `bundle.js` - comments and identifiers as is
- `bundle.min.js` - produces minified one-liner with no comments

You can use any.

## Meta and Banner

Template uses metablock generator [rollup-plugin-userscript-metablock](https://github.com/FlandreDaisuki/rollup-plugin-userscript-metablock/tree/master) package with a patch to support the `.cjs` extension.
Banner can be customized by changing the `banner` inside `rollup.config.ts`, example:

```js
const banner = '\n/* any banner you want */\n'
```
