import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Type } from '../interfaces/type.interface';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  constructor(private http: HttpClient) {}

  getTypes(): Promise<Type[]> {
    return this.http.get<Type[]>(`${environment.apiUrl}/types`).toPromise();
  }

  getType(id: number) : Promise<Type> {
    return this.http.get<Type>(`${environment.apiUrl}/types/${id}`).toPromise();
  }

  postType(data: Type) : Promise<Type> {
    return this.http.post<Type>(`${environment.apiUrl}/types`, data).toPromise();
  }

  putType(id: number, data: Type): Promise<Type> {
    return this.http.put<Type>(`${environment.apiUrl}/types/${id}`, data).toPromise();
  }

  deleteType(id: number): Promise<Type> {
    return this.http.delete<Type>(`${environment.apiUrl}/types/${id}`).toPromise();
  }
}
