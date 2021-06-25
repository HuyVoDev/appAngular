import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule, 
    AgGridModule.withComponents([]),
     FormsModule,
     HttpClientModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
