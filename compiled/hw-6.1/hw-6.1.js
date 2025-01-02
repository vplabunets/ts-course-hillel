"use strict";
const wordNew = {
    en: 'new',
    uk: 'новий',
    fr: 'nouveau',
    de: 'neu',
    cz: 'novy',
    it: 'nuovo',
};
const wordYear = {
    en: 'year',
    uk: 'рік',
    fr: 'anne',
    de: 'jahr',
    cz: 'rok',
    it: 'anno',
};
function concatenateTranslations(key, ...translations) {
    const values = translations.map((trans) => trans[key]);
    if (values.some((value) => value === undefined)) {
        return 'undefined';
    }
    return values.join(' ');
}
console.log(concatenateTranslations('en', wordNew, wordYear));
console.log(concatenateTranslations('uk', wordNew, wordYear));
console.log(concatenateTranslations('fr', wordNew, wordYear));
console.log(concatenateTranslations('de', wordNew, wordYear));
console.log(concatenateTranslations('cz', wordNew, wordYear));
console.log(concatenateTranslations('it', wordNew, wordYear));
console.log(concatenateTranslations('ess', wordNew, wordYear));
const wordNew2 = {
    en: 'new',
    uk: 'новий',
    fr: 'nouveau',
    de: 'neu',
    cz: 'novy',
    it: 'nuovo',
    default: 'new',
};
const wordYear2 = {
    en: 'year',
    uk: 'рік',
    fr: 'anne',
    de: 'jahr',
    cz: 'rok',
    it: 'anno',
    default: 'year',
};
function concatenateTranslations2(key, ...translations) {
    const values = translations.map((trans) => trans[key]);
    if (values.some((value) => value === undefined)) {
        return translations.map((trans) => trans['default']).join(' ');
    }
    return values.join(' ');
}
console.log(concatenateTranslations2('en', wordNew2, wordYear2));
console.log(concatenateTranslations2('uk', wordNew2, wordYear2));
console.log(concatenateTranslations2('fr', wordNew2, wordYear2));
console.log(concatenateTranslations2('de', wordNew2, wordYear2));
console.log(concatenateTranslations2('cz', wordNew2, wordYear2));
console.log(concatenateTranslations2('it', wordNew2, wordYear2));
console.log(concatenateTranslations2('ess', wordNew2, wordYear2));
