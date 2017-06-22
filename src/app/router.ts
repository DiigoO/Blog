import { Routes } from '@angular/router';
import { ArtigoComponent } from 'app/artigo/artigo.component';
import { HomeComponent } from 'app/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'artigo/:id',
        component: ArtigoComponent
    }
];  