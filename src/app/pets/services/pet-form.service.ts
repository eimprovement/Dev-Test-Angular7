import { Injectable } from '@angular/core';
import { FormServiceBase } from '@app/core/services/form-service-base.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PetFormService extends FormServiceBase {
  constructor(fb: FormBuilder) {
    super(fb);
  }

  initForm(): FormGroup {
    return (this.form = this.fb.group({
      name: this.fb.control('', Validators.required)
    }));
  }
}
