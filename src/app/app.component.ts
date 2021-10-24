import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Card } from './shared/interfaces/card.interface';
import { Type } from './shared/interfaces/type.interface';
import { CardsService } from './shared/services/cards.service';
import { TypesService } from './shared/services/types.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cards!: Card[];
  types!: Type[];

  constructor(private cardService: CardsService, private typeService: TypesService) {}
  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      this.cards = await this.cardService.getCards() || [];
      this.types = await this.typeService.getTypes() || [];
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
    try {
      await this.cardService.putCard(id, card);
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteT(id: number)
  {
    try {
      await this.typeService.deleteType(id);
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  async editT(id: number, type: Type)
  {
    try {
      await this.typeService.putType(id, type);
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  async saveT(type: Type) {
    try {
      await this.typeService.postType(type);
      this.getData();
    } catch (error) {
      console.log(error)
    }
  }
}
