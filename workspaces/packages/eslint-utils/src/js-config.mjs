/*
 * Copyright (c) 2024-2026 Brittni Watkins.
 */

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import esX from 'eslint-plugin-es-x';
import globals from 'globals';
import path from 'path';

import { defineConfig, globalIgnores } from 'eslint/config';

import { eslintRules } from './rules/eslint.mjs';
import { stylisticRules } from './rules/stylistic.mjs';

export function buildJavaScriptConfig(packageDir) {
    return defineConfig([
        globalIgnores([
            path.join(packageDir, '_compiled/**'),
            path.join(packageDir, '_coverage/**'),
            path.join(packageDir, '_dist/**'),
            path.join(packageDir, '_doc/**')
        ]),
        {
            files: [
                '**/*.js',
                '**/*.mjs',
                '**/*.cjs',
                '**/*.jsx'
            ],
            plugins: {
                'es-x': esX,
                '@stylistic': stylistic
            },
            extends: [
                eslint.configs.recommended,
                stylistic.configs.recommended,
                esX.configs['flat/restrict-to-es2024']
            ],
            languageOptions: {
                ecmaVersion: 2024,
                sourceType: 'module',
                globals: {
                    ...globals.node
                }
            },
            rules: {
                ...eslintRules,
                ...stylisticRules
            }
        }
    ]);
}
