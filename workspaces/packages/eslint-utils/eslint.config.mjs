/*
 * Copyright (c) 2026 Brittni Watkins.
 */

import { buildJavaScriptConfig } from './js-config.mjs';

import path from 'path';

import { fileURLToPath } from 'url';

export default buildJavaScriptConfig(path.dirname(fileURLToPath(import.meta.url)));
