import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {}

  getTransactions(cardId: number): Observable<any[]> {
    return this.http.get<any[]>(`/api/transactions/card/${cardId}`);

  }
}
