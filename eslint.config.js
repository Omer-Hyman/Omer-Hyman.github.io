import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },
  {
    files: ['**/src/.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
  eslintConfigPrettier,
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      prettier: import('eslint-plugin-prettier'),
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      'prefer-const': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.output/**',
      '**/.vscode/**',
      '**/.git/**',
      '**/android/**',
      'backend/node_modules/**',
      'backend/coverage/**',
      'backend/dist/**',
      'frontend/src/reportWebVitals.js',
    ],
  },
]);
