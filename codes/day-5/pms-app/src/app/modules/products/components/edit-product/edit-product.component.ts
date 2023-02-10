import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductStorageService } from '../../services/product-storage.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {
  private storageSubscription?: Subscription;

  errorMessage = ''
  product?: Product;

  constructor(private storage: ProductStorageService) {

  }
  ngOnDestroy(): void {
    this.storageSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    this.storageSubscription = this.storage.storageObservable.subscribe({
      next: (data) => {
        if (data) {
          this.product = data
          this.errorMessage = ''
        } else {
          this.product = undefined
          this.errorMessage = 'No product found in the storage'
        }
      },
      error: (err) => {
        this.product = undefined
        this.errorMessage = err.message
      }
    })
  }
}
