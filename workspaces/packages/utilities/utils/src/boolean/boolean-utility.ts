/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { PrimitiveTypeError, StaticInstanceError, throwError } from '../error';

export class BooleanUtility {
    /**
     * Private constructor.
     *
     * @throws {StaticInstanceError} When the class is instantiated.
     * {@link BooleanUtility} is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new StaticInstanceError('BooleanUtility is a static class and cannot be instantiated.');
    }

    /**
     * Is `input` a boolean?
     *
     * @param {unknown} input
     *
     * @returns {input is boolean}
     *
     * @public
     */
    public static isBoolean(input: unknown): input is boolean {
        return typeof input === 'boolean';
    }

    /**
     * Asserts that `input` is a boolean.
     *
     * @see {@link BooleanUtility.isBoolean}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is boolean}
     *
     * @throws {PrimitiveTypeError} When `input` is not a boolean.
     *
     * @public
     */
    public static assertBoolean(input: unknown, message?: string): asserts input is boolean {
        if (!BooleanUtility.isBoolean(input)) {
            throwError(PrimitiveTypeError, 'Expected a boolean.', message);
        }
    }
}
