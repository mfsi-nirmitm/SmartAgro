import { Route } from "@angular/router";
import { OrdersDetailsComponent } from "./orders-detail/orders-detail.component";
import { LoggedInGuard } from "../../shared/guards/logged-in.guard";

export const OrdersRoutes: Route[] = [
    {
        path: 'orders', 
        component: OrdersDetailsComponent, 
        //canActivate: [LoggedInGuard],
        children: [
        ]
    }
];
