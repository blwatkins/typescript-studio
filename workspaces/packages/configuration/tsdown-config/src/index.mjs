/*
 * Copyright (c) 2024-2026 Brittni Watkins. All rights reserved.
 */

import { defineConfig } from 'tsdown';

export function buildConfig() {
    return defineConfig({
        entry: {
            index: './src/index.ts'
        },
        outDir: './_dist',
        sourcemap: false,
        clean: true,
        dts: true,
        failOnWarn: true,
        minify: true,
        format: ['esm']
    });
}
