import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE_TOKEN } from 'src/app/constants/constants';
import { IProductService } from '../../models/product-service.contract';
import { Product } from '../../models/product.model';
import { ProductStorageService } from '../../services/product-storage.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit, OnDestroy {
  private productSubscription?: Subscription;

  loadingDone = false
  errorMessage = ''
  product?: Product;
  //idVal?: number;
  constructor(
    private storage: ProductStorageService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PRODUCT_SERVICE_TOKEN)
    private ps: IProductService
  ) {

  }

  ngOnInit(): void {
    // this.route.params.subscribe({
    //   next: (param) => {
    //     this.idVal = Number(param['id'])
    //   },
    //   complete: () => {
    //fetch data using service
    //   }
    // })
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot
    const params: Params = snapshot.params
    const id = Number(params['id'])
    //console.log(id)
    this.productSubscription = this.ps.getProductById(id)
      .subscribe({
        next: (resp) => {
          if (resp.data !== null) {
            this.product = resp.data
            this.loadingDone = true
            this.errorMessage = ''
          } else {
            this.product = undefined
            this.loadingDone = true
            this.errorMessage = resp.message
          }
        },
        error: (err: any) => {
          this.product = undefined
          this.loadingDone = true
          this.errorMessage = err.message
        },
        complete: () => {
          if (this.product)
            this.storage.publish(this.product)
        }
      })
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }

  navigateBack() {
    this.router.navigate(['/products'])
  }
}
