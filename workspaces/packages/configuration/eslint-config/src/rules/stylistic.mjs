/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

export const stylisticRules = {
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
        singleLine: {
            maxItems: 5
        },
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
};
