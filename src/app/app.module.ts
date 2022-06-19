import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { StatusComponent } from './_pages/status/status.component';

import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';
import { appRoutingModule } from './app.routing';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms'
import {InputNumberModule} from 'primeng/inputnumber';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RecetasComponent } from './_pages/recetas/recetas.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    RecetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRoutingModule,
    TableModule,
    InputTextModule,
    HttpClientModule,
    ButtonModule,
    FormsModule,
    InputNumberModule,
    SliderModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
