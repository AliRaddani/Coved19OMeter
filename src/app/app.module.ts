import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import{CovidDataService} from  './covid-data.service';
import { Covid19DataComponent } from './covid19-data/covid19-data.component'

@NgModule({
  declarations: [
    AppComponent,
    Covid19DataComponent
  ],
  imports: [
    BrowserModule,
   
    HttpClientModule

  ],
  providers: [CovidDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
