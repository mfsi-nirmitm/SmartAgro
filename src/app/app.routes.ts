import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { OrdersRoutes } from "./modules/orders/orders.routes";
import { ModulesRoutes } from "./modules/modules.routes";
import { SignUpRoutes } from './signup/signup.routes';

export const routes: Routes = [
  //...LoginRoutes,
  ...ModulesRoutes,
  ...OrdersRoutes,
  ...SignUpRoutes ,
  //...LogoutRoutes,
  { path: '**', component: LoginComponent }
];
