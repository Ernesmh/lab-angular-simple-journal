import { Routes } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';


export const routes: Routes = [
    { path: 'home', component: EntryListComponent },
    { path: '**', redirectTo: 'home' }
];
