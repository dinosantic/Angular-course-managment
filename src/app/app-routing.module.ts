import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

// tslint:disable-next-line:no-trailing-whitespace
const routes: Routes = [ 
    {
        path: '',
        // tslint:disable-next-line:no-trailing-whitespace
        component: FullLayoutComponent,      
        children: [
            {
                path: 'course',
                component: CourseComponent
            },
            {
                path: 'student',
                component: StudentComponent
            },
            {
                path: 'teacher',
                component: TeacherComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
      ],
      exports: [ RouterModule ]
})

export class AppRoutingModule {}
