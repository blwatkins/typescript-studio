/*
 * Copyright (c) 2024-2026 Brittni Watkins.
 */

import path from 'path';

import { fileURLToPath } from 'url';

import { buildSketchConfig } from '@blwatkins/webpack-utils';

export default buildSketchConfig(path.dirname(fileURLToPath(import.meta.url)));
