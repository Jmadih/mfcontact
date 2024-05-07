import {ApplicationConfig, EnvironmentProviders, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {NbThemeModule} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";

const provideNebular = (): EnvironmentProviders[] => [
  importProvidersFrom(NbThemeModule.forRoot({ name: 'cosmic' })),
  importProvidersFrom(NbEvaIconsModule)
]
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNebular()]
};
