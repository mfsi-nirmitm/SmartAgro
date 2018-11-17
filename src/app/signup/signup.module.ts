import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from '../shared/toast/toast.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [SignUpComponent,ToastComponent,
        // ChangePasswordComponent, ResetPasswordComponent
    ],
    exports: [SignUpComponent],
    providers: [],
    entryComponents: [ToastComponent]
})

export class SignUpModule { }
