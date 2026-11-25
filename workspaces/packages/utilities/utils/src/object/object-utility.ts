/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { PrimitiveTypeError, StaticInstanceError, throwError } from '../error';

/**
 * Static properties and methods for validating objects and object types.
 *
 * This class is static and cannot be instantiated.
 */
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

    /**
     * Is `input` a non-array object?
     *
     * @remarks This method does not enforce presence or type checking for any object properties.
     * Additionally, although both are typed as `object` by TypeScript and JavaScript, `null` and arrays are rejected by this method.
     *
     * @param {unknown} input
     *
     * @returns {input is object}
     *
     * @public
     */
    public static isObject(input: unknown): input is object {
        return input !== null && typeof input === 'object' && !Array.isArray(input);
    }

    /**
     * Asserts that `input` is a non-array object.
     *
     * @remarks This method does not enforce presence or type checking for any object properties.
     * Additionally, although both are typed as `object` by TypeScript and JavaScript, `null` and arrays are rejected by this method.
     *
     * @see {@link ObjectUtility.isObject}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is object}
     *
     * @throws {PrimitiveTypeError} When `input` is not a non-array object.
     *
     * @public
     */
    public static assertObject(input: unknown, message?: string): asserts input is object {
        if (!this.isObject(input)) {
            throwError(PrimitiveTypeError, 'Expected a non-array object', message);
        }
    }
}
