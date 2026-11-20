/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

/**
 * An error thrown when an input does not match the shape or schema of the expected data structure.
 * This error is typically used when the input data does not conform to the expected object schema.
 */
export class SchemaTypeError extends TypeError {
    /**
     * Public constructor.
     *
     * @param {string} [message]
     *
     * @public
     */
    public constructor(message: string = SchemaTypeError.defaultMessage) {
        super(message);
        this.name = 'SchemaTypeError';
    }

    /**
     * Gets the default error message for {@link SchemaTypeError}.
     *
     * @returns {string}
     *
     * @public
     */
    public static get defaultMessage(): string {
        return 'Input does not match object schema requirements.';
    }
}
