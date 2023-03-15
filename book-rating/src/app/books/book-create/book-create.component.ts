import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
        Validators.pattern(/^[0-9]*$/)
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(5)
      ]
    }),
  });

  constructor(private bookStoreService: BookStoreService, private router: Router, private route: ActivatedRoute) {}

  submitForm() {
    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      authors: [],
      description: '',
      price: 1
    };

    this.bookStoreService.create(newBook).subscribe(receivedBook => {
      this.router.navigate(['/books', receivedBook.isbn]); // Detailseite
      // this.router.navigateByUrl('/books/' + receivedBook.isbn) // Detailseite
      // this.router.navigateByUrl('/books') // Dashboard
      // this.router.navigate(['..'], { relativeTo: this.route });
    });

  }

}

/*
TODO
- Validierung
- abschicken => reagieren
- Buch erstellen
- HTTP
- wegnavigieren, z.B. zum Dashboard, Detailseite
  - Alternative: auf der Seite bleiben, Formular zurücksetzen
*/
