/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { HexColorStringUtility } from '../../string';

/**
 * A source of color names.
 */
export abstract class ColorNamesSource {
    /**
     * Protected constructor.
     *
     * @protected
     */
    protected constructor() {
        /* empty */
    }

    /**
     * Gets the name of `color`.
     *
     * @see {@link HexColorStringUtility.assertHexColor}
     *
     * @param {string} color
     *
     * @returns {string}
     *
     * @throws {PrimitiveTypeError} When `color` is not a well-formatted hex color string.
     *
     * @public
     */
    public getName(color: string): string {
        HexColorStringUtility.assertHexColor(color);
        return this.getNameFromHex(color);
    }

    /**
     * Gets the name of `color`.
     *
     * @param {string} color
     *
     * @returns {string}
     *
     * @protected
     */
    protected abstract getNameFromHex(color: string): string;
}
