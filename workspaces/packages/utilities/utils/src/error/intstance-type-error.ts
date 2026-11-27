/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

/**
 * An error thrown when an input does not match the expected class or instance type.
 * This error is typically used when the input type does not conform to the expected class type.
 */
export class InstanceTypeError extends TypeError {
    /**
     * Public constructor.
     *
     * @param {string} [message]
     *
     * @public
     */
    public constructor(message: string = InstanceTypeError.defaultMessage) {
        super(message);
        this.name = 'InstanceTypeError';
    }

    /**
     * Gets the default error message for {@link InstanceTypeError}.
     *
     * @returns {string}
     *
     * @public
     */
    public static get defaultMessage(): string {
        return 'Input does not match class or instance type requirements.';
    }
}
