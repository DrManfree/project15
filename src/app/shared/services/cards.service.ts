import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Card } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) {}

  getCards(): Promise<Card[]> {
    return this.http.get<Card[]>(`${environment.apiUrl}/cards`).toPromise();
  }

  getCard(id: number) : Promise<Card> {
    return this.http.get<Card>(`${environment.apiUrl}/cards/${id}`).toPromise();
  }

  postCard(data: Card) : Promise<Card> {
    return this.http.post<Card>(`${environment.apiUrl}/cards`, data).toPromise();
  }

  putCard(id: number, data: Card): Promise<Card> {
    return this.http.put<Card>(`${environment.apiUrl}/cards/${id}`, data).toPromise();
  }

  deleteCard(id: number): Promise<Card> {
    return this.http.delete<Card>(`${environment.apiUrl}/cards/${id}`).toPromise();
  }
}
