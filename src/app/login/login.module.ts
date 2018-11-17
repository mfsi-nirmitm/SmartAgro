import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [LoginComponent
        // ChangePasswordComponent, ResetPasswordComponent
    ],
    exports: [LoginComponent],
    providers: [],
    entryComponents: []
})

export class LoginModule { }
