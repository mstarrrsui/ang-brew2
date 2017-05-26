import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { HopsListComponent } from './components/ingredients/hops-list.component';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'hops', component: HopsListComponent },
  { path: '**', redirectTo: 'home' }
];
