import { Component, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE_TOKEN } from 'src/app/constants/constants';
import { IProductService } from '../../models/product-service.contract';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  allProducts?: Product[];
  loadingDone = false
  errorMessage = ''
  filterText = ''
  private productSubscription?: Subscription;
  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: IProductService) {

  }
  updateFilterText(newText: string) {
    this.filterText = newText
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    this.productSubscription =
      this.ps
        .getProducts()
        .subscribe(
          {
            next: (resp) => {
              if (resp.data !== null) {
                this.allProducts = resp.data
                this.errorMessage = ''
                this.loadingDone = true
              }
              else {
                this.allProducts = undefined
                this.errorMessage = resp.message
                this.loadingDone = true
              }
            },
            error: (err: any) => {
              this.allProducts = undefined
              this.errorMessage = err.message
              this.loadingDone = true
            }
          }
        )
  }
}
