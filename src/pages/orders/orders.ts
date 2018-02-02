import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { ActiveOrdersPage } from '../active-orders/active-orders';

@Component({
  selector: 'orders',
  templateUrl: './orders.html'
})
export class OrdersPage {
  // set the root pages for each tab
  tab1Root: any = ActiveOrdersPage;
  tab2Root: any = ActiveOrdersPage;

  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
