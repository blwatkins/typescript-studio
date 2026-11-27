/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

import { StaticInstanceError } from '@blwatkins/utils';

/**
 * Static methods and properties for validating {@link HTMLCanvasElement} objects.
 *
 * This class is static and cannot be instantiated.
 */
export class HTMLCanvasUtility {
    /**
     * Private constructor.
     *
     * @throws {StaticInstanceError} When the class is instantiated.
     * {@link HTMLCanvasUtility} is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new StaticInstanceError('HTMLCanvasUtility is a static class and cannot be instantiated.');
    }

    /**
     * Is `input` an {@link HTMLCanvasElement}?
     *
     * @param {unknown} input
     *
     * @returns {input is HTMLCanvasElement}
     *
     * @public
     */
    public static isHTMLCanvasElement(input: unknown): input is HTMLCanvasElement {
        return input instanceof HTMLCanvasElement;
    }
}
