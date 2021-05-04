import {
  Component,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { Language } from '../models/language.model';

@Component({
  selector: 'selectLanguage',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent implements OnInit {
  @Output() selectedEvent = new EventEmitter();
  @Input() languages = {};
  @Input() selected: string = '';
  @Input() placeholderText: string = 'placeholder text';

  constructor() {}

  /**
   * Sends the key of the selected language
   */
  notifyParent() {
    this.selectedEvent.emit(this.selected);
  }

  /**
   *
   * @param language input language.
   * @returns returns the name of the input language.
   */
  getName(language: Language) {
    return language.name;
  }

  /**
   *
   * @param language input language.
   * @returns the matching languages of the input language.
   */
  getMatchingLanguages(language: Language) {
    return language.matchingLanguages;
  }

  ngOnInit(): void {}
}
