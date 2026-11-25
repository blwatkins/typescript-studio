/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { PrimitiveTypeError, StaticInstanceError, throwError } from '../error';

/**
 * Static properties and methods for validating functions and function types.
 */
export class FunctionUtility {
    /**
     * Private constructor.
     *
     * @throws {StaticInstanceError} When the class is instantiated.
     * {@link FunctionUtility} is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new StaticInstanceError('FunctionUtility is a static class and cannot be instantiated.');
    }

    /**
     * Is `input` a callable function?
     *
     * @remarks This method does not enforce type checking for function parameters or return type.
     *
     * @param {unknown} input
     *
     * @returns {input is (...args: unknown[]) => unknown}
     *
     * @public
     */
    public static isFunction(input: unknown): input is (...args: unknown[]) => unknown {
        return typeof input === 'function';
    }

    /**
     * Asserts that `input` is a callable function.
     *
     * @remarks This method does not enforce type checking for function parameters or return type.
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is (...args: unknown[]) => unknown}
     *
     * @throws {PrimitiveTypeError} When `input` is not a callable function.
     *
     * @public
     */
    public static assertFunction(input: unknown, message?: string): asserts input is (...args: unknown[]) => unknown {
        if (!FunctionUtility.isFunction(input)) {
            throwError(PrimitiveTypeError, 'Expected a function.', message);
        }
    }
}
