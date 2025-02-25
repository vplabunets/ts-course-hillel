"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hw_6_1_1 = require("./hw-6.1");
describe('concatenateTranslations', () => {
    test('should concatenate words correctly', () => {
        expect((0, hw_6_1_1.concatenateTranslations)('EN', hw_6_1_1.wordNew, hw_6_1_1.wordYear)).toBe('new year');
        expect((0, hw_6_1_1.concatenateTranslations)('UK', hw_6_1_1.wordNew, hw_6_1_1.wordYear)).toBe('новий рік');
        expect((0, hw_6_1_1.concatenateTranslations)('FR', hw_6_1_1.wordNew, hw_6_1_1.wordYear)).toBe('nouveau anne');
        expect((0, hw_6_1_1.concatenateTranslations)('DE', hw_6_1_1.wordNew, hw_6_1_1.wordYear)).toBe('neu jahr');
        expect((0, hw_6_1_1.concatenateTranslations)('CZ', hw_6_1_1.wordNew, hw_6_1_1.wordYear)).toBe('novy rok');
        expect((0, hw_6_1_1.concatenateTranslations)('IT', hw_6_1_1.wordNew, hw_6_1_1.wordYear)).toBe('nuovo anno');
    });
    test('should return missing translation message for unsupported language', () => {
        expect((0, hw_6_1_1.concatenateTranslations)('PT', hw_6_1_1.wordNew, hw_6_1_1.wordYear)).toBe('Translation for Portuguese language is missing');
    });
});
