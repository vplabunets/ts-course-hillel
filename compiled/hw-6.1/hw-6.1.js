"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatenateTranslations2 = exports.wordYear2 = exports.wordNew2 = exports.concatenateTranslations = exports.wordYear = exports.wordNew = exports.Languages = void 0;
var Languages;
(function (Languages) {
    Languages["EN"] = "English";
    Languages["UK"] = "Ukrainian";
    Languages["FR"] = "French";
    Languages["DE"] = "German";
    Languages["CZ"] = "Czech";
    Languages["IT"] = "Italian";
    Languages["PT"] = "Portuguese";
})(Languages || (exports.Languages = Languages = {}));
exports.wordNew = {
    EN: 'new',
    UK: 'новий',
    FR: 'nouveau',
    DE: 'neu',
    CZ: 'novy',
    IT: 'nuovo',
};
exports.wordYear = {
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
        return `Translation for ${Languages[key]} language is missing`;
    }
    return values.join(' ');
}
exports.concatenateTranslations = concatenateTranslations;
console.log(concatenateTranslations('EN', exports.wordNew, exports.wordYear));
console.log(concatenateTranslations('UK', exports.wordNew, exports.wordYear));
console.log(concatenateTranslations('FR', exports.wordNew, exports.wordYear));
console.log(concatenateTranslations('DE', exports.wordNew, exports.wordYear));
console.log(concatenateTranslations('DE', exports.wordNew, exports.wordYear));
console.log(concatenateTranslations('IT', exports.wordNew, exports.wordYear));
console.log(concatenateTranslations('PT', exports.wordNew, exports.wordYear));
exports.wordNew2 = {
    en: 'new',
    uk: 'новий',
    fr: 'nouveau',
    de: 'neu',
    cz: 'novy',
    it: 'nuovo',
    default: 'new',
};
exports.wordYear2 = {
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
exports.concatenateTranslations2 = concatenateTranslations2;
console.log(concatenateTranslations2('EN', exports.wordNew2, exports.wordYear2));
console.log(concatenateTranslations2('UK', exports.wordNew2, exports.wordYear2));
console.log(concatenateTranslations2('FR', exports.wordNew2, exports.wordYear2));
console.log(concatenateTranslations2('DE', exports.wordNew2, exports.wordYear2));
console.log(concatenateTranslations2('CZ', exports.wordNew2, exports.wordYear2));
console.log(concatenateTranslations2('IT', exports.wordNew2, exports.wordYear2));
console.log(concatenateTranslations2('PT', exports.wordNew2, exports.wordYear2));
