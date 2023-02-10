import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AUTH_API_URL_TOKEN } from "src/app/constants/constants";
import { ApiResponse } from "../../products/models/api-response.model";
import { IAuthService } from "../models/auth-service.contract";
import { User } from "../models/user.model";

@Injectable()
export class AuthService implements IAuthService {
    private tokenSubject = new BehaviorSubject<string>('')
    //tokenObservable = this.tokenSubject.asObservable()

    constructor(
        @Inject(AUTH_API_URL_TOKEN) private autApiUrl: string,
        private http: HttpClient
    ) { }

    authenticate(user: User): Observable<ApiResponse<string>> {
        return this.http.post<ApiResponse<string>>(`${this.autApiUrl}/authenticate`, user)
    }
    register(user: User): Observable<ApiResponse<User>> {
        return this.http.post<ApiResponse<User>>(`${this.autApiUrl}/register`, user)
    }
    saveToken(token: string): void {
        this.tokenSubject.next(token)
    }
    getToken() {
        return this.tokenSubject.getValue()
    }
    removeToken(): void {
        this.tokenSubject.next('')
    }
}