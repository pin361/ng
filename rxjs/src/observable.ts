import { take } from 'rxjs';
import { getButtonClick$ } from './getButtonClick$';

console.log('rxjs - observable');

getButtonClick$()
  .pipe(take(2))
  .subscribe(
    {
      next(event: Event) {
        console.log('event', event);
      },
      complete() {
        console.log('complete');
      }
    });
