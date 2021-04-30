import { Injectable } from '@angular/core';
import { Language } from '../models/language.model';
import { Languages } from '../models/languages.model';

interface OGLanguages {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private languages: OGLanguages = {
    af: 'Afrikaans',
    am: 'Amharic',
    ar: 'Arabic',
    az: 'Azerbaijani',
    ba: 'Bashkir',
    be: 'Belarusian',
    bg: 'Bulgarian',
    bn: 'Bengali',
    bs: 'Bosnian',
    ca: 'Catalan',
    ceb: 'Cebuano',
    cs: 'Czech',
    cv: 'Chuvash',
    cy: 'Welsh',
    da: 'Danish',
    de: 'German',
    el: 'Greek',
    en: 'English',
    eo: 'Esperanto',
    es: 'Spanish',
    et: 'Estonian',
    eu: 'Basque',
    fa: 'Persian',
    fi: 'Finnish',
    fr: 'French',
    ga: 'Irish',
    gd: 'Scottish Gaelic',
    gl: 'Galician',
    gu: 'Gujarati',
    he: 'Hebrew',
    hi: 'Hindi',
    hr: 'Croatian',
    ht: 'Haitian',
    hu: 'Hungarian',
    hy: 'Armenian',
    id: 'Indonesian',
    is: 'Icelandic',
    it: 'Italian',
    ja: 'Japanese',
    jv: 'Javanese',
    ka: 'Georgian',
    kk: 'Kazakh',
    km: 'Khmer',
    kn: 'Kannada',
    ko: 'Korean',
    ky: 'Kyrgyz',
    la: 'Latin',
    lb: 'Luxembourgish',
    lo: 'Lao',
    lt: 'Lithuanian',
    lv: 'Latvian',
    mg: 'Malagasy',
    mhr: 'Mari',
    mi: 'Maori',
    mk: 'Macedonian',
    ml: 'Malayalam',
    mn: 'Mongolian',
    mr: 'Marathi',
    mrj: 'Hill Mari',
    ms: 'Malay',
    mt: 'Maltese',
    my: 'Burmese',
    ne: 'Nepali',
    nl: 'Dutch',
    no: 'Norwegian',
    pa: 'Punjabi',
    pap: 'Papiamento',
    pl: 'Polish',
    pt: 'Portuguese',
    ro: 'Romanian',
    ru: 'Russian',
    sah: 'Yakut',
    si: 'Sinhalese',
    sk: 'Slovak',
    sl: 'Slovenian',
    sq: 'Albanian',
    sr: 'Serbian',
    su: 'Sundanese',
    sv: 'Swedish',
    sw: 'Swahili',
    ta: 'Tamil',
    te: 'Telugu',
    tg: 'Tajik',
    th: 'Thai',
    tl: 'Tagalog',
    tr: 'Turkish',
    tt: 'Tatar',
    udm: 'Udmurt',
    uk: 'Ukrainian',
    ur: 'Urdu',
    uz: 'Uzbek',
    vi: 'Vietnamese',
    xh: 'Xhosa',
    yi: 'Yiddish',
    zh: 'Chinese',
    zu: 'Zulu',
  };

