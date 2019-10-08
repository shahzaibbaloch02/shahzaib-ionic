import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {
    name :'M.Armaghan',
    city :'Rawalpindi',
    interest :['Coin Collecting ','Social Media ','Development']
  };

  constructor(public navCtrl: NavController) {}

}
