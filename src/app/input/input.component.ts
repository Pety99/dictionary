import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inputTextArea',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() lines = 1;
  @Input() submitText = 'Submit';
  @Input() textContent = '';
  constructor() {}
  ngOnInit(): void {}

  /**
   * Handles the submit button click
   */
  handleSubmitClick() {
    console.log(this.textContent);
  }

  /**
   * Clears the text input
   */
  handleClearClick() {
    this.textContent = '';
  }
}
