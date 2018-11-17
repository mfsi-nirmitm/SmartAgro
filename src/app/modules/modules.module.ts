import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { LoggedInGuard } from '../shared/guards/logged-in.guard';
import { TopNavModule } from '../shared/topnav/topnav.modules';
import { ExtraFunctionsService } from '../service/extra-functions.service';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { OrdersModule } from './orders/orders.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ModulesComponent } from './modules.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        TopNavModule,
        SharedModule,
        OrdersModule,
        DashboardModule
    ],
    providers: [ExtraFunctionsService, LoggedInGuard],
    declarations: [ModulesComponent,SidebarComponent],
    exports: [SidebarComponent],
})

export class ModulesModule { }
