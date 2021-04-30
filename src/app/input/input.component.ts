import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'inputTextArea',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() lines = 1;
  @Input() submitText = 'Submit';
  textContent = '';
  @Output() submitEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Handles the submit button click
   */
  handleSubmitClick() {
    this.submitEvent.emit(this.textContent);
  }

  /**
   * Clears the text input
   */
  handleClearClick() {
    this.textContent = '';
    // Clear the translate output too
    this.submitEvent.emit(this.textContent);
  }
}
