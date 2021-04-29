import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.css'],
})
export class SynonymsComponent implements OnInit {
  inputLines = 1;
  submitText = 'Get Synonym';
  chipOutput = true;

  constructor() {}
  ngOnInit(): void {}
}
