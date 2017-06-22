import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ArtigoComponent } from './artigo/artigo.component';
import { routes } from './router';


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    ArtigoComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
