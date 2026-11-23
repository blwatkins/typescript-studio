/*
 * Copyright (c) 2024-2026 Brittni Watkins. All rights reserved.
 */

import nearestColor from 'nearest-color';

import { StringUtility } from '@blwatkins/utils';

import { ColorNamesSource } from './color-names-source';

interface NearestColorMatch {
    name: string;
    value: string;
    rgb: { r: number; g: number; b: number; };
    distance: number;
}

export class JsonColorNamesSource extends ColorNamesSource {
    static #nearestColor: ((hex: string) => NearestColorMatch | null) | null = null;

    public constructor(colorNames?: { name: string; hex: string; }[]) {
        super();

        if (colorNames) {
            // TODO - assert that colorNames is an array of objects with name and hex properties with at least 1 element
            const colors = colorNames.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
            JsonColorNamesSource.#nearestColor = nearestColor.from(colors);
        }
    }

    protected override getNameFromHex(color: string): string {
        const colorName: string | undefined = this.#getNearestColorName(color);
        StringUtility.assertSingleLineText(colorName);
        return colorName;
    }

    #getNearestColorName(color: string): string | undefined {
        let colorMatch: NearestColorMatch | string | null;
        let colorName: string | undefined;

        try {
            if (JsonColorNamesSource.#nearestColor) {
                colorMatch = JsonColorNamesSource.#nearestColor(color);
            } else {
                colorMatch = nearestColor(color);
            }
        } catch {
            colorMatch = null;
        }

        if (colorMatch) {
            if (typeof colorMatch === 'string') {
                colorName = colorMatch;
            } else {
                colorName = colorMatch.name;
            }
        }

        return colorName;
    }
}
