/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { StaticInstanceError } from '@blwatkins/utils';

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
     * @returns {RegExp} - Regular expression pattern for validating hex color strings in the format `#RRGGBB` or `#RRGGBBAA`.
     *
     * @public
     */
    public static get hexColorPattern(): RegExp {
        return regularExpressions.hexColor;
    }
}
