import { AddressControl } from './address-control';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.scss'],
})
export class AddressInputComponent implements OnInit {
  @Input() meta!: AddressControl;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
