/*
 * Copyright (c) 2024-2026 Brittni Watkins.
 */

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import esX from 'eslint-plugin-es-x';
import globals from 'globals';

import path from 'path';

import { defineConfig, globalIgnores } from 'eslint/config';

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
                // path.join(packageDir,'**/*.js'),
                // path.join(packageDir,'**/*.mjs'),
                // path.join(packageDir,'**/*.cjs'),
                // path.join(packageDir,'**/*.jsx')
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
                /* @eslint/js */

                'array-callback-return': ['error', {
                    checkForEach: true
                }],

                'no-await-in-loop': 'error',

                'no-cond-assign': ['error', 'always'],

                'no-constant-condition': ['error', {
                    checkLoops: 'all'
                }],

                'no-constructor-return': 'error',

                'no-duplicate-imports': ['error', {
                    includeExports: true
                }],

                'no-inner-declarations': ['error', 'both'],

                'no-promise-executor-return': 'error',

                'no-self-compare': 'error',

                'no-template-curly-in-string': 'error',

                'no-unmodified-loop-condition': 'error',

                'no-unreachable-loop': 'error',

                'no-unsafe-negation': ['error', {
                    enforceForOrderingRelations: true
                }],

                'no-unsafe-optional-chaining': ['error', {
                    disallowArithmeticOperators: true
                }],

                'no-useless-assignment': 'error',

                'require-atomic-updates': 'error',

                'require-await': 'error',

                'use-isnan': ['error', {
                    enforceForSwitchCase: true,
                    enforceForIndexOf: true
                }],

                'valid-typeof': ['error', {
                    requireStringLiterals: true
                }],

                'one-var': ['error', 'never'],

                /* @stylistic/eslint-plugin */

                '@stylistic/brace-style': ['error', '1tbs'],

                '@stylistic/no-extra-semi': 'error',

                '@stylistic/function-call-spacing': ['error', 'never'],

                '@stylistic/comma-dangle': ['error', 'never'],

                '@stylistic/indent': ['error', 4, {
                    SwitchCase: 1,
                    FunctionDeclaration: {
                        parameters: 'first'
                    },
                    FunctionExpression: {
                        parameters: 'first'
                    }
                }],

                '@stylistic/indent-binary-ops': ['error', 4],

                '@stylistic/list-style': ['error', {
                    overrides: {
                        '{}': {
                            singleLine: {
                                spacing: 'always',
                                maxItems: 5
                            }
                        }
                    }
                }],

                '@stylistic/member-delimiter-style': ['error', {
                    multiline: {
                        delimiter: 'semi',
                        requireLast: true
                    },
                    singleline: {
                        delimiter: 'semi',
                        requireLast: true
                    }
                }],

                '@stylistic/operator-linebreak': ['error', 'before'],

                '@stylistic/quotes': ['error', 'single', {
                    avoidEscape: true,
                    allowTemplateLiterals: 'always'
                }],

                '@stylistic/semi': ['error', 'always']
            }
        }
    ]);
}
