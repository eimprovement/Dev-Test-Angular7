import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export abstract class FormServiceBase {
  form: FormGroup;
  constructor(public fb: FormBuilder) {}

  abstract initForm(): FormGroup;

  reset(defaultValue: any = null): void {
    if (defaultValue) {
      this.form.reset(defaultValue);
    } else {
      this.form.reset();
    }
    this.form.updateValueAndValidity();
  }
}
