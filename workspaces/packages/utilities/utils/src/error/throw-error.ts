/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { FunctionUtility } from '../function';
import { StringUtility } from '../string';

/**
 * A constructor that builds an {@link Error}.
 */
export type ErrorConstructor = new (message?: string) => Error;

/**
 * Throws an {@link Error}.
 *
 * @param {ErrorConstructor} ErrorType
 * @param {string} [defaultMessage]
 * @param {string} [customMessage]
 *
 * @returns {never}
 *
 * @throws {PrimitiveTypeError} If {@link ErrorType} is not a function.
 */
export function throwError(ErrorType: ErrorConstructor, defaultMessage?: string, customMessage?: string): never {
    FunctionUtility.assertFunction(ErrorType, 'ErrorType must be a function.');

    if (StringUtility.isSingleLineText(customMessage)) {
        throw new ErrorType(customMessage);
    }

    if (StringUtility.isSingleLineText(defaultMessage)) {
        throw new ErrorType(defaultMessage);
    }

    throw new ErrorType();
}
