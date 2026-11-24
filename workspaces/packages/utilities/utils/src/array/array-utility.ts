/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { PrimitiveTypeError, StaticInstanceError } from '../error';
import { StringUtility } from '../string';

/**
 * Static methods and properties for validating arrays and array types.
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
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected an array.');
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
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected a dense array.');
        }
    }

    // public static hasMinLength(input: unknown[], minLength: number): boolean {
    //     ArrayUtility.assertDenseArray(input);
    //     return false;
    // }
}
