import { Component, Input } from '@angular/core';
import { ShopItem } from '../../interfaces';

@Component({
  selector: 'shop-card',
  templateUrl: 'shop-card.html'
})

export class ShopCardPage {

  defaultImg: '';
  @Input() shop: ShopItem;

  constructor() { }

  gotoShop() {
    console.log('navigate to shop', this.shop.id);
  }

  openShopLocation() {
    console.log('show on map', this.shop.location);
  }

}
