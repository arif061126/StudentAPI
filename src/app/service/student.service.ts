import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl: String = "http://localhost:8080/api/v1/student";

  constructor(private http:HttpClient) { }

  addStudent(data:any) {
    return this.http.post(`${this.baseUrl}/addStudent`, data);
  }
}
