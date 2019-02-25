import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@app/shared';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  declarations: [PetsComponent],
  imports: [CommonModule, PetsRoutingModule, SharedModule, FlexLayoutModule, MaterialModule]
})
export class PetsModule {}
