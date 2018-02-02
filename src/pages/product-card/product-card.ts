import { Component, Input } from '@angular/core';
import { ProductItem } from '../../interfaces';

@Component({
  selector: 'product-card',
  templateUrl: 'product-card.html'
})

export class ProductCardPage {

  defaultImg: '';
  @Input() product: ProductItem;
  quantity = 0;

  constructor() { }

  // gotoShop() {
  //   console.log('navigate to shop', this.shop.id);
  // }

  // openShopLocation() {
  //   console.log('show on map', this.shop.location);
  // }

  add(q: number) {
    this.quantity += q;
  }

}
