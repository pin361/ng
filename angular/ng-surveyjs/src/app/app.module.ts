import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppSurveyCreator } from './app.survey-creator';

@NgModule({
  declarations: [
    AppSurveyCreator
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppSurveyCreator]
})
export class AppModule { }
