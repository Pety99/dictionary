import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'outputTextArea',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  @Input() multiLine: boolean = false;
  @Input() chipOutput: boolean = false;
  @Input() input?: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
