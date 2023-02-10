import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { AUTH_SERVICE_TOKEN } from "src/app/constants/constants";
import { IAuthService } from "src/app/modules/core/models/auth-service.contract";

@Injectable()
export class AppInterceptorService implements HttpInterceptor {

    constructor(
        @Inject(AUTH_SERVICE_TOKEN)
        private authSvc: IAuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.authSvc.getToken()
        console.log(token)
        const modifiedRequest = req.clone({
            headers: req.headers.append(
                'Authorization', `Bearer ${token}`
            )
        })

        return next.handle(modifiedRequest)
    }

}