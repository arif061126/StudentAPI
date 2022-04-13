import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../service/student';
import { UpdateStudentService } from '../service/update-student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: number;
  //student: Student = new Student();
  data: any = [];
  /*data:any = {
    studentName: "",
    studentEmail: "",
    studentDateOfBirth:""
  }*/

  constructor(private updateStudentService: UpdateStudentService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.updateStudentService.getStudentById(this.id).subscribe(
      result => {
        //this.student = data;
        this.data = result
        //console.log(data);
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )

  }

  onSubmit() {
    this.updateStudentService.updateStudentById(this.id, this.data).subscribe(
      result => {
        //console.log(data);
        console.log(result);
        this.router.navigate(["/showStudents"]);
      },
      error => {
        console.log(error);
      }
    )
  }


}
