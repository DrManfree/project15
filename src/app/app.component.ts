import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Card } from './shared/interfaces/card.interface';
import { CardsService } from './shared/services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cards!: Card[];

  constructor(private cardService: CardsService) {}
  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      this.cards = await this.cardService.getCards() || [];
    } catch (error) {
      console.log(error)
    }
  }

  async save(card: Card) {
    try {
      await this.cardService.postCard(card);
      this.getData();
    } catch (error) {
      console.log(error)
    }
  }

  async deleteC(id: number) {
    try {
      await this.cardService.deleteCard(id);
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  async edit(id: number, card: Card) {
    
  }
}
