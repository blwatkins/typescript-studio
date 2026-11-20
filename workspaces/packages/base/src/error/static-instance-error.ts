/*
 * Copyright (c) 2026 Brittni Watkins. All rights reserved.
 */

/**
 * An error thrown when the constructor of a static class is called.
 * This error is typically used in constructors for classes that only contain static properties and methods.
 */
export class StaticInstanceError extends TypeError {
    /**
     * Public constructor.
     *
     * @param {string} [message]
     *
     * @public
     */
    public constructor(message: string = StaticInstanceError.defaultMessage) {
        super(message);
        this.name = 'StaticInstanceError';
    }

    /**
     * Gets the default error message for {@link StaticInstanceError}.
     *
     * @returns {string}
     *
     * @public
     */
    public static get defaultMessage(): string {
        return 'This class is static and cannot be instantiated.';
    }
}
