import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentService {

  private baseUrl: String = "http://localhost:8080/api/v1/student";

  constructor(private httpClient:HttpClient) { }

  //get student by Id
  getStudentById(id: number){
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  
  //update student:
  updateStudentById(id: number, data: any) {
    return this.httpClient.put(`${this.baseUrl}/update-student/${id}`, data);
  }

}
