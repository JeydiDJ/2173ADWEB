import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http:HttpClient) { }

  getUsersfromServer() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
