import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./domains/tasks/pages/list/list')
    },
    // {
    //     path: 'login',
    //     loadComponent: () => import('./domains/auth/pages/login/login')
    // },
];
