import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RadioControl } from './radio-control';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
})
export class RadioInputComponent implements OnInit {
  @Input() meta!: RadioControl;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
