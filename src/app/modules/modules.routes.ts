import { Route } from '@angular/router';

import { LoggedInGuard } from '../shared/guards/logged-in.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersRoutes } from './orders/orders.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { ModulesComponent } from './modules.component';
export const ModulesRoutes: Route[] = [
    {
        path: 'smartagro',
        component: ModulesComponent,
        //canActivate: [LoggedInGuard],
        children: [
            ...OrdersRoutes,
            ...DashboardRoutes
        ]
    }
];
