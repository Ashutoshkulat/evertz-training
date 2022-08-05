import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TextInputComponent } from './controls/text-input/text-input.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { LabelComponent } from './controls/label/label.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlComponent } from './control/control.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './controls/address/address.component';
import { TextareaComponent } from './controls/textarea/textarea.component';
import { RadioInputComponent } from './controls/radio-input/radio-input.component';
import { AddressInputComponent } from './controls/address-input/address-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    TextInputComponent,
    CheckboxComponent,
    DropdownComponent,
    LabelComponent,
    ControlComponent,
    AddressComponent,
    TextareaComponent,
    RadioInputComponent,
    AddressInputComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
