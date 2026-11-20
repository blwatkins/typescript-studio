/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

export const jsdocRules = {
    'jsdoc/check-access': 'error',

    'jsdoc/check-alignment': 'error',

    'jsdoc/check-param-names': 'error',

    'jsdoc/check-tag-names': ['error', {
        typed: false,
        definedTags: ['since', 'category']
    }],

    'jsdoc/check-types': 'error',

    'jsdoc/empty-tags': 'error',

    'jsdoc/escape-inline-tags': 'error',

    'jsdoc/implements-on-classes': 'error',

    'jsdoc/multiline-blocks': 'error',

    'jsdoc/no-defaults': 'error',

    'jsdoc/no-multi-asterisks': 'error',

    'jsdoc/no-types': 'off',

    'jsdoc/reject-any-type': 'error',

    'jsdoc/reject-function-type': 'error',

    'jsdoc/require-description': 'error',

    'jsdoc/require-jsdoc': 'error',

    'jsdoc/require-param': 'error',

    'jsdoc/require-param-description': 'off',

    'jsdoc/require-param-name': 'error',

    'jsdoc/require-param-type': 'error',

    'jsdoc/require-returns': ['error', {
        forceRequireReturn: true,
        forceReturnsWithAsync: true
    }],

    'jsdoc/require-returns-check': 'error',

    'jsdoc/require-returns-description': 'off',

    'jsdoc/require-returns-type': 'error',

    'jsdoc/require-throws': 'error',

    'jsdoc/require-throws-type': 'error',

    'jsdoc/sort-tags': ['error', {
        tagSequence: [
            { tags: ['remarks'] },
            { tags: ['see'] },
            { tags: ['template'] },
            { tags: ['param'] },
            { tags: ['returns'] },
            { tags: ['throws'] },
            { tags: ['default'] },
            { tags: ['example'] },
            { tags: ['deprecated'] },
            { tags: [
                'type',
                'readonly',
                'private',
                'protected',
                'public',
                'abstract',
                'override',
                'since',
                'category'
            ]}
        ]
    }],

    'jsdoc/tag-lines': ['error', 'any', {
        startLines: null,
        endLines: null
    }],

    'jsdoc/ts-no-empty-object-type': 'error',

    'jsdoc/valid-types': 'error'
};
