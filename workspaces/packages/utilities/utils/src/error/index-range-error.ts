/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

/**
 * An error thrown when an input does not match the expected index range.
 * This error is typically used in validation or assertion where the input value is not a valid index.
 */
export class IndexRangeError extends RangeError {
    /**
     * Public constructor.
     *
     * @param {string} [message]
     *
     * @public
     */
    public constructor(message: string = IndexRangeError.defaultMessage) {
        super(message);
        this.name = 'IndexRangeError';
    }

    /**
     * Gets the default error message for {@link IndexRangeError}.
     *
     * @returns {string}
     *
     * @public
     */
    public static get defaultMessage(): string {
        return 'Input does not match index range requirements.';
    }
}
