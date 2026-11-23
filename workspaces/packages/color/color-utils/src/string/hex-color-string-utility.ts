/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { StaticInstanceError, StringUtility } from '@blwatkins/utils';

const regularExpressions = {
    hexColor: /^(#[A-F0-9]{6}(?:[A-F0-9]{2})?|#[a-f0-9]{6}(?:[a-f0-9]{2})?)$/,
    hexColorRGB: /^(#[A-F0-9]{6}|#[a-f0-9]{6})$/,
    hexColorRGBA: /^(#[A-F0-9]{8}|#[a-f0-9]{8})$/
};

/**
 * Static properties and methods for validating formatted hex code color strings.
 */
export class HexColorStringUtility {
    /**
     * Private constructor.
     *
     * @throws {StaticInstanceError} When class is instantiated.
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
     * @returns {RegExp} - Regular expression pattern for hex color strings in the format `#RRGGBB` or `#RRGGBBAA`.
     *
     * @public
     */
    public static get hexColorPattern(): RegExp {
        return regularExpressions.hexColor;
    }

    /**
     * Gets the regular expression for hex colors in RGB format.
     *
     * @remarks Case must be consistent in hex color strings: either all lowercase or all uppercase.
     *
     * @returns {RegExp} - Regular expression pattern for hex color strings in the format `#RRGGBB`.
     *
     * @public
     */
    public static get hexColorPatternRGB(): RegExp {
        return regularExpressions.hexColorRGB;
    }

    /**
     * Gets the regular expression for hex colors in RGBA format.
     *
     * @remarks Case must be consistent in hex color strings: either all lowercase or all uppercase.
     *
     * @returns {RegExp} - Regular expression pattern for hex color strings in the format `#RRGGBBAA`.
     *
     * @public
     */
    public static get hexColorPatternRGBA(): RegExp {
        return regularExpressions.hexColorRGBA;
    }

    /**
     * Is `input` a string matching the {@link HexColorStringUtility.hexColorPattern} pattern?
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isHexColor(input: unknown): input is string {
        return StringUtility.isString(input) && HexColorStringUtility.hexColorPattern.test(input);
    }
}
