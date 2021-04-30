import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.css'],
})
export class SynonymsComponent implements OnInit {
  inputLines: number = 1;
  submitText: string = 'Get Synonym';
  chipOutput: boolean = true;
  synonyms: string[] = [];

  constructor() {}
  ngOnInit(): void {}

  getSynonyms(textContent: string) {
    //Clear the output if the input is empty
    if (textContent === '') {
      this.synonyms = [];
    } else {
      // TODO Get Synonyms
      this.synonyms = [textContent, 'synonym1', 'synonym2'];
    }
  }
}
