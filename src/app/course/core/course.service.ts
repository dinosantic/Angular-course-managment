import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses = [
    {
      id: 1,
      name: 'Angular',
      location: 'Sarajevo'
    },
    {
      id: 2,
      name: 'React',
      location: 'Tuzla'
    },
    {
      id: 3,
      name: 'English',
      location: 'Mostar'
    },
    {
      id: 4,
      name: 'Math',
      location: 'Banja Luka'
    }

  ];

  constructor() { }

  getAllCourses() {
    return this.courses;
  }
}
