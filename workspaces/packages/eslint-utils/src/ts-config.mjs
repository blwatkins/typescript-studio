/*
 * Copyright (c) 2026 Brittni Watkins.
 */

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import esX from 'eslint-plugin-es-x';
import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';
import path from 'path';
import tsEslint from 'typescript-eslint';

import { defineConfig, globalIgnores } from 'eslint/config';

import { eslintRules } from './rules/eslint.mjs';
import { jsdocRules } from './rules/jsdoc.mjs';
import { stylisticRules } from './rules/stylistic.mjs';
import { typescriptRules } from './rules/typescript.mjs';

export function buildTypeScriptConfig(packageDir) {
    return defineConfig([
        globalIgnores([
            path.join(packageDir, '_compiled/**'),
            path.join(packageDir, '_coverage/**'),
            path.join(packageDir, '_dist/**'),
            path.join(packageDir, '_doc/**'),
            path.join(packageDir, '**/*.js'),
            path.join(packageDir, '**/*.cjs'),
            path.join(packageDir, '**/*.mjs'),
            path.join(packageDir, '**/*.jsx')
        ]),
        {
            files: [
                '**/*.ts',
                '**/*.d.ts',
                '**/*.mts',
                '**/*.d.mts',
                '**/*.cts',
                '**/*.d.cts',
                '**/*.tsx'
            ],
            plugins: {
                'es-x': esX,
                '@stylistic': stylistic
            },
            extends: [
                eslint.configs.recommended,
                stylistic.configs.recommended,
                esX.configs['flat/restrict-to-es2024'],
                ...tsEslint.configs.recommendedTypeChecked,
                ...tsEslint.configs.strictTypeChecked,
                ...tsEslint.configs.stylisticTypeChecked
            ],
            languageOptions: {
                ecmaVersion: 2024,
                sourceType: 'module',
                parserOptions: {
                    projectService: true
                },
                globals: {
                    ...globals.node
                }
            },
            rules: {
                ...eslintRules,
                ...stylisticRules,
                ...typescriptRules
            }
        },
        {
            files: ['src/**/*.ts'],
            plugins: {
                jsdoc
            },
            extends: [
                jsdoc.configs['flat/recommended-typescript']
            ],
            rules: {
                ...jsdocRules
            }
        }
    ]);
}
