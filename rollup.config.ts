import type { Plugin, RollupOptions } from 'rollup'

import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import metablock, { type MetaValues } from 'rollup-plugin-userscript-metablock'

import pickBy from 'lodash-es/pickBy.js'

import pkg from './package.json' assert { type: 'json' }

const outDir = process.env.OUT_DIR || 'dist'

const banner = '\n/* this is an instructive banner */\n'

const sharedOutput = {
  format: 'iife',
} satisfies RollupOptions['output']

const metaBlockPlugin = metablock({
  file: './metablock.cjs',
  override: pickBy({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    author: pkg.author,
    license: pkg.license,
  } as MetaValues),
}) as Plugin

const config: RollupOptions = {
  input: './src/main.ts',
  output: [
    {
      ...sharedOutput,
      file: `${outDir}/bundle.js`,
      banner,
      plugins: metaBlockPlugin,
    },
    {
      ...sharedOutput,
      file: `${outDir}/bundle.min.js`,
      plugins: [
        terser({
          format: {
            preamble: banner,
          },
        }),
        metaBlockPlugin,
      ],
    },
  ],
  plugins: [
    nodeResolve({
      extensions: ['.mjs', '.js', 'ts', '.json', '.node'],
    }),
    typescript(),
  ],
}
export default config
