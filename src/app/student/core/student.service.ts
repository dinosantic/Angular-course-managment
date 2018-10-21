import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    {
      id: 1,
      name: 'Brad Pitt',
      location: 'Sarajevo',
      image: 'brad_pitt'
    },
    {
      id: 2,
      name: 'Angelina Jolie',
      location: 'Tuzla',
      image: 'angelina_jolie'
    },
    {
      id: 3,
      name: 'Nicolas Cage',
      location: 'Mostar',
      image: 'nicolas_cage'
    },
    {
      id: 4,
      name: 'Leonardo DiCaprio',
      location: 'Banja Luka',
      image: 'di_caprio'
    }

  ];

  getAllStudents() {
    return this.students;
  }
  constructor() { }
}
