import { Component, OnInit } from '@angular/core';
import config from '../../env';
import { DictionaryService } from '../services/dictionary.service';
@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
})
export class DictionaryComponent implements OnInit {
  public inputLines = 5;
  public submitText = 'Translate';

  constructor(private _dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    console.log(config.YANDEX_API_KEY);
  }
}
