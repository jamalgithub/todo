import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private apiurl = "http://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiurl);
  }
}
