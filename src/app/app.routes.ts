import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetchdata/fetchdata.component';
import { HopsListComponent } from './ingredients/hops-list.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  // { path: 'fetch-data', component: FetchDataComponent },
  { path: 'hops', component: HopsListComponent },
  { path: '**', redirectTo: 'home' }
];
