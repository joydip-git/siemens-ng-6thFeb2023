import { Component, Inject, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AUTH_SERVICE_TOKEN } from 'src/app/constants/constants';
import { IAuthService } from '../../models/auth-service.contract';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  private authSubscription?: Subscription;
  errorInfo = ''

  constructor(
    @Inject(AUTH_SERVICE_TOKEN)
    private authService: IAuthService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe()
  }

  submit(value: any) {
    const loggedInUser = <User>value
    //console.log(loggedInUser)
    this.authSubscription = this.authService
      .authenticate(loggedInUser)
      .subscribe({
        next: (resp) => {
          if (resp.data !== null) {
            this.errorInfo = ''
            this.authService.saveToken(resp.data)
            this.router.navigate(['/products'])
          } else {
            this.errorInfo = resp.message
          }
        },
        error: (err: any) => {
          this.errorInfo = err.message
        }
      })
  }
}
