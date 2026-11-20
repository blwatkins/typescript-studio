/*
 * Copyright (c) 2026 Brittni Watkins.
 */

import path from 'path';

import { fileURLToPath } from 'url';

import { buildTypeScriptConfig } from '@blwatkins/eslint-utils';

export default buildTypeScriptConfig(path.dirname(fileURLToPath(import.meta.url)));
