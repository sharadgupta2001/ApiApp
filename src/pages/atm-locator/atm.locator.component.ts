import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'atm-locator',
  templateUrl: 'atm.locator.html'
})
export class AtmLocatorComponent {
  constructor(public navCtrl: NavController, public navParams: NavParams) { 
  }
}
