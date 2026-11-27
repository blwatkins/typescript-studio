/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { LengthRangeError, PrimitiveTypeError, StaticInstanceError, throwError } from '../error';
import { NumberUtility } from '../number';

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

    /**
     * Does `input` have a length greater than or equal to `minLength`?
     *
     * @see {@link ArrayUtility.assertArray}
     * @see {@link NumberUtility.assertPositiveInteger}
     *
     * @param {unknown[]} input
     * @param {number} minLength
     *
     * @returns {boolean}
     *
     * @throws {PrimitiveTypeError} When `input` is not an array.
     * @throws {PrimitiveTypeError} When `minLength` is not zero or a positive integer.
     *
     * @public
     */
    public static hasMinLength(input: unknown[], minLength: number): boolean {
        ArrayUtility.assertArray(input);
        NumberUtility.assertPositiveInteger(minLength, true);
        return input.length >= minLength;
    }

    /**
     * Assers that `input` has a length greater than or equal to `minLength`.
     *
     * @param {unknown[]} input
     * @param {number} minLength
     * @param {string} [message]
     *
     * @returns {void}
     *
     * @throws {PrimitiveTypeError} When `input` is not an array.
     * @throws {PrimitiveTypeError} When `minLength` is not zero or a positive integer.
     * @throws {LengthRangeError} When `input` does not have a length greater than or equal to `minLength`.
     *
     * @public
     */
    public static assertMinLength(input: unknown[], minLength: number, message?: string): void {
        if (!ArrayUtility.hasMinLength(input, minLength)) {
            throwError(LengthRangeError, 'Expected input to meet minimum length requirements.', message);
        }
    }

    /**
     * Does `input` have a length less than or equal to `maxLength`?
     *
     * @see {@link ArrayUtility.assertArray}
     * @see {@link NumberUtility.assertPositiveInteger}
     *
     * @param {unknown[]} input
     * @param {number} maxLength
     *
     * @returns {boolean}
     *
     * @throws {PrimitiveTypeError} When `input` is not an array.
     * @throws {PrimitiveTypeError} When `maxLength` is not zero or a positive integer.
     *
     * @public
     */
    public static hasMaxLength(input: unknown[], maxLength: number): boolean {
        ArrayUtility.assertArray(input);
        NumberUtility.assertPositiveInteger(maxLength, true);
        return input.length <= maxLength;
    }

    /**
     * Assers that `input` has a length less than or equal to `maxLength`.
     *
     * @param {unknown[]} input
     * @param {number} maxLength
     * @param {string} [message]
     *
     * @returns {void}
     *
     * @throws {PrimitiveTypeError} When `input` is not an array.
     * @throws {PrimitiveTypeError} When `maxLength` is not zero or a positive integer.
     * @throws {LengthRangeError} When `input` does not have a length less than or equal to `maxLength`.
     *
     * @public
     */
    public static assertMaxLength(input: unknown[], maxLength: number, message?: string): void {
        if (!ArrayUtility.hasMaxLength(input, maxLength)) {
            throwError(LengthRangeError, 'Expected input to meet maximum length requirements.', message);
        }
    }

    // TODO - isValidIndex
    // TODO - assertValidIndex
    // TODO - hasLength
    // TODO - assertLength
    // TODO - trimArray(array, length)
}
