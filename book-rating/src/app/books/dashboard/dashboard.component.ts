import { Component, inject } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books: Book[] = [];
  // Alternativ: bs = inject(BookStoreService);

  constructor(private bookRatingService: BookRatingService, private bookStoreService: BookStoreService) {
    this.bookStoreService.getAll().subscribe((books) => {
      this.books = books;
    });
  }

  doRateUp(book: Book) {
    const ratedBook = this.bookRatingService.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.bookRatingService.rateDown(book);
    this.updateList(ratedBook);
  }


  private updateList(ratedBook: Book) {
    // [1,2,3,4,5].map(e => e * 10) // [10, 20, 30, 40, 50] // Projektion
    // [1,7,2,3,4,5,6,7,8,9,10].filter(e => e > 5) // [7, 6, 7, 8, 9, 10] // Prädikatsfunktion

  this.books = this.books.map(b => b.isbn === ratedBook.isbn ? ratedBook : b);

  /*this.books = this.books.map(b => {
    if (b.isbn === ratedBook.isbn) {
      return ratedBook;
    } else {
      return b;
    }
  })*/
  }

}
