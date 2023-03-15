import { Component } from '@angular/core';
import { filter, interval, map, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating!';

  myDate = Date.now();

  constructor() {
    setInterval(() => {
      this.updateDate();
    }, 1000);

    /************************* */


    // of('A', 'B', 'C', 'D')

    // timer(2000) // ------0|
    // interval(1000) // ---0---1---2---3---4--- ...
    // timer(2000, 1000) // ------0---1---2---3---4--- ...
    // timer(0, 1000) // 0---1---2---3---4--- ...

    timer(0, 1000).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe({
      // next: e => console.log(e),
      complete: () => console.log('Complete')
    });



    /************************* */

    function producer(obs: any) {
      const result = Math.random();
      obs.next(result);
      const result2 = 5;
      obs.next(result2);

      setTimeout(() => obs.next(10), 2000)
      setTimeout(() => obs.next(20), 3000)
      setTimeout(() => obs.complete(), 4000)
    }

    const obs = {
      next: (data: number) => console.log(data),
      error: (err: any) => console.error(err),
      complete: () => console.log('COMPLETE')
    }

    // producer(obs);

    const myObs$ = new Observable<number>(producer);
    // const sub = myObs$.subscribe(obs);

    /*setTimeout(() => {
      sub.unsubscribe();
    }, 2500);*/






    /************************* */


  }

  private updateDate() {
    this.myDate = Date.now();
  }
}
