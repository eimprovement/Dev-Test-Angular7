import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@app/shared';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  declarations: [PetsComponent, AddPetComponent],
  imports: [CommonModule, PetsRoutingModule, SharedModule, FlexLayoutModule, MaterialModule, ReactiveFormsModule],
  entryComponents: [AddPetComponent]
})
export class PetsModule {}
