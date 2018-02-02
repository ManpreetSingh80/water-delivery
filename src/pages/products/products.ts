import { Component, ViewChild } from '@angular/core';
import { PopoverController, NavController, NavParams } from 'ionic-angular';

// import { PopoverPage } from '../about-popover/about-popover';
import { ProductItem } from '../../interfaces';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'products',
  templateUrl: './products.html'
})
export class ProductPage {

  products: ProductItem[] = [
    {
      productId: 0,
      shopId: 0,
      name: 'Bisleri 2L',
      price: 80,
      volume: 2000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcU3didLTYw4tjTrNJs0Q-8tDu6YbXKoy5dm73rElC-KOQAZtfw',
      description: 'Bisleri 2L bottled water'
    },
    {
      productId: 1,
      shopId: 0,
      name: 'Regular 2L',
      price: 50,
      volume: 2000,
      image: 'https://5.imimg.com/data5/RJ/LV/MY-49578/water-bottle-500x500.jpg',
      description: 'Regular 2L bottled water'
    }
  ];

  totalQuantity = 1;
  shopId = null;

  @ViewChild('scrollArea') scrollArea: any;
  constructor(public popoverCtrl: PopoverController, private navCtrl: NavController, private navParams: NavParams) {

   }

   ionViewDidLoad() {
    this.shopId = this.navParams.get('id');
    console.log(this.shopId);
   }

  checkout() {
    console.log('checkout');
    this.navCtrl.push(CartPage);
  }

}
