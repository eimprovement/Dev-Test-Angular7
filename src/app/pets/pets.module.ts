import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets.component';
import { SharedModule } from '@app/shared';
import { PetFormComponent } from './modals/pet-form/pet-form.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    PetsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PetsComponent, PetFormComponent],
  entryComponents: [PetFormComponent]
})
export class PetsModule {}
