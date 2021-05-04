import { Component, OnInit } from '@angular/core';
import { SynonymService } from '../services/synonym.service';

@Component({
  selector: 'synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.css'],
})
export class SynonymsComponent implements OnInit {
  inputLines: number = 1;
  submitText: string = 'Get Synonym';
  chipOutput: boolean = true;
  synonyms?: string[] = [];

  constructor(private synonymService: SynonymService) {}
  ngOnInit(): void {}

  getSynonyms(textContent: string) {
    //Clear the output if the input is empty
    if (textContent === '') {
      this.synonyms = [];
    } else {
      this.synonymService.getSynonyms(textContent).then((res) => {
        this.synonyms = res;
      });
    }
  }
}
