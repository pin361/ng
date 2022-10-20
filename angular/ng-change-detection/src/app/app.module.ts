import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponent } from './app.parent.component';
import { ChildComponent } from './app-child/app-child.component';
import { MainService } from './main.service';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [MainService],
  bootstrap: [ParentComponent]
})
export class AppModule { }
