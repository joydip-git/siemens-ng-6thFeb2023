import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../models/product.model";

@Injectable()
export class ProductStorageService {

    private storage = new BehaviorSubject<Product | undefined>(undefined);
    storageObservable = this.storage.asObservable()

    publish(p: Product) {
        this.storage.next(p)
    }
}