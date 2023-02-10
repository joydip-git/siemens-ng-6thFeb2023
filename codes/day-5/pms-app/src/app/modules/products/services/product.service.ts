import { Inject, Injectable } from '@angular/core';
import { PRODUCT_API_URL_TOKEN } from 'src/app/constants/constants';
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from '../models/api-response.model';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { IProductService } from '../models/product-service.contract';

@Injectable()
export class ProductService implements IProductService {

  constructor(@Inject(PRODUCT_API_URL_TOKEN) private productApiUrl: string, private _http: HttpClient) { }

  addProduct(data: Product): Observable<ApiResponse<Product[]>> {
    throw new Error('Method not implemented.');
  }

  updateProduct(data: Product): Observable<ApiResponse<Product[]>> {
    throw new Error('Method not implemented.');
  }

  deleteProduct(id: number): Observable<ApiResponse<Product[]>> {
    throw new Error('Method not implemented.');
  }

  getProducts(): Observable<ApiResponse<Product[]>> {
    return this._http.get<ApiResponse<Product[]>>(this.productApiUrl)
  }
  getProductById(id: number): Observable<ApiResponse<Product>> {
    return this._http.get<ApiResponse<Product>>(`${this.productApiUrl}/${id}`)
  }
}
