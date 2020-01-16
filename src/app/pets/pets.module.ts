import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, PetsRoutingModule, SharedModule],
  declarations: [PetsComponent]
})
export class PetsModule {}
