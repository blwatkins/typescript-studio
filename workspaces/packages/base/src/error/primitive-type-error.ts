/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

/**
 * An error thrown when an input does not match the expected primitive type.
 * This error is typically used in validation or assertion where the input type does not conform to the expected primitive type.
 */
export class PrimitiveTypeError extends TypeError {
    /**
     * Public constructor.
     *
     * @param {string} [message]
     *
     * @public
     */
    public constructor(message: string = PrimitiveTypeError.defaultMessage) {
        super(message);
        this.name = 'PrimitiveTypeError';
    }

    /**
     * Gets the default error message for {@link PrimitiveTypeError}.
     *
     * @returns {string}
     *
     * @public
     */
    public static get defaultMessage(): string {
        return 'Input does not match primitive type requirements.';
    }
}
