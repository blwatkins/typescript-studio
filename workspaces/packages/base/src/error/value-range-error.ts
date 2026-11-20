/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

/**
 * An error thrown when an input does not match the expected value range.
 * This error is typically used in validation or assertion where the input value does not conform to the expected range.
 */
export class ValueRangeError extends RangeError {
    /**
     * Public constructor.
     *
     * @param {string} [message]
     *
     * @public
     */
    public constructor(message: string = ValueRangeError.defaultMessage) {
        super(message);
        this.name = 'ValueRangeError';
    }

    /**
     * Gets the default error message for {@link ValueRangeError}.
     *
     * @returns {string}
     *
     * @public
     */
    public static get defaultMessage(): string {
        return 'Input does not match value range requirements.';
    }
}
