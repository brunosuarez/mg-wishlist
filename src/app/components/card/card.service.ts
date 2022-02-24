import { Card } from '../../model/card';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CardService{

  constructor(private httpClient: HttpClient){}

  getAllProducts(){
    return this.httpClient.get<Card[]>(`${API_PATH}Products`).toPromise();
  }

}
