import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../common-features/components/services/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

const productRoutes: Routes = [{
    path: 'products',
    canActivate: [AuthGuard],
    children: [
        {
            path: '',
            component: ProductListComponent
        }, {
            path: 'add',
            component: AddProductComponent
        }, {
            path: 'view/:id',
            component: ViewProductComponent
        }, {
            path: 'edit/:id',
            component: EditProductComponent
        }]
}];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
