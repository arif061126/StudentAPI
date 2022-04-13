import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteStudentService {

  private baseUrl: String = "http://localhost:8080/api/v1/student";

  constructor(private http:HttpClient) { }

  deleteStudentById(id:any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
