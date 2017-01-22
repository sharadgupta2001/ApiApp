import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductInfo } from './';

@Component({
  selector: 'product-detail',
  templateUrl: 'product.detail.html'
})
export class ProductDetailComponent extends OnInit {
  productInfo: ProductInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super();
  }

  ngOnInit() {
    this.productInfo = this.navParams.data.item;
  }
}
