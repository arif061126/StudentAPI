import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetstudentService } from 'src/app/service/getstudent.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  durationInSeconds = 5;
  constructor(private snackbar: MatSnackBar) { }
  
  btnClick() {
    
    this.snackbar.open('Student Details opened', 'Ok',{
      duration: this.durationInSeconds * 1000,
    });

    
  }

  btnClick2() {
    
    this.snackbar.open('Add new Student', 'Ok',{
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {
    
  }
  

}
