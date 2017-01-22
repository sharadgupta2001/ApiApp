import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ProductCatalogComponent } from '../pages/product-catalog';
import { AtmLocatorComponent } from '../pages/atm-locator';
import { BranchLocatorComponent } from '../pages/branch-locator';

@Component({
  templateUrl: 'app.html'
})
export class ApiApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProductCatalogComponent;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Product Catalog', component: ProductCatalogComponent },
      { title: 'ATM Locator', component: AtmLocatorComponent },
      { title: 'Branch Locator', component: BranchLocatorComponent }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
