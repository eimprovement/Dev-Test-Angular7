import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@app/shared';
import { PipesModule } from '@app/shared/pipes';
import { AddPetComponent } from './add-pet/add-pet.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  declarations: [PetsComponent, AddPetComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    PetsRoutingModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule
  ],
  entryComponents: [AddPetComponent, ConfirmDialogComponent]
})
export class PetsModule {}
