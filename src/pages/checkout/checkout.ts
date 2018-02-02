import { Component, ViewChild } from '@angular/core';
import { PopoverController, AlertController, NavController } from 'ionic-angular';

// import { PopoverPage } from '../about-popover/about-popover';
import { CartItem, Address } from '../../interfaces';
import { LoginPage } from '../login/login';
import { UserData } from '../../providers/user-data';
import { AddAddressPage } from '../add-address/add-address';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.html'
})
export class CheckoutPage {

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

  addresses: any[] = [
    { id: 1, default: false, address: 'sfjsbefjhbsjebfjbsjebfjbkjesbfkjbkjesbkjfbkjsbejbfjbjfjbasjbfjbewajbfjbjwaebjfbjwaeb' },
    { id: 2, default: false, address: 'adjbabwfhbhabwjbfjbqwkjbfjbjqwbjbfjjkbfkjbqwjkfkjbkjwqbfkjbijqwbijfbjibwqjbfjfJFJKFJKWF' },
    { id: 3, default: true, address: 'akjsfdkjajfndjawnjfnkjawnkjfnkjawnjkfnkj' }
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
        <div><b class="desc">Price:  ₹${item.product.price}</b></div>
        <div><p class="desc">${item.product.description}</p></div>
      </div>`,
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('cancel clicked');
          }
        },
        // {
        //   text: 'Remove',
        //   handler: () => {
        //     console.log('remove item', index);
        //     this.removeItem(index);
        //   }
        // }
      ]
    });
    alert.present();
  }

  addAddress() {
    let popover = this.popoverCtrl.create(AddAddressPage);
    popover.present();
    popover.onDidDismiss(status => {
      if (status) {
        // sync address
        console.log('sync addresses');
      }
    });
  }

  checkout() {
    this.userData.hasLoggedIn().then(loggedIn => {
      if(loggedIn) {
        // select address
        // nav to checkout page
      } else {
        let popover = this.popoverCtrl.create(LoginPage);
        popover.present();
      }
    })
  }

}
