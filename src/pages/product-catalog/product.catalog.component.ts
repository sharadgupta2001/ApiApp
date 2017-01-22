import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDetailComponent,  ProductInfo } from './';
import { ProductCatalogService } from './product.catalog.service';

@Component({
  selector: 'product-catalog',
  templateUrl: 'product.catalog.html'
})
export class ProductCatalogComponent extends OnInit {
  selectedProduct: ProductInfo;
  items: ProductInfo[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ProductCatalogService) {
    super();
  }

  ngOnInit() {
    this.items = [];
    this.service.getProducts().subscribe(
      (products: ProductInfo[]) => this.items = products
    );
  }

  itemTapped(event, item) {
    this.navCtrl.push(ProductDetailComponent, {
      item: item
    });
  }
}
