import { Component, ViewChild } from '@angular/core';
import { PopoverController, AlertController, NavController } from 'ionic-angular';

// import { PopoverPage } from '../about-popover/about-popover';
import { CartItem } from '../../interfaces';
import { LoginPage } from '../login/login';
import { UserData } from '../../providers/user-data';
import { CheckoutPage } from '../checkout/checkout';

@Component({
  selector: 'cart',
  templateUrl: './cart.html'
})
export class CartPage {

  list: CartItem[] = [
    {
      product: {
        productId: 0,
        shopId: 0,
        name: 'Bisleri 2L',
        price: 80,
        volume: 2000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcU3didLTYw4tjTrNJs0Q-8tDu6YbXKoy5dm73rElC-KOQAZtfw',
        description: 'Bisleri 2L bottled water'
      },
      quantity: 1,
      price: 80
    },
    {
      product: {
        productId: 1,
        shopId: 0,
        name: 'Regular 2L',
        price: 50,
        volume: 2000,
        image: 'https://5.imimg.com/data5/RJ/LV/MY-49578/water-bottle-500x500.jpg',
        description: 'Regular 2L bottled water'
      },
      quantity: 2,
      price: 100
    }

  ];

  totalQuantity = 0;

  @ViewChild('scrollArea') scrollArea: any;
  constructor(public popoverCtrl: PopoverController, private alertCtrl: AlertController,
    private userData: UserData, private navCtrl: NavController) { }

  ionViewDidLoad() {
    this.list.map(item => Object.assign(item, {price: item.quantity * item.price }));
    this.totalQuantity = this.list.reduce((prev, curr) => prev + curr.quantity, 0);
  }

  onBack() {
    this.navCtrl.pop();
  }

  removeItem(index) {
    console.log('removing item at ', index);
    this.list.splice(index,1);
  }

  decQty(index) {
    if (this.list[index].quantity > 1) {
      this.list[index].quantity -= 1;
      this.list[index].price -= this.list[index].product.price;
    }
  }

  incQty(index) {
    this.list[index].quantity += 1;
    this.list[index].price += this.list[index].product.price;
  }

  showItemInfo(item: any, index: number) {
    /*
    let info = this.popoverCtrl.create(ProductInfoPage, item);
    info.present();
    */
    let alert = this.alertCtrl.create({
      title: `<div class="title">${item.product.name}</div>`,
      message: `<div>
        <div><img class="product-img" src="${item.product.image}"></div>
        <div><h2 class="name">${item.product.name}</h2></div>
        <div><p class="desc">${item.product.name}</p></div>
      </div>`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel clicked');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            console.log('remove item', index);
            this.removeItem(index);
          }
        }
      ]
    });
    alert.present();
  }

  checkout() {
    console.log('checkout');
    this.userData.hasLoggedIn().then(loggedIn => {
      if(loggedIn) {
        // select address
        // nav to checkout page
        this.navCtrl.push(CheckoutPage);
      } else {
        let popover = this.popoverCtrl.create(LoginPage);
        popover.present();
      }
    })
  }

}
