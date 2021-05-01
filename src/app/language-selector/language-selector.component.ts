import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';
import config from '../../env';
import { Languages } from '../models/languages.model';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  languages: Languages = {}; // All the available languages.
  matchingLanguages: Languages = {}; // The languages you can translate to from the selected language.
  selectedSourceLanguage = ''; // the key of the selected starting language;
  selectedTargetLanguage = ''; // the key of the selected target language;

  @Output()
  sourceSelectedEvent: EventEmitter<keyof Languages> = new EventEmitter();

  @Output()
  targetSelectedEvent: EventEmitter<keyof Languages> = new EventEmitter();

  constructor(private _dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    console.log(config.YANDEX_API_KEY);
    this._dictionaryService.getLanguages().then((res) => {
      this.languages = res;
      console.log(res);
    });
  }

  /**
   * This handles the event when the main language is selected.
   * Sets the matching languages for the secondary language.
   * @param language key of the selected language.
   */
  handleSourceLanguageSelected(language: string) {
    this.selectedSourceLanguage = language;
    this.matchingLanguages = this._dictionaryService.getMatchingLanguages(
      language
    )!;

    // Must reset the target to an empty string if it is not in the new matching languages.
    if (
      !Object.keys(this.matchingLanguages).includes(this.selectedTargetLanguage)
    ) {
      this.selectedTargetLanguage = '';
    }

    // Notify parent
    this.sourceSelectedEvent.emit(this.selectedSourceLanguage);
  }

  /**
   * Sets the thafet language as the provided language.
   * @param language the selected target language.
   */
  handleTargetLanguageSelected(language: string) {
    this.selectedTargetLanguage = language;

    // Notify parent
    this.targetSelectedEvent.emit(this.selectedTargetLanguage);
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

      // Notify parent
      this.sourceSelectedEvent.emit(this.selectedSourceLanguage);
      this.targetSelectedEvent.emit(this.selectedTargetLanguage);
    }
  }
}
