import { Observable } from "rxjs";
import { ApiResponse } from "../../products/models/api-response.model";
import { User } from "./user.model";

export interface IAuthService {
    authenticate(user: User): Observable<ApiResponse<string>>;
    register(user: User): Observable<ApiResponse<User>>;
    saveToken(token: string): void;
    getToken(): string;
    removeToken(): void;
    //tokenObservable: Observable<string>;
}