import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbDatepickerModule, NgbTimepickerModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WorkStatusComponent } from "./work-status/work-status.component";
import { DashboardComponent } from "./dashboard.component";
import { ChartsModule } from "ng2-charts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { GridModule } from "../../shared/grid/grid.module";
import { SharedModule } from "../../shared/shared.module";
import { LoggedInGuard } from "../../shared/guards/logged-in.guard";

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
        ChartsModule,
        NgxChartsModule,
    ],
    providers: [LoggedInGuard],
    declarations: [DashboardComponent,WorkStatusComponent],
    
    exports: [DashboardComponent],
    entryComponents: [WorkStatusComponent]
})

export class DashboardModule { }