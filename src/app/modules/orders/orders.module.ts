import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbDatepickerModule, NgbTimepickerModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { OrdersComponent } from "./orders.component";
import { OrdersDetailsComponent } from "./orders-detail/orders-detail.component";
import { ExtraFunctionsService } from "../../service/extra-functions.service";
import { LoggedInGuard } from "../../shared/guards/logged-in.guard";
import { GridModule } from "../../shared/grid/grid.module";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbDatepickerModule,
        NgbTimepickerModule,
        RouterModule,
        GridModule,
        SharedModule,
        NgbModule.forRoot(),
    ],
    providers: [ExtraFunctionsService, LoggedInGuard],
    declarations: [OrdersComponent,OrdersDetailsComponent],
    
    exports: [OrdersComponent],
    entryComponents: []
})

export class OrdersModule { }