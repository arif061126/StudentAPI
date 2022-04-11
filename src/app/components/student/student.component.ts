import { Component, OnInit } from '@angular/core';
import { GetstudentService } from 'src/app/service/getstudent.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor( private getStudentService:GetstudentService) { }

  ngOnInit(): void {
  }

  student: any;

  getStudents() {
    this.getStudentService.getStudent().subscribe(
      student => {
        console.log(student);
        
        this.student = student;

        /*this.snackbar.open('Student Details opened', 'Ok',{
          duration: this.durationInSeconds * 1000,
        });*/
      },
      error => {
        console.log(error);
      }
    )
  }



}
