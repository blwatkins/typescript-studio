/*
 * Copyright (c) 2026 Brittni Watkins.
 */

export const eslintRules = {
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

    'one-var': ['error', 'never']
};
