import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';
import config from '../../env';
import { Languages } from '../models/languages.model';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  public languages: Languages = {}; // All the available languages
  public selectedSourceLanguage = ''; // the key of the selected starting language;
  public selectedTargetLanguage = ''; // the key of the selected target language;
  public matchingLanguages: Languages = {}; // The languages you can translate to from the selected language

  constructor(private _dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    console.log(config.YANDEX_API_KEY);
    this.languages = this._dictionaryService.getLanguages();
  }

  /**
   * This handles the event when the main language is selected.
   * Sets the matching languages for the secondary language.
   * @param language key of the selected language
   */
  handleSourceLanguageSelected(language: string) {
    this.selectedSourceLanguage = language;
    this.matchingLanguages = this._dictionaryService.getMatchingLanguages(
      language
    )!;

    // Must reset the target to an empty string if it is not in the new matching languages
    if (
      !Object.keys(this.matchingLanguages).includes(this.selectedTargetLanguage)
    ) {
      this.selectedTargetLanguage = '';
    }
  }

  handleTargetLanguageSelected(language: string) {
    this.selectedTargetLanguage = language;
  }

  /**
   * Swaps the source the target languages,
   * and sets the matching languages accoringly to the new target language.
   */
  handleSwapLanguages() {
    if (
      this.selectedSourceLanguage != '' &&
      this.selectedTargetLanguage != ''
    ) {
      const tmp = this.selectedTargetLanguage;
      this.selectedTargetLanguage = this.selectedSourceLanguage;
      this.selectedSourceLanguage = tmp;

      this.matchingLanguages = this._dictionaryService.getMatchingLanguages(
        this.selectedSourceLanguage
      );
    }
  }
}
