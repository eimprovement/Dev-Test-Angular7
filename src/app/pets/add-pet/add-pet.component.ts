import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Pet } from '@app/shared/models';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {
  /*  Public Properties */
  pet: Pet = new Pet();
  form: FormGroup;

  /*  Private Properties */
  constructor(private dialogRef: MatDialogRef<AddPetComponent>) {}

  /*  Life Cycle Hooks */
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.pet.name, [Validators.required])
    });
  }

  /*  Public Methods */
  close(): void {
    this.dialogRef.close();
  }
  save(): void {
    this.dialogRef.close(this.form.value);
  }
}
