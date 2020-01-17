import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { PetFormService } from './../../../pets/services/pet-form.service';
import { Pet } from './../../../pets/models/pet.interface';
import { PetsComponent } from './../../../pets/pets.component';
import { CreatePet } from './../../../pets/models/create-pet.interface';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PetsComponent, CreatePet>,
    @Inject(MAT_DIALOG_DATA) public data: Pet,
    private petFormService: PetFormService
  ) {}

  ngOnInit() {
    this.form = this.petFormService.initForm();
    if (this.data) {
      this.form.patchValue({
        name: this.data.name
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendBackInfo(): void {
    const result: CreatePet = {
      name: this.form.get('name').value,
      status: 'available'
    };

    this.dialogRef.close(result);
  }
}
