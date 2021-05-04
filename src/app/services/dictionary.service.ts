import { Injectable } from '@angular/core';
import { Language } from '../models/language.model';
import { Languages } from '../models/languages.model';
import { LanguagesRespone } from '../models/LanguagesRespone.model';
import { HttpClient } from '@angular/common/http';
import config from '../../env';
import { TranslateResponse } from '../models/translateResponse.model';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  languagesMap = new Map<keyof Languages, Language>();

  constructor(private http: HttpClient) {}

  /**
   * Loads the languages from the API, maps it to the local state.
   * Should only be called once!
   */
  private async loadLanguages() {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=${config.YANDEX_API_KEY}&ui=en`;
    const result = await this.http
      .get<LanguagesRespone>(url)
      .toPromise()
      // Return empty object and array in case of error
      .catch(() => ({ dirs: [], langs: {} }));

    this.mapLanguages(result.langs);
    this.setMatchingLanguages(result.dirs);
  }

  /**
   * Maps the languages of the HTTP respone to the local state.
   * @param languages
   */
  private mapLanguages(languages: { [key: string]: string }) {
    // put all the language key : Language pairs into a map for faster anf easier processing
    for (const [key, value] of Object.entries(languages)) {
      const obj: Language = {
        name: value,
        matchingLanguages: [],
      };

      this.languagesMap.set(key, obj);
    }
  }

  /**
   * Adds the matchingLanguages to the languages stored in the state.
   * @param directions
   */
  private setMatchingLanguages(directions: string[]) {
    // Add the mathcing language keys to the languages
    for (const dir of directions) {
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
  async getLanguages() {
    // Loads the languages from the API if they are not alrady loaded
    if (this.languagesMap.size == 0) {
      await this.loadLanguages();
    }

    // Returns the languages in the right format
    const result: Languages = {};
    for (const [key, value] of this.languagesMap.entries()) {
      if (value.matchingLanguages.length > 0) {
        result[key] = value;
      }
    }
    return result;
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

  /**
   * Sends an API request to translate the provided text from the selected source language to the target language.
   * If the source language is not delected right, the API will still try to detect the source language and translate the text.
   *
   * @param sourceLanguage
   * @param targetLanguage
   * @param text
   * @returns
   */
  async translateText(
    sourceLanguage: keyof Languages,
    targetLanguage: keyof Languages,
    text: string
  ) {
    const lang: string = sourceLanguage + '-' + targetLanguage;
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${config.YANDEX_API_KEY}&text=${text}&lang=${lang}&format=plain`;

    const response = await this.http
      .get<TranslateResponse>(url)
      .toPromise()
      // Return empty object and array in case of error
      .catch((err) => ({
        text: [
          'An error occured during the translation process. Please try again later.',
        ],
      }));

    // Return the translated text
    return response.text[0];
  }
}
