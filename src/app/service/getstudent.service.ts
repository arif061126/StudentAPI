import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetstudentService {

  private baseUrl: String = "http://localhost:8080/api/v1/student";

  constructor(private http:HttpClient) { }

  getStudent() {
    return this.http.get(`${this.baseUrl}`);
  }

}
