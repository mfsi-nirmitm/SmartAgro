import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AuthStatus } from '.';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
import { LoginRequest } from '../model/login-request.model';
import { StorageUtil } from '../util/storage.util';
import { AuthService } from '../service/auth.service';
import { SpinnyService } from '../shared/spinny/spinny.service';
import { Exception, ExceptionRegistry } from '../constants/exception-registry.constant';
import { ToastComponent } from '../shared/toast/toast.component';
import { LoginResponse } from '../model/login-response.model';
import { CommonUtil } from '../util/common.util';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    ssoURL: SafeResourceUrl;
    ssURLStr;
    login = {
        username: '',
        password: '',
        remember: true
    };
    showErrorMessage = false;

    public _authStatus: AuthStatus;
    public _authenticatedUserSubs: Subscription;
    public alerts: any = [];

    constructor(private _router: Router,
        private _toastr: ToastrService,
        public sanitizer: DomSanitizer,
        private _authService: AuthService,
        private spinnyService: SpinnyService
    ) {
        // this.ssURLStr = checkMode.sso+"/assets/sso/receiver.html";
        this.ssoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.ssURLStr);

    }

    ngOnInit() {

    }

    onLoginFormSubmit(form: any): void {
      if (form && !form.valid) {
          this._toastr.show('Please fill in all details', 'Error!', {
              toastComponent: ToastComponent,
              toastClass: 'error-toast-class',
              disableTimeOut: true,
              positionClass: 'toast-top-center'
          });
          return;
      }
      // New login request
      const loginRequest = new LoginRequest(
          this.login.username,
          this.login.password
      );
      this.doAuthentication(loginRequest);
  }

  doAuthentication(loginRequest: LoginRequest): void {
      this.spinnyService.start();
      this._authenticatedUserSubs = this._authService.authenticate(loginRequest).subscribe(
          (data: any) => {
              this.spinnyService.stop();
              this._authStatus = data.statusCode ? AuthStatus.SUCCESS : AuthStatus.FAILED;
              if (this._authStatus === AuthStatus.SUCCESS) {
                  const userData = data['data'];
                  if (!userData) {
                      StorageUtil.clearAll();
                      this._toastr.show(' You do not have permission to access any customer !! ', 'Error!', {
                          toastComponent: ToastComponent,
                          toastClass: 'error-toast-class',
                          disableTimeOut: true,
                          positionClass: 'toast-top-center'
                      });
                  } else {

                      StorageUtil.setSessionKey(data['data']['accessToken']);
                      this._router.navigateByUrl('/smartagro/dashboard');
                      this._toastr.clear();
                  }



              } else {
                  this._toastr.show('Error Occurred: ' + data.error.error, 'Error!', {
                      toastComponent: ToastComponent,
                      toastClass: 'error-toast-class',
                      // timeOut: 2000,
                      disableTimeOut: true,
                      positionClass: 'toast-top-center'
                  });
              }
          },
          (ex: Exception) => {
              var body = JSON.parse(ex['_body']);
              this.spinnyService.stop();
              this._toastr.show('Error Occurred:' + body.message, 'Error!', {
                  toastComponent: ToastComponent,
                  toastClass: 'error-toast-class',
                  // timeOut: 2000,
                  disableTimeOut: true,
                  positionClass: 'toast-top-center'
              });
              if (ex === ExceptionRegistry.UNAUTH_ACC_DENIED) {
                  this._authStatus = AuthStatus.FAILED;
                  console.log({ type: 'ERROR', message: ex.message });
              }
          }
      );
  }

  rememberMe() {

  }

  forgotPassword() {

  }

}
