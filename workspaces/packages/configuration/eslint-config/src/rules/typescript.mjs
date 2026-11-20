/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

export const typescriptRules = {
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error', {
        allow: []
    }],

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', {
        allowShortCircuit: false
    }],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',

    '@typescript-eslint/class-literal-property-style': ['error', 'getters'],

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    '@typescript-eslint/no-deprecated': 'warn',

    '@typescript-eslint/no-dynamic-delete': 'error',

    '@typescript-eslint/no-explicit-any': 'error',

    '@typescript-eslint/no-extraneous-class': ['error', {
        allowStaticOnly: true
    }],

    '@typescript-eslint/no-inferrable-types': 'off',

    '@typescript-eslint/no-unsafe-member-access': 'error',

    '@typescript-eslint/prefer-for-of': 'error',

    '@typescript-eslint/restrict-template-expressions': ['error', {
        allowNumber: true,
        allowBoolean: true
    }]
};
