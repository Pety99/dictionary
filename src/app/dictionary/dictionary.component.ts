import { Component, OnInit } from '@angular/core';
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

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit(): void {}

  /**
   * Translates the languages.
   * Sends the translated languae to the output.
   * @param textContent the text content of the input field.
   */
  trasnlateLanguages(textContent: string) {
    if (this.sourceLanguageKey && this.targetLanguageKey && textContent) {
      this.dictionaryService
        .translateText(
          this.sourceLanguageKey,
          this.targetLanguageKey,
          textContent
        )
        .then((res) => {
          this.outputText = res;
        });
    }
    // If some parameter for the translate function is wrong the output should be empty.
    else {
      this.outputText = '';
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
