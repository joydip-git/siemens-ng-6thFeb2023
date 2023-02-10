import { Observable } from "rxjs";
import { ApiResponse } from "./api-response.model";
import { Product } from "./product.model";

export interface IProductService {
    getProducts(): Observable<ApiResponse<Product[]>>;
    getProductById(id: number): Observable<ApiResponse<Product>>;
    addProduct(data: Product): Observable<ApiResponse<Product[]>>;
    updateProduct(data: Product): Observable<ApiResponse<Product[]>>;
    deleteProduct(id: number): Observable<ApiResponse<Product[]>>;
}