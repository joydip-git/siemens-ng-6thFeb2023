import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent {
  filterText = '';
  @Output() textChanged = new EventEmitter<string>()

  filterTextChanged(text: string) {
    this.filterText = text
    this.textChanged.emit(this.filterText)
  }
}
