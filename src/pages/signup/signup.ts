import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopoverController } from 'ionic-angular';

import { NavController, ViewController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, public popoverCtrl: PopoverController,
    public viewCtrl: ViewController) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  onLogin() {
    this.dismiss();
    let popover = this.popoverCtrl.create(LoginPage);
    popover.present();
  }
}
