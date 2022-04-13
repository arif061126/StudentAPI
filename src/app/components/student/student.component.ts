import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteStudentService } from 'src/app/service/delete-student.service';
import { GetstudentService } from 'src/app/service/getstudent.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private getStudentService: GetstudentService,
    private deleteStudentService: DeleteStudentService,
    private router:Router) { }

  ngOnInit(): void {
    //this.getStudents();
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

  updateStudent(id: number) {
    this.router.navigate(["update-student",id]);
  }

  deleteStudent(id:number) {
    this.deleteStudentService.deleteStudentById(id).subscribe(
      data => {
        console.log(data);
        this.getStudents();
      },
      error => {
        console.log(error);
      }
    )
  }


}
