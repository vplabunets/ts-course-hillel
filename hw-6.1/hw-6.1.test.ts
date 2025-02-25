import { concatenateTranslations, wordNew, wordYear } from './hw-6.1';

describe('concatenateTranslations', () => {
  test('should concatenate words correctly', () => {
    expect(concatenateTranslations('EN', wordNew, wordYear)).toBe('new year');
    expect(concatenateTranslations('UK', wordNew, wordYear)).toBe('новий рік');
    expect(concatenateTranslations('FR', wordNew, wordYear)).toBe('nouveau anne');
    expect(concatenateTranslations('DE', wordNew, wordYear)).toBe('neu jahr');
    expect(concatenateTranslations('CZ', wordNew, wordYear)).toBe('novy rok');
    expect(concatenateTranslations('IT', wordNew, wordYear)).toBe('nuovo anno');
  });

  test('should return missing translation message for unsupported language', () => {
    expect(concatenateTranslations('PT', wordNew, wordYear)).toBe('Translation for Portuguese language is missing');
  });
});
