import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { AlertYesNoComponent } from './alert-yes-no/alert-yes-no.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule, MatDialogModule],
  declarations: [LoaderComponent, AlertYesNoComponent],
  exports: [LoaderComponent, AlertYesNoComponent],
  entryComponents: [AlertYesNoComponent]
})
export class SharedModule {}
