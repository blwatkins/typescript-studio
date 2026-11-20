/*
 * Copyright (c) 2024-2026 Brittni Watkins. All rights reserved.
 */

import { PrimitiveTypeError, StaticInstanceError } from '../error';

const regularExpressions = {
    singleLineLowercase: /^[^\s\p{Lu}]+(?:\u0020[^\s\p{Lu}]+)*$/u,
    singleLineUppercase: /^[^\s\p{Ll}]+(?:\u0020[^\s\p{Ll}]+)*$/u,
    singleLine: /^\S+(?:\u0020\S+)*$/,
    textCharacters: /^(?:[\t\n\r\u0020-\u007E\u00A1-\u00FF\u2022]|\p{RGI_Emoji})+$/v,
    rejectedTextCharacters: /[\u00A6\u00A8\u00AA\u00AC-\u00AD\u00AF\u00B2-\u00BA\u00BC-\u00BE\u00C6\u00D0\u00D7\u00D8\u00DE\u00DF\u00E6\u00F0\u00F8\u00FE]|\r(?!\n)/
};

/**
 * Static properties and methods for validating string types.
 */
export class StringUtility {
    /**
     * Private constructor.
     *
     * @throws {StaticInstanceError} When the class is instantiated.
     * {@link StringUtility} is a static class and cannot be instantiated.
     *
     * @private
     */
    private constructor() {
        throw new StaticInstanceError('StringUtility is a static class and cannot be instantiated.');
    }

    /**
     * Is `input` a string?
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isString(input: unknown): input is string {
        return typeof input === 'string';
    }

    /**
     * Asserts that `input` is a string.
     *
     * @see {@link StringUtility.isString}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is string}
     *
     * @throws {PrimitiveTypeError} When `input` is not a string.
     *
     * @public
     */
    public static assertString(input: unknown, message?: string): asserts input is string {
        if (!StringUtility.isString(input)) {
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected a string.');
        }
    }

    /**
     * Is `input` an empty string?
     *
     * @remarks Empty strings only contain whitespace characters.
     *
     * @see {@link StringUtility.isString}
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isEmpty(input: unknown): input is string {
        return StringUtility.isString(input) && (input.trim().length === 0);
    }

    /**
     * Asserts that `input` is an empty string.
     *
     * @remarks Empty strings only contain whitespace characters.
     *
     * @see {@link StringUtility.isEmpty}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is string}
     *
     * @throws {PrimitiveTypeError} When `input` is not an empty string.
     *
     * @public
     */
    public static assertEmpty(input: unknown, message?: string): asserts input is string {
        if (!StringUtility.isEmpty(input)) {
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected an empty string.');
        }
    }

    /**
     * Is `input` a non-empty string?
     *
     * @remarks Non-empty strings must contain at least one non-whitespace character.
     *
     * @see {@link StringUtility.isString}
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isNonEmpty(input: unknown): input is string {
        return StringUtility.isString(input) && (input.trim().length > 0);
    }

    /**
     * Asserts that `input` is a non-empty string.
     *
     * @remarks Non-empty strings must contain at least one non-whitespace character.
     *
     * @see {@link StringUtility.isNonEmpty}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is string}
     *
     * @throws {PrimitiveTypeError} When `input` is not a non-empty string.
     *
     * @public
     */
    public static assertNonEmpty(input: unknown, message?: string): asserts input is string {
        if (!StringUtility.isNonEmpty(input)) {
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected a non-empty string.');
        }
    }

    /**
     * Is `input` a text string?
     *
     * @remarks To be a text string, `input` must satisfy all of the following rules:
     * - It must be a non-empty string.
     * - Every character must be a tab, a line feed, a carriage return, printable Basic Latin (U+0020 to U+007E), printable Latin-1 Supplement (U+00A1 to U+00FF), the bullet `•` (U+2022), or part of an emoji sequence recommended for general interchange (RGI).
     * - A line feed must immediately follow every carriage return.
     * - It cannot contain any of the following Latin-1 Supplement characters: the soft hyphen (U+00AD), or `¦ ¨ ª ¬ ¯ ² ³ ´ µ ¶ · ¸ ¹ º ¼ ½ ¾ × Æ Ð Ø Þ ß æ ð ø þ`.
     *
     * @see {@link StringUtility.isNonEmpty}
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isText(input: unknown): input is string {
        return StringUtility.isNonEmpty(input)
            && regularExpressions.textCharacters.test(input)
            && !regularExpressions.rejectedTextCharacters.test(input);
    }

    /**
     * Asserts that `input` is a text string.
     *
     * @remarks To be a text string, `input` must satisfy all of the following rules:
     * - It must be a non-empty string.
     * - Every character must be a tab, a line feed, a carriage return, printable Basic Latin (U+0020 to U+007E), printable Latin-1 Supplement (U+00A1 to U+00FF), the bullet `•` (U+2022), or part of an emoji sequence recommended for general interchange (RGI).
     * - A line feed must immediately follow every carriage return.
     * - It cannot contain any of the following Latin-1 Supplement characters: the soft hyphen (U+00AD), or `¦ ¨ ª ¬ ¯ ² ³ ´ µ ¶ · ¸ ¹ º ¼ ½ ¾ × Æ Ð Ø Þ ß æ ð ø þ`.
     *
     * @see {@link StringUtility.isText}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is string}
     *
     * @throws {PrimitiveTypeError} When `input` is not a text string.
     *
     * @public
     */
    public static assertText(input: unknown, message?: string): asserts input is string {
        if (!StringUtility.isText(input)) {
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected a text string.');
        }
    }

