import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Branch, Location } from './';
import { BranchLocatorService } from './branch.locator.service';

@Component({
  selector: 'branch-locator',
  templateUrl: 'branch.locator.html'
})
export class BranchLocatorComponent extends OnInit {
  title: string = 'Locate Branch';
  items: Branch[];
  lat: number = 51.5055;
  lng: number = -0.01801;
  branchName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: BranchLocatorService) {
    super();
  }

  ngOnInit() {
    this.items = [];
    this.service.getBranches().subscribe(
      (branches: Branch[]) => {
        this.items = branches;
      }
    );
  }

  itemTapped(event, item) {
    console.log('Clicked', item.Location.Latitude);
    this.lat = item.Location.Latitude;
    this.lng = item.Location.Longitude;
    this.branchName = item.BranchName;
  }
}
