/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

/**
 * An error thrown when an input does not match the expected length range.
 * This error is typically used when the input value is longer than or shorter than the required length.
 */
export class LengthRangeError extends RangeError {
    /**
     * Public constructor.
     *
     * @param {string} [message]
     *
     * @public
     */
    public constructor(message: string = LengthRangeError.defaultMessage) {
        super(message);
        this.name = 'LengthRangeError';
    }

    /**
     * Gets the default error message for {@link LengthRangeError}.
     *
     * @returns {string}
     *
     * @public
     */
    public static get defaultMessage(): string {
        return 'Input does not match length range requirements.';
    }
}
