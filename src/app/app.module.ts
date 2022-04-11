import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// button
import { MatButtonModule } from '@angular/material/button'; 

// card
import { MatCardModule } from '@angular/material/card'; 

//form field
import { MatFormFieldModule } from '@angular/material/form-field'; 

//icon
import { MatIconModule } from '@angular/material/icon'; 

//input
import { MatInputModule } from '@angular/material/input'; 

//snackbar
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; 

//toolbar
import { MatToolbarModule } from '@angular/material/toolbar';

//student component
import { StudentComponent } from './components/student/student.component'; 

//List
import { MatListModule } from '@angular/material/list';

//addstudent
import { AddstudentComponent } from './components/addstudent/addstudent.component';

//form
import { FormsModule } from '@angular/forms';
import { StudentService } from './service/student.service';
import { HttpClientModule } from '@angular/common/http';
import { GetstudentService } from './service/getstudent.service';

//grid
import {MatGridListModule} from '@angular/material/grid-list'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [StudentService, GetstudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
