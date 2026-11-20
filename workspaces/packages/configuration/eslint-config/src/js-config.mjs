/*
 * Copyright (c) 2024-2026 Brittni Watkins. All rights reserved.
 */

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import esX from 'eslint-plugin-es-x';
import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';

import { defineConfig, globalIgnores } from 'eslint/config';

import { eslintRules } from './rules/eslint.mjs';
import { jsdocRules } from './rules/jsdoc.mjs';
import { stylisticRules } from './rules/stylistic.mjs';

/**
 * Builds the ESLint configuration for JavaScript files.
 *
 * @returns {object} The ESLint configuration object.
 */
export function buildJavaScriptConfig() {
    return defineConfig([
        globalIgnores([
            '_compiled/**',
            '_coverage/**',
            '_dist/**',
            '_doc/**'
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
        },
        {
            files: [
                'src/**/*.js',
                'src/**/*.mjs',
                'src/**/*.cjs'
            ],
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
