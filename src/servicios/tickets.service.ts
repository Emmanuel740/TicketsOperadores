import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  url: string | undefined;
  tickets: any;
  constructor(private http: HttpClient) { 
  this.url = environment.url;
  this.tickets = [];
  }
  GET_tickets_operador():Promise<any>{
    return new Promise<void>((resolve, reject) => {
     this.http.get(this.url + 'fotos/getTickets').subscribe(Data =>{
       this.tickets = Data;
       console.log(Data)
        resolve();
       },err => {
         console.log('error', err);
         reject()
       });
     })
   }


}
