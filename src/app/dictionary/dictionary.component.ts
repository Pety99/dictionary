import { Component, OnInit } from '@angular/core';
import config from '../../env';
import { Languages } from '../models/languages.model';
import { DictionaryService } from '../services/dictionary.service';
@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
})
export class DictionaryComponent implements OnInit {
  inputLines: number = 5;
  submitText: string = 'Translate';
  outputText: string = '';

  private sourceLanguageKey?: keyof Languages;
  private targetLanguageKey?: keyof Languages;

  constructor(private _dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    console.log(config.YANDEX_API_KEY);
  }

  /**
   * Translates the languages.
   * Sends the translated languae to the output.
   * @param textContent the text content of the input field.
   */
  trasnlateLanguages(textContent: string) {
    if (this.sourceLanguageKey && this.targetLanguageKey) {
      // TODO Trasnlate The text
      this.outputText = textContent + ' Translated';
    }
  }

  /**
   * Sets the source language key when the language is selected.
   * @param languageKey
   */
  handleSourceLanguageSelected(languageKey: keyof Languages) {
    this.sourceLanguageKey = languageKey;
  }

  /**
   * Sets the target language key when the language is selected.
   * @param languageKey
   */
  handleTargetLanguageSelected(languageKey: keyof Languages) {
    this.targetLanguageKey = languageKey;
  }
}
