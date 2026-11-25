/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { PrimitiveTypeError, StaticInstanceError, throwError } from '../error';

/**
 * Static methods and properties for validating arrays and array types.
 *
 * This class is static and cannot be instantiated.
 */
export class ArrayUtility {
    /**
     * Private constructor.
     *
     * @throws {StaticInstanceError} When the class is instantiated.
     * {@link ArrayUtility} is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new StaticInstanceError('ArrayUtility is a static class and cannot be instantiated.');
    }

    /**
     * Gets the maximum length of an array.
     *
     * @returns {number} (2^32) - 1
     *
     * @public
     */
    public static get MAX_LENGTH(): number {
        return Math.pow(2, 32) - 1;
    }

    /**
     * Is `input` an array?
     *
     * @remarks This method does not enforce size requirements, density requirements, or type checking for any array elements.
     *
     * @param {unknown} input
     *
     * @returns {input is unknown[]}
     *
     * @public
     */
    public static isArray(input: unknown): input is unknown[] {
        return Array.isArray(input);
    }

    /**
     * Asserts that `input` is an array.
     *
     * @remarks This method does not enforce size requirements, density requirements, or type checking for any array elements.
     *
     * @see {@link ArrayUtility.isArray}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is unknown[]}
     *
     * @throws {PrimitiveTypeError} When `input` is not an array.
     *
     * @public
     */
    public static assertArray(input: unknown, message?: string): asserts input is unknown[] {
        if (!ArrayUtility.isArray(input)) {
            throwError(PrimitiveTypeError, 'Expected an array.', message);
        }
    }

    /**
     * Is `input` a dense array?
     *
     * @remarks A dense array has an element at every index.
     * An array with a hole at any index, such as `[1, , 3]` or `new Array(3)`, is a sparse array and is rejected.
     * An element that is explicitly `undefined` is not a hole, so `[undefined, 1]` is a dense array.
     * An empty array is a dense array.
     * This method does not enforce size requirements or type checking for any array elements.
     *
     * @param {unknown} input
     *
     * @returns {input is unknown[]}
     *
     * @public
     */
    public static isDenseArray(input: unknown): input is unknown[] {
        if (!ArrayUtility.isArray(input)) {
            return false;
        }

        for (let index: number = 0; index < input.length; index++) {
            if (!Object.hasOwn(input, index)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Asserts that `input` is a dense array.
     *
     * @remarks A dense array has an element at every index.
     * An array with a hole at any index, such as `[1, , 3]` or `new Array(3)`, is a sparse array and is rejected.
     * An element that is explicitly `undefined` is not a hole, so `[undefined, 1]` is a dense array.
     * An empty array is a dense array.
     * This method does not enforce size requirements or type checking for any array elements.
     *
     * @see {@link ArrayUtility.isDenseArray}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is unknown[]}
     *
     * @throws {PrimitiveTypeError} When `input` is not a dense array.
     *
     * @public
     */
    public static assertDenseArray(input: unknown, message?: string): asserts input is unknown[] {
        if (!ArrayUtility.isDenseArray(input)) {
            throwError(PrimitiveTypeError, 'Expected a dense array.', message);
        }
    }

    // TODO - isValidIndex
    // TODO - assertValidIndex
    // TODO - hasMinLength
    // TODO - hasMaxLength
    // TODO - hasLength
    // TODO - assertMinLength
    // TODO - assertMaxLength
    // TODO - assertLength
    // TODO - trimArray(array, length)
}
