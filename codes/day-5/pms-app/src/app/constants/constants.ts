import { AuthService } from "../modules/core/services/auth.service"
import { ProductService } from "../modules/products/services/product.service"

export const PRODUCT_SERVICE_TOKEN = 'PRODUCT_SERVICE_TOKEN'
export const SERVICE_TYPE = ProductService

export const AUTH_SERVICE_TOKEN = 'AUTH_SERVICE_TOKEN'
export const AUTH_SERVICE_TYPE = AuthService

export const PRODUCT_API_URL_TOKEN = 'PRODUCT_API_URL_TOKEN'
export const PRODUCT_API_URL = 'http://localhost:3003/products'

export const AUTH_API_URL = 'http://127.0.0.1:3003/auth'
export const AUTH_API_URL_TOKEN = 'AUTH_API_URL_TOKEN'