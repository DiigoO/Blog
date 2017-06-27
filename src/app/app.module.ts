import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ArtigoComponent } from './artigo/artigo.component';
import { routes } from './router';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    ArtigoComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(routes), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
