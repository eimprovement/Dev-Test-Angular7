import { ModuleWithProviders, NgModule } from '@angular/core';
import { NoValue } from './no-value.pipe';

@NgModule({
  imports: [],
  declarations: [NoValue],
  exports: [NoValue]
})
export class PipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipesModule
    };
  }
}
