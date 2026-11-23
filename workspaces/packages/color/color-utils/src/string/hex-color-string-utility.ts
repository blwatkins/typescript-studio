/*
 * Copyright (c) 2024-2026 Brittni Watkins. All rights reserved.
 */

import { PrimitiveTypeError, StaticInstanceError, StringUtility } from '@blwatkins/utils';

const regularExpressions = {
    hexColor: /^#([A-F0-9]{6}(?:[A-F0-9]{2})?|[a-f0-9]{6}(?:[a-f0-9]{2})?)$/,
    hexColorRGB: /^#([A-F0-9]{6}|[a-f0-9]{6})$/,
    hexColorRGBA: /^#([A-F0-9]{8}|[a-f0-9]{8})$/
};

/**
 * Static properties and methods for validating formatted hex code color strings.
 */
export class HexColorStringUtility {
    /**
     * Private constructor.
     *
     * @throws {StaticInstanceError} When the class is instantiated.
     * {@link HexColorStringUtility} is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new StaticInstanceError('HexColorStringUtility is a static class and cannot be instantiated.');
    }

    /**
     * Gets the regular expression for hex colors.
     *
     * @remarks Case must be consistent in hex color strings: either all lowercase or all uppercase.
     *
     * @returns {RegExp} Regular expression pattern for hex color strings in the format `#RRGGBB` or `#RRGGBBAA`.
     *
     * @public
     */
    public static get hexColor(): RegExp {
        return regularExpressions.hexColor;
    }

    /**
     * Gets the regular expression for hex colors in RGB format.
     *
     * @remarks Case must be consistent in hex color strings: either all lowercase or all uppercase.
     *
     * @returns {RegExp} Regular expression pattern for hex color strings in the format `#RRGGBB`.
     *
     * @public
     */
    public static get hexColorRGB(): RegExp {
        return regularExpressions.hexColorRGB;
    }

    /**
     * Gets the regular expression for hex colors in RGBA format.
     *
     * @remarks Case must be consistent in hex color strings: either all lowercase or all uppercase.
     *
     * @returns {RegExp} Regular expression pattern for hex color strings in the format `#RRGGBBAA`.
     *
     * @public
     */
    public static get hexColorRGBA(): RegExp {
        return regularExpressions.hexColorRGBA;
    }

    /**
     * Is `input` a string matching {@link HexColorStringUtility.hexColor}?
     *
     * @remarks Case must be consistent in hex color strings: either all lowercase or all uppercase.
     *
     * @see {@link StringUtility.isString}
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isHexColor(input: unknown): input is string {
        return StringUtility.isString(input) && HexColorStringUtility.hexColor.test(input);
    }

    /**
     * Asserts that `input` matches {@link HexColorStringUtility.hexColor}.
     *
     * @remarks Case must be consistent in hex color strings: either all lowercase or all uppercase.
     *
     * @see {@link HexColorStringUtility.isHexColor}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is string}
     *
     * @throws {PrimitiveTypeError} When `input` does not match {@link HexColorStringUtility.hexColor}.
     *
     * @public
     */
    public static assertHexColor(input: unknown, message?: string): asserts input is string {
        if (!HexColorStringUtility.isHexColor(input)) {
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected a hex color string.');
        }
    }

    /**
     * Is `input` a string matching {@link HexColorStringUtility.hexColorRGB}?
     *
     * @remarks Case must be consistent in hex color strings: either all lowercase or all uppercase.
     *
     * @see {@link StringUtility.isString}
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isHexColorRGB(input: unknown): input is string {
        return StringUtility.isString(input) && HexColorStringUtility.hexColorRGB.test(input);
    }

    /**
     * Asserts that `input` matches {@link HexColorStringUtility.hexColorRGB}.
     *
     * @remarks Case must be consistent in hex color strings: either all lowercase or all uppercase.
     *
     * @see {@link HexColorStringUtility.isHexColorRGB}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is string}
     *
     * @throws {PrimitiveTypeError} When `input` does not match {@link HexColorStringUtility.hexColorRGB}.
     *
     * @public
     */
    public static assertHexColorRGB(input: unknown, message?: string): asserts input is string {
        if (!HexColorStringUtility.isHexColorRGB(input)) {
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected a hex color RGB string.');
        }
    }

    /**
     * Is `input` a string matching {@link HexColorStringUtility.hexColorRGBA}?
     *
     * @remarks Case must be consistent in hex color strings: either all lowercase or all uppercase.
     *
     * @see {@link StringUtility.isString}
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isHexColorRGBA(input: unknown): input is string {
        return StringUtility.isString(input) && HexColorStringUtility.hexColorRGBA.test(input);
    }

    /**
     * Asserts that `input` matches {@link HexColorStringUtility.hexColorRGBA}.
     *
     * @remarks Case must be consistent in hex color strings: either all lowercase or all uppercase.
     *
     * @see {@link HexColorStringUtility.isHexColorRGBA}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is string}
     *
     * @throws {PrimitiveTypeError} When `input` does not match {@link HexColorStringUtility.hexColorRGBA}.
     *
     * @public
     */
    public static assertHexColorRGBA(input: unknown, message?: string): asserts input is string {
        if (!HexColorStringUtility.isHexColorRGBA(input)) {
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected a hex color RGBA string.');
        }
    }
}
