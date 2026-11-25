/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { BooleanUtility } from '../boolean';
import { PrimitiveTypeError, StaticInstanceError, throwError } from '../error';

/**
 * Static properties and methods for validating numbers and number types.
 *
 * This class is static and cannot be instantiated.
 */
export class NumberUtility {
    /**
     * Private constructor.
     *
     * @throws {StaticInstanceError} When the class is instantiated.
     * {@link NumberUtility} is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new StaticInstanceError('NumberUtility is a static class and cannot be instantiated.');
    }

    /**
     * Is `input` a number?
     *
     * @param {unknown} input
     *
     * @returns {input is number}
     *
     * @public
     */
    public static isNumber(input: unknown): input is number {
        return typeof input === 'number';
    }

    /**
     * Asserts that `input` is a number.
     *
     * @see {@link NumberUtility.isNumber}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is number}
     *
     * @throws {PrimitiveTypeError} When `input` is not a number.
     *
     * @public
     */
    public static assertNumber(input: unknown, message?: string): asserts input is number {
        if (!NumberUtility.isNumber(input)) {
            throwError(PrimitiveTypeError, 'Expected a number.', message);
        }
    }

    /**
     * Is `input` a finite number?
     *
     * @param {unknown} input
     *
     * @returns {input is number}
     *
     * @public
     */
    public static isFinite(input: unknown): input is number {
        return Number.isFinite(input);
    }

    /**
     * Asserts that `input` is a finite number.
     *
     * @see {@link NumberUtility.isFinite}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is number}
     *
     * @throws {PrimitiveTypeError} When `input` is not a finite number.
     *
     * @public
     */
    public static assertFinite(input: unknown, message?: string): asserts input is number {
        if (!NumberUtility.isFinite(input)) {
            throwError(PrimitiveTypeError, 'Expected a finite number.', message);
        }
    }

    /**
     * Is `input` a number within the safe integer range?
     *
     * @remarks To be within the safe integer range, a value must be a finite number in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @see {@link NumberUtility.isFinite}
     *
     * @param {unknown} input
     *
     * @returns {input is number}
     *
     * @public
     */
    public static isSafe(input: unknown): input is number {
        if (NumberUtility.isFinite(input)) {
            return (input >= Number.MIN_SAFE_INTEGER) && (input <= Number.MAX_SAFE_INTEGER);
        }

        return false;
    }

    /**
     * Asserts that `input` is a number within the safe integer range.
     *
     * @remarks To be within the safe integer range, a value must be a finite number in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @see {@link NumberUtility.isSafe}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is number}
     *
     * @throws {PrimitiveTypeError} When `input` is not a finite number in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @public
     */
    public static assertSafe(input: unknown, message?: string): asserts input is number {
        if (!NumberUtility.isSafe(input)) {
            throwError(PrimitiveTypeError, 'Expected a finite number in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].', message);
        }
    }

    /**
     * Is `input` an integer within the safe integer range?
     *
     * @remarks To be within the safe integer range, a value must be a finite number in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @see {@link NumberUtility.isSafe}
     *
     * @param {unknown} input
     *
     * @returns {input is number}
     *
     * @public
     */
    public static isSafeInteger(input: unknown): input is number {
        return NumberUtility.isSafe(input) && Number.isInteger(input);
    }

    /**
     * Asserts that `input` is an integer within the safe integer range.
     *
     * @remarks To be within the safe integer range, a value must be a finite number in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @see {@link NumberUtility.isSafeInteger}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is number}
     *
     * @throws {PrimitiveTypeError} When `input` is not an integer in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @public
     */
    public static assertSafeInteger(input: unknown, message?: string): asserts input is number {
        if (!NumberUtility.isSafeInteger(input)) {
            throwError(PrimitiveTypeError, 'Expected an integer in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].', message);
        }
    }

    /**
     * Is `input` a positive number within the safe integer range?
     *
     * @remarks To be within the safe integer range, a value must be a finite number in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @see {@link BooleanUtility.assertBoolean}
     * @see {@link NumberUtility.isSafe}
     *
     * @param {unknown} input
     * @param {boolean} [zeroInclusive] - `true` if zero (0) should return `true`; `false` if zero (0) should return `false`.
     *
     * @returns {input is number}
     *
     * @throws {PrimitiveTypeError} When `zeroInclusive` is not a boolean.
     *
     * @public
     */
    public static isPositive(input: unknown, zeroInclusive: boolean = false): input is number {
        BooleanUtility.assertBoolean(zeroInclusive, 'zeroInclusive must be a boolean.');

        if (NumberUtility.isSafe(input)) {
            if (zeroInclusive) {
                return input >= 0;
            }

            return input > 0;
        }

        return false;
    }

    /**
     * Asserts that `input` is a positive number within the safe integer range.
     *
     * @remarks To be within the safe integer range, a value must be a finite number in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @see {@link NumberUtility.isPositive}
     *
     * @param {unknown} input
     * @param {boolean} [zeroInclusive] - `true` if zero (0) should return `true`; `false` if zero (0) should return `false`.
     * @param {string} [message]
     *
     * @returns {asserts input is number}
     *
     * @throws {PrimitiveTypeError} When `zeroInclusive` is not a boolean.
     * @throws {PrimitiveTypeError} When `input` is not a positive number less than or equal to {@link Number.MAX_SAFE_INTEGER} or zero when `zeroInclusive` is `true`.
     *
     * @public
     */
    public static assertPositive(input: unknown, zeroInclusive: boolean = false, message?: string): asserts input is number {
        if (!NumberUtility.isPositive(input, zeroInclusive)) {
            let rangeCharacter: '[' | '(' = '(';
            if (zeroInclusive) rangeCharacter = '[';
            throwError(PrimitiveTypeError, `Expected a number in the range ${rangeCharacter}0, MAX_SAFE_INTEGER].`, message);
        }
    }

