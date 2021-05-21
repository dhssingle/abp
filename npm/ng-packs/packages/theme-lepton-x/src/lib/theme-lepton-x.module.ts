import { ModuleWithProviders, NgModule } from '@angular/core';
import { LeptonXModule } from '@lepton-x/lite';
import { LeptonXCommonSettings } from '@lepton-x/common';
import { ValidationErrorModule } from './components/validation-error';
import { LPX_USER_PROVIDER } from './providers/user.provider';
import { LPX_LANGUAGE_PROVIDER } from './providers/language.provider';

@NgModule({
  declarations: [],
  imports: [LeptonXModule, ValidationErrorModule],
  exports: [],
})
export class ThemeLeptonXModule {
  static forRoot(settings?: LeptonXCommonSettings): ModuleWithProviders<ThemeLeptonXModule> {
    return {
      ngModule: ThemeLeptonXModule,
      providers: [
        LeptonXModule.forRoot(settings).providers,
        ValidationErrorModule.forRoot().providers,
        LPX_USER_PROVIDER,
        LPX_LANGUAGE_PROVIDER,
      ],
    };
  }
}
