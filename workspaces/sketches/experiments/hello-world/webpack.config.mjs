/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import path from 'path';

import { fileURLToPath } from 'url';

import { buildSketchConfig } from '@blwatkins/webpack-config';

export default buildSketchConfig(path.dirname(fileURLToPath(import.meta.url)));
