import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { PRODUCT_API_URL, PRODUCT_API_URL_TOKEN, PRODUCT_SERVICE_TOKEN, SERVICE_TYPE } from 'src/app/constants/constants';
import { HttpClientModule } from '@angular/common/http';
import { ProductStorageService } from './services/product-storage.service';



@NgModule({
  declarations: [
    ProductListComponent,
    FilterProductComponent,
    AddProductComponent,
    ViewProductComponent,
    EditProductComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ],
  exports: [],
  bootstrap: [],
  providers: [
    ProductStorageService,
    {
      provide: PRODUCT_API_URL_TOKEN,
      useValue: PRODUCT_API_URL
    },
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: SERVICE_TYPE
    }
  ]
})
export class ProductsModule { }
