import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/start/start').then((m) => m.Start);
        },
    },
    {
        path: 'hey',
        loadComponent: () => {
            return import('./components/hey/hey').then((m) => m.Hey);
        },
    },
    {
        path: 'test',
        loadComponent: () => {
            return import('./components/test/test').then((m) => m.Test);
        },
    }
];
