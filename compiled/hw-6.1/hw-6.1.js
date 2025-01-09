"use strict";
var Languages;
(function (Languages) {
    Languages["EN"] = "English";
    Languages["UK"] = "Ukrainian";
    Languages["FR"] = "French";
    Languages["DE"] = "German";
    Languages["CZ"] = "Czech";
    Languages["IT"] = "Italian";
    Languages["PT"] = "Portuguese";
})(Languages || (Languages = {}));
const wordNew = {
    EN: 'new',
    UK: 'новий',
    FR: 'nouveau',
    DE: 'neu',
    CZ: 'novy',
    IT: 'nuovo',
};
const wordYear = {
    EN: 'year',
    UK: 'рік',
    FR: 'anne',
    DE: 'jahr',
    CZ: 'rok',
    IT: 'anno',
};
function concatenateTranslations(key, ...translations) {
    const values = translations.map((trans) => trans[key]);
    if (values.some((value) => value === undefined)) {
        return `Translation for ${Languages[key]} languan`;
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
console.log(concatenateTranslations2('EN', wordNew2, wordYear2));
console.log(concatenateTranslations2('UK', wordNew2, wordYear2));
console.log(concatenateTranslations2('FR', wordNew2, wordYear2));
console.log(concatenateTranslations2('DE', wordNew2, wordYear2));
console.log(concatenateTranslations2('CZ', wordNew2, wordYear2));
console.log(concatenateTranslations2('IT', wordNew2, wordYear2));
console.log(concatenateTranslations2('PT', wordNew2, wordYear2));
