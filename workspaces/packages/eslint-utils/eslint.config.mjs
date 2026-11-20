/*
 * Copyright (c) 2026 Brittni Watkins.
 */

import path from 'path';

import { fileURLToPath } from 'url';

import { buildJavaScriptConfig } from './src/js-config.mjs';

export default buildJavaScriptConfig(path.dirname(fileURLToPath(import.meta.url)));
