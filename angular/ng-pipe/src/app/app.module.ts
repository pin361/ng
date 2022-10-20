import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComputeFiboPipe } from './compute-fibo.pipe';
import { FiboComponent } from './fibo/fibo.component';

@NgModule({
  declarations: [
    AppComponent,
    FiboComponent,
    ComputeFiboPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ComputeFiboPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
