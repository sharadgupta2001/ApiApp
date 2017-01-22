import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
import { ApiApp } from './app.component';
import { ProductCatalogComponent, ProductDetailComponent, ProductCatalogService } from '../pages/product-catalog';
import { AtmLocatorComponent } from '../pages/atm-locator';
import { BranchLocatorComponent, BranchLocatorService } from '../pages/branch-locator';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    ApiApp,
    ProductCatalogComponent,
    ProductDetailComponent,
    AtmLocatorComponent,
    BranchLocatorComponent
  ],
  imports: [
    IonicModule.forRoot(ApiApp),
    HttpModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ApiApp,
    ProductCatalogComponent,
    ProductDetailComponent,
    AtmLocatorComponent,
    BranchLocatorComponent
  ],
  providers: [ProductCatalogService, BranchLocatorService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
