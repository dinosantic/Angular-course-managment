import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/core/course.service';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student/core/student.service';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherService } from './teacher/core/teacher.service';



@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    CourseComponent,
    StudentComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    CourseService,
    StudentService,
    TeacherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
