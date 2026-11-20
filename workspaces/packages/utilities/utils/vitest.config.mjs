/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import path from 'path';

import { fileURLToPath } from 'url';

import { buildTypeScriptConfig } from '@blwatkins/vitest-config';

export default buildTypeScriptConfig(path.dirname(fileURLToPath(import.meta.url)));
