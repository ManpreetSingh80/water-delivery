import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ViewController } from 'ionic-angular';

import { Address } from '../../interfaces';



@Component({
  selector: 'add-address',
  templateUrl: './add-address.html'
})
export class AddAddressPage {
  address: Address = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    contact: '',
    default: true,
  };
  submitted = false;

  constructor(public viewCtrl: ViewController) { }

  onAdd(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      // save address
      this.viewCtrl.dismiss(true);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
