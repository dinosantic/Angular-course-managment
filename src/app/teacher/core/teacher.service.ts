import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teachers = [
    {
      id: 1,
      name: 'Jack Nicholson',
      location: 'Sarajevo',
      image: 'jack_nicholson'
    },
    {
      id: 2,
      name: 'Meryl Streep',
      location: 'Tuzla',
      image: 'meryl_streep'
    },
    {
      id: 3,
      name: 'Clint Eastwood',
      location: 'Mostar',
      image: 'clint_eastwood'
    },
    {
      id: 4,
      name: 'Morgan Freeman',
      location: 'Banja Luka',
      image: 'morgan_freeman'
    }

  ];

  constructor() { }

  getAllTeachers() {
    return this.teachers;
  }
}
