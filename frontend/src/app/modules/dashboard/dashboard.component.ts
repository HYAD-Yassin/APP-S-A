import {  Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TransactionsComponent } from './transactions/transactions.component';


import { CommonModule , NgStyle, CurrencyPipe } from '@angular/common';
import { CardService } from '../service/card.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [RouterOutlet, TransactionsComponent ,CommonModule ,
                  NgStyle, CurrencyPipe],
})



export class DashboardComponent implements OnInit {
  photo : string ; 

  user: any = null;
  userCards: any[] = [];
  cardIds: number[] = [];

  constructor(private cardService: CardService) {

    this.photo = './assets/images/img-01.jpg'; 
    
  }

  ngOnInit(): void {
    this.loadUser();
    if (this.user) {
      this.loadCards();
    }
  }

  loadUser() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  loadCards() {
    this.cardService.getUserCards(this.user.id).subscribe(
      (response) => {
        this.userCards = response;
        this.cardIds = this.userCards.map(card => card.id);

        localStorage.setItem('cardIds', JSON.stringify(this.cardIds));

        
      },
      (error) => {
        console.error('Error fetching cards:', error);
      }
    );
  }



}