    /**
     * Is `input` a positive integer within the safe integer range?
     *
     * @remarks To be within the safe integer range, a value must be a finite number in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @see {@link NumberUtility.isPositive}
     *
     * @param {unknown} input
     * @param {boolean} [zeroInclusive] - `true` if zero (0) should return `true`; `false` if zero (0) should return `false`.
     *
     * @returns {input is number}
     *
     * @throws {PrimitiveTypeError} When `zeroInclusive` is not a boolean.
     *
     * @public
     */
    public static isPositiveInteger(input: unknown, zeroInclusive: boolean = false): input is number {
        return NumberUtility.isPositive(input, zeroInclusive) && Number.isInteger(input);
    }

    /**
     * Asserts that `input` is a positive integer within the safe integer range.
     *
     * @remarks To be within the safe integer range, a value must be a finite number in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @see {@link NumberUtility.isPositiveInteger}
     *
     * @param {unknown} input
     * @param {boolean} [zeroInclusive] - `true` if zero (0) should return `true`; `false` if zero (0) should return `false`.
     * @param {string} [message]
     *
     * @returns {asserts input is number}
     *
     * @throws {PrimitiveTypeError} When `zeroInclusive` is not a boolean.
     * @throws {PrimitiveTypeError} When `input` is not a positive integer less than or equal to {@link Number.MAX_SAFE_INTEGER} or zero when `zeroInclusive` is `true`.
     *
     * @public
     */
    public static assertPositiveInteger(input: unknown, zeroInclusive: boolean = false, message?: string): asserts input is number {
        if (!NumberUtility.isPositiveInteger(input, zeroInclusive)) {
            let rangeCharacter: '[' | '(' = '(';
            if (zeroInclusive) rangeCharacter = '[';
            throwError(PrimitiveTypeError, `Expected an integer in the range ${rangeCharacter}0, MAX_SAFE_INTEGER].`, message);
        }
    }

    /**
     * Is `a` greater than `b`?
     *
     * @see {@link NumberUtility.assertSafe}
     *
     * @param {number} a - The value that must be the greater of the two.
     * @param {number} b - The value that must be the lesser of the two.
     *
     * @returns {boolean}
     *
     * @throws {PrimitiveTypeError} When `a` and `b` are not both numbers in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @public
     */
    public static isGT(a: number, b: number): boolean {
        NumberUtility.assertSafe(a, 'a must be in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].');
        NumberUtility.assertSafe(b, 'b must be in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].');
        return a > b;
    }

    /**
     * Is `a` greater than or equal to `b`?
     *
     * @see {@link NumberUtility.assertSafe}
     *
     * @param {number} a - The value that must be the greater of the two.
     * @param {number} b - The value that must be the lesser of the two.
     *
     * @returns {boolean}
     *
     * @throws {PrimitiveTypeError} When `a` and `b` are not both numbers in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @public
     */
    public static isGTE(a: number, b: number): boolean {
        NumberUtility.assertSafe(a, 'a must be in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].');
        NumberUtility.assertSafe(b, 'b must be in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].');
        return a >= b;
    }

    /**
     * Is `a` less than `b`?
     *
     * @see {@link NumberUtility.assertSafe}
     *
     * @param {number} a - The value that must be the lesser of the two.
     * @param {number} b - The value that must be the greater of the two.
     *
     * @returns {boolean}
     *
     * @throws {PrimitiveTypeError} When `a` and `b` are not both numbers in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @public
     */
    public static isLT(a: number, b: number): boolean {
        NumberUtility.assertSafe(a, 'a must be in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].');
        NumberUtility.assertSafe(b, 'b must be in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].');
        return a < b;
    }

    /**
     * Is `a` less than or equal to `b`?
     *
     * @see {@link NumberUtility.assertSafe}
     *
     * @param {number} a - The value that must be the lesser of the two.
     * @param {number} b - The value that must be the greater of the two.
     *
     * @returns {boolean}
     *
     * @throws {PrimitiveTypeError} When `a` and `b` are not both numbers in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}].
     *
     * @public
     */
    public static isLTE(a: number, b: number): boolean {
        NumberUtility.assertSafe(a, 'a must be in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].');
        NumberUtility.assertSafe(b, 'b must be in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].');
        return a <= b;
    }

    /**
     * Do `min` and `max` form a valid range?
     *
     * @remarks For a range to be valid, `min` must be less than or equal to `max`?
     *
     * @see {@link NumberUtility.assertSafe}
     *
     * @param {number} min
     * @param {number} max
     *
     * @returns {boolean}
     *
     * @throws {PrimitiveTypeError} When `min` and `max` are not both numbers in the range [{@link Number.MIN_SAFE_INTEGER}, {@link Number.MAX_SAFE_INTEGER}]..
     *
     * @public
     */
    public static isValidRange(min: number, max: number): boolean {
        NumberUtility.assertSafe(min, 'min must be in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].');
        NumberUtility.assertSafe(max, 'max must be in the range [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].');
        return min <= max;
    }

    // TODO - isPositiveInteger
    // TODO - assertPositiveInteger
    // TODO - assertValidRange
    // TODO - isInRange
    // TODO - assertInRange
    // TODO - assertGT
    // TODO - assertGTE
    // TODO - assertLT
    // TODO - assertLTE
}