    /**
     * Is `input` a single-line text string?
     *
     * @remarks A single-line text string is a text string whose non-whitespace characters are separated by single spaces (U+0020).
     * It does not allow tabs, line breaks, leading whitespace, trailing whitespace, or consecutive whitespace.
     *
     * @see {@link StringUtility.isText}
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isSingleLineText(input: unknown): input is string {
        return StringUtility.isText(input) && regularExpressions.singleLine.test(input);
    }

    /**
     * Asserts that `input` is a single-line text string.
     *
     * @remarks A single-line text string is a text string whose non-whitespace characters are separated by single spaces (U+0020).
     * It does not allow tabs, line breaks, leading whitespace, trailing whitespace, or consecutive whitespace.
     *
     * @see {@link StringUtility.isSingleLineText}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is string}
     *
     * @throws {PrimitiveTypeError} When `input` is not a single-line text string.
     *
     * @public
     */
    public static assertSingleLineText(input: unknown, message?: string): asserts input is string {
        if (!StringUtility.isSingleLineText(input)) {
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected a single-line text string.');
        }
    }

    /**
     * Is `input` a single-line, lowercase text string?
     *
     * @remarks A single-line text string is a text string whose non-whitespace characters are separated by single spaces (U+0020).
     * It does not allow tabs, line breaks, leading whitespace, trailing whitespace, or consecutive whitespace.
     *
     * @see {@link StringUtility.isText}
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isSingleLineLowercaseText(input: unknown): input is string {
        return StringUtility.isText(input) && regularExpressions.singleLineLowercase.test(input);
    }

    /**
     * Asserts that `input` is a single-line, lowercase text string.
     *
     * @remarks A single-line text string is a text string whose non-whitespace characters are separated by single spaces (U+0020).
     * It does not allow tabs, line breaks, leading whitespace, trailing whitespace, or consecutive whitespace.
     *
     * @see {@link StringUtility.isSingleLineLowercaseText}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is string}
     *
     * @throws {PrimitiveTypeError} When `input` is not a single-line, lowercase text string.
     *
     * @public
     */
    public static assertSingleLineLowercaseText(input: unknown, message?: string): asserts input is string {
        if (!StringUtility.isSingleLineLowercaseText(input)) {
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected a single-line, lowercase text string.');
        }
    }

    /**
     * Is `input` a single-line, uppercase text string?
     *
     * @remarks A single-line text string is a text string whose non-whitespace characters are separated by single spaces (U+0020).
     * It does not allow tabs, line breaks, leading whitespace, trailing whitespace, or consecutive whitespace.
     *
     * @see {@link StringUtility.isText}
     *
     * @param {unknown} input
     *
     * @returns {input is string}
     *
     * @public
     */
    public static isSingleLineUppercaseText(input: unknown): input is string {
        return StringUtility.isText(input) && regularExpressions.singleLineUppercase.test(input);
    }

    /**
     * Asserts that `input` is a single-line, uppercase text string.
     *
     * @remarks A single-line text string is a text string whose non-whitespace characters are separated by single spaces (U+0020).
     * It does not allow tabs, line breaks, leading whitespace, trailing whitespace, or consecutive whitespace.
     *
     * @see {@link StringUtility.isSingleLineUppercaseText}
     *
     * @param {unknown} input
     * @param {string} [message]
     *
     * @returns {asserts input is string}
     *
     * @throws {PrimitiveTypeError} When `input` is not a single-line, uppercase text string.
     *
     * @public
     */
    public static assertSingleLineUppercaseText(input: unknown, message?: string): asserts input is string {
        if (!StringUtility.isSingleLineUppercaseText(input)) {
            if (StringUtility.isSingleLineText(message)) {
                throw new PrimitiveTypeError(message);
            }

            throw new PrimitiveTypeError('Expected a single-line, uppercase text string.');
        }
    }
}
