/*
 * Copyright (c) 2025-2026 Brittni Watkins. All rights reserved.
 */

import path from 'path';

import { defineConfig } from 'vitest/config';

/**
 * @param {string} packageDir - The path to the package directory.
 * @param {string} environment - The environment to use for testing.
 */
export function buildTypeScriptConfig(packageDir, environment = 'node') {
    return defineConfig({
        test: {
            environment,
            include: ['test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
            exclude: [
                '_dist/**',
                '_compiled/**',
                '_coverage/**',
                '_doc/**'
            ],
            typecheck: {
                enabled: true,
                tsconfig: path.join(packageDir, 'tsconfig.vitest.json'),
                include: ['test/**/*.{test,spec}.{ts,mts,cts,tsx}']
            },
            coverage: {
                provider: 'v8',
                reporter: [
                    'text',
                    'lcov',
                    'json',
                    'json-summary',
                    'clover',
                    'html'
                ],
                reportsDirectory: path.join(packageDir, '_coverage'),
                exclude: [
                    '_dist/**',
                    '_compiled/**',
                    '_coverage/**',
                    '_doc/**',
                    'test/**',
                    '**/*.d.ts',
                    '**/*.config.{js,mjs,cjs,ts}',
                    'eslint.config.*.mjs'
                ]
            }
        }
    });
}
