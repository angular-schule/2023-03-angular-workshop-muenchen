import { Component } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books: Book[] = [];

  constructor() {

    this.books = [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Das große Praxisbuch',
        rating: 5,
        price: 42.90
      },
      {
        isbn: '456',
        title: 'Vue.js',
        description: 'Das andere Framework',
        rating: 3,
        price: 36.90
      }
    ];
  }
}
