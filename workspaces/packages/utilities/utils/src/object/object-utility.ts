/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { StaticInstanceError } from '../error';

export class ObjectUtility {
    /**
     * Private constructor.
     *
     * @throws {StaticInstanceError} When the class is instantiated.
     * {@link ObjectUtility} is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new StaticInstanceError('ObjectUtility is a static class and cannot be instantiated.');
    }

    public static isObject(input: unknown): input is object {
        return input !== null && typeof input === 'object' && !Array.isArray(input);
    }
}
