import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
