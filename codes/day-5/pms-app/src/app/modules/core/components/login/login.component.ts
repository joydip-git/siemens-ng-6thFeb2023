import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AUTH_SERVICE_TOKEN } from 'src/app/constants/constants';
import { IAuthService } from '../../models/auth-service.contract';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private authSubscription?: Subscription;
  errorInfo = ''
  private returnUrl?: string;
  constructor(
    @Inject(AUTH_SERVICE_TOKEN)
    private authService: IAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //checking whether any query parameter by the name 'returnUrl' has been used to appaend originally requested URL
    //for which ActivatedRoute object needs to be dependency injected in the constructor
    this.returnUrl = this.route.snapshot.queryParams['returnUrl']
  }

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
            //the following code is checking whether any originally requested URL existed in the route with returnUrl query parameter and if so, redirect user to the same, else redirect the user to products by default
            if (this.returnUrl) {
              this.router.navigate([this.returnUrl])
            } else
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
