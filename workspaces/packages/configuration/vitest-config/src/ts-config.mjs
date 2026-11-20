/*
 * Copyright (c) 2025-2026 Brittni Watkins.
 */

import path from 'path';

import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @param environment {'node' | 'jsdom' | 'happy-dom' | 'edge-runtime'}
 */
export function buildTypeScriptConfig(environment) {
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
                tsconfig: path.join(__dirname, '../tsconfig.vitest.json'),
                include: ['test/**/*.{test,spec}.{ts,mts,cts,tsx}']
            }
        }
    });
}
