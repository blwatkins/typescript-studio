/*
 * Copyright (c) 2024-2026 Brittni Watkins. All rights reserved.
 */

/**
 * Static properties and methods for validating string types.
 */
export class StringUtility {
    // TODO - private constructor
    // TODO - static instance error

    /**
     * Is `input` a string?
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isString(input: unknown): input is string {
        return typeof input === 'string';
    }
}
