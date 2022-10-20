import { of } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';
import { getButtonClick$ } from './getButtonClick$';

console.log('rxjs - operators');

const dataSource = of(1, 2, 3, 4, 5, 6);

let min = 1;
const incMin = () => {
  console.log('min', min);
  min = min >= 6
    ? 0
    : min + 1;
};

getButtonClick$()
  .subscribe(() => {
    dataSource.pipe(
      filter((item) => item >= min),
      toArray(),
    ).subscribe((item) => {
      console.log('result', item);
      incMin();
    });
  });
