import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})

export class AddstudentComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private student:StudentService, private router: Router) { }
  durationInSeconds = 5;

  data = {
    studentName: "",
    studentEmail: "",
    studentDateOfBirth:""
  }

  
  ngOnInit(): void {
  }


  onSubmit() {
    console.log("submitted!!!!!!!!!!!");
    console.log(this.data);

    if(this.data.studentName=== ""
      || this.data.studentEmail === "" ||
      this.data.studentDateOfBirth === "") {
      
      this.snackbar.open("Fields can not be empty!", "Ok");
      return;
    }

    this.student.addStudent(this.data).subscribe(
      response => {
        console.log(response);
        this.router.navigate(["showStudents"]);
      },
      error => {
        console.log(error);
      }
    )
  }

  btnClick() {
    
    this.snackbar.open('Student Details opened', 'Ok',{
      duration: this.durationInSeconds * 1000,
    });
  }

}
