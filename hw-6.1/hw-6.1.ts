enum Languages {
  EN = 'English',
  UK = 'Ukrainian',
  FR = 'French',
  DE = 'German',
  CZ = 'Czech',
  IT = 'Italian',
  PT = 'Portuguese',
}

type Translations = {
  [languageKey: string]: string;
};

const wordNew: Translations = {
  EN: 'new',
  UK: 'новий',
  FR: 'nouveau',
  DE: 'neu',
  CZ: 'novy',
  IT: 'nuovo',
};
const wordYear: Translations = {
  EN: 'year',
  UK: 'рік',
  FR: 'anne',
  DE: 'jahr',
  CZ: 'rok',
  IT: 'anno',
};

function concatenateTranslations(key: keyof typeof Languages, ...translations: Translations[]): string {
  const values = translations.map((trans) => trans[key]);

  if (values.some((value) => value === undefined)) {
    return `Translation for ${Languages.key} languan`;
  }

  return values.join(' ');
}

console.log(concatenateTranslations('EN', wordNew, wordYear));
console.log(concatenateTranslations('UK', wordNew, wordYear));
console.log(concatenateTranslations('FR', wordNew, wordYear));
console.log(concatenateTranslations('DE', wordNew, wordYear));
console.log(concatenateTranslations('DE', wordNew, wordYear));
console.log(concatenateTranslations('IT', wordNew, wordYear));
console.log(concatenateTranslations('PT', wordNew, wordYear));

type OptionalTranslations = {
  [languageKey: string]: string | undefined;
  default?: string;
};

const wordNew2: OptionalTranslations = {
  en: 'new',
  uk: 'новий',
  fr: 'nouveau',
  de: 'neu',
  cz: 'novy',
  it: 'nuovo',
  default: 'new',
};
const wordYear2: OptionalTranslations = {
  en: 'year',
  uk: 'рік',
  fr: 'anne',
  de: 'jahr',
  cz: 'rok',
  it: 'anno',
  default: 'year',
};

function concatenateTranslations2(key: keyof typeof Languages, ...translations: OptionalTranslations[]): string {
  const values = translations.map((trans) => trans[key]);

  if (values.some((value) => value === undefined)) {
    return translations.map((trans) => trans['default']).join(' ');
  }

  return values.join(' ');
}
console.log(concatenateTranslations2('EN', wordNew2, wordYear2));
console.log(concatenateTranslations2('UK', wordNew2, wordYear2));
console.log(concatenateTranslations2('FR', wordNew2, wordYear2));
console.log(concatenateTranslations2('DE', wordNew2, wordYear2));
console.log(concatenateTranslations2('CZ', wordNew2, wordYear2));
console.log(concatenateTranslations2('IT', wordNew2, wordYear2));
console.log(concatenateTranslations2('PT', wordNew2, wordYear2));
