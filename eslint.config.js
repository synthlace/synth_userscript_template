import globals from 'globals'

import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'

import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ['dist/', 'node_modules/', 'patches/', 'types/GM/'],
  },
  {
    files: ['**/*.ts'],
    plugins: {
      typescript,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        GM: 'writable',
        unsafeWindow: 'writable',
      },
    },
  },
  {
    files: ['*.config.{ts,js}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
]

export default config
