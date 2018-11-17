import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { OrdersRoutes } from "./modules/orders/orders.routes";
import { ModulesRoutes } from "./modules/modules.routes";

export const routes: Routes = [
  //...LoginRoutes,
  ...ModulesRoutes,
  ...OrdersRoutes,
  //...LogoutRoutes,
  { path: '**', component: LoginComponent }
];