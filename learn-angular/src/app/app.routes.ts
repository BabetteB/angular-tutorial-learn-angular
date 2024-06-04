import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { FactsComponent } from './components/facts/facts.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'user',
        title: 'User',
        component: UserComponent
    },
    {
        path: 'facts',
        title: 'Facts',
        component: FactsComponent
    },
];
