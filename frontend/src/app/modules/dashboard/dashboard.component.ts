import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NftChartCardComponent } from './components/nft/nft-chart-card/nft-chart-card.component';

import { NgStyle, CurrencyPipe } from '@angular/common';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [RouterOutlet,  NftChartCardComponent,
                  NgStyle, CurrencyPipe],
})
export class DashboardComponent implements OnInit {
  photo : string ; 

  constructor() {
   
    this.photo = './assets/images/img-01.jpg'; 
  }

  ngOnInit(): void {}
}