  private directions = [
    'az-ru',
    'be-bg',
    'be-cs',
    'be-de',
    'be-en',
    'be-es',
    'be-fr',
    'be-it',
    'be-pl',
    'be-ro',
    'be-ru',
    'be-sr',
    'be-tr',
    'bg-be',
    'bg-ru',
    'bg-uk',
    'ca-en',
    'ca-ru',
    'cs-be',
    'cs-en',
    'cs-ru',
    'cs-uk',
    'da-en',
    'da-ru',
    'de-be',
    'de-en',
    'de-es',
    'de-fr',
    'de-it',
    'de-ru',
    'de-tr',
    'de-uk',
    'el-en',
    'el-ru',
    'en-be',
    'en-ca',
    'en-cs',
    'en-da',
    'en-de',
    'en-el',
    'en-es',
    'en-et',
    'en-fi',
    'en-fr',
    'en-hu',
    'en-it',
    'en-lt',
    'en-lv',
    'en-mk',
    'en-nl',
    'en-no',
    'en-pt',
    'en-ru',
    'en-sk',
    'en-sl',
    'en-sq',
    'en-sv',
    'en-tr',
    'en-uk',
    'es-be',
    'es-de',
    'es-en',
    'es-ru',
    'es-uk',
    'et-en',
    'et-ru',
    'fi-en',
    'fi-ru',
    'fr-be',
    'fr-de',
    'fr-en',
    'fr-ru',
    'fr-uk',
    'hr-ru',
    'hu-en',
    'hu-ru',
    'hy-ru',
    'it-be',
    'it-de',
    'it-en',
    'it-ru',
    'it-uk',
    'lt-en',
    'lt-ru',
    'lv-en',
    'lv-ru',
    'mk-en',
    'mk-ru',
    'nl-en',
    'nl-ru',
    'no-en',
    'no-ru',
    'pl-be',
    'pl-ru',
    'pl-uk',
    'pt-en',
    'pt-ru',
    'ro-be',
    'ro-ru',
    'ro-uk',
    'ru-az',
    'ru-be',
    'ru-bg',
    'ru-ca',
    'ru-cs',
    'ru-da',
    'ru-de',
    'ru-el',
    'ru-en',
    'ru-es',
    'ru-et',
    'ru-fi',
    'ru-fr',
    'ru-hr',
    'ru-hu',
    'ru-hy',
    'ru-it',
    'ru-lt',
    'ru-lv',
    'ru-mk',
    'ru-nl',
    'ru-no',
    'ru-pl',
    'ru-pt',
    'ru-ro',
    'ru-sk',
    'ru-sl',
    'ru-sq',
    'ru-sr',
    'ru-sv',
    'ru-tr',
    'ru-uk',
    'sk-en',
    'sk-ru',
    'sl-en',
    'sl-ru',
    'sq-en',
    'sq-ru',
    'sr-be',
    'sr-ru',
    'sr-uk',
    'sv-en',
    'sv-ru',
    'tr-be',
    'tr-de',
    'tr-en',
    'tr-ru',
    'tr-uk',
    'uk-bg',
    'uk-cs',
    'uk-de',
    'uk-en',
    'uk-es',
    'uk-fr',
    'uk-it',
    'uk-pl',
    'uk-ro',
    'uk-ru',
    'uk-sr',
    'uk-tr',
  ];

  languagesMap = new Map<keyof Languages, Language>();

  constructor() {
    // put all the language key : Language pairs into a map for faster anf easier processing
    for (const [key, value] of Object.entries(this.languages)) {
      const obj: Language = {
        name: value,
        matchingLanguages: [],
      };

      this.languagesMap.set(key, obj);
    }

    // Add the mathcing language keys to the languages
    for (const dir of this.directions) {
      const key: keyof Languages = dir.substring(0, 2);
      const matchKey: keyof Languages = dir.substring(3, dir.length);

      if (this.languagesMap.has(key)) {
        const prevValue: Language = this.languagesMap.get(key)!;
        const newValue: Language = {
          name: prevValue.name,
          matchingLanguages: [...prevValue.matchingLanguages, matchKey],
        };
        this.languagesMap.set(key, newValue)!;
      }
    }
  }

  /**
   * This function gets the available languages from the  local state,
   *  and returns them.
   * @returns all the available languages.
   */
  getLanguages() {
    const result: Languages = {};
    for (const [key, value] of this.languagesMap.entries()) {
      if (value.matchingLanguages.length > 0) {
        result[key] = value;
      }
    }
    return result;
    //return this.languages;
  }

  /**
   * Returns the the languages which the language matching the provided language key can be translated to.
   * If there are no matches (because the key was wrong, or there are no languages for the provided key)
   * the result will be an empty object.
   * @param languageKey the key of the language you want to trasnalte
   * @returns the languages that the input language could be translated to
   */
  /////////not the comment fot this function

  getMatchingLanguages(languageKey: keyof Languages) {
    const result: Languages = {};
    const language: Language = this.languagesMap.get(languageKey)!;
    for (const matchKey of language.matchingLanguages) {
      result[matchKey] = this.languagesMap.get(matchKey)!;
    }
    return result;
  }
}
