import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopoverController } from 'ionic-angular';

import { NavController, ViewController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, public popoverCtrl: PopoverController,
  public viewCtrl: ViewController) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.navCtrl.push(TabsPage);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSignup() {
    this.dismiss();
    let popover = this.popoverCtrl.create(SignupPage);
    popover.present();
  }
}
