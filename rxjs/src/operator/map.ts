import {
  combineLatestAll,
  concat,
  concatAll,
  from,
  map
} from 'rxjs';

const data = [
  { key: 'k-00', value: 'v-00' },
  { key: 'k-01', value: 'v-01' }
];

const testMap$ = from(data)
  .pipe(
    map((item) => item.key),
  );

const testCombineAllLatest$ = testMap$
  .pipe(
    combineLatestAll()
  );

const testConcat$ = testMap$
  .pipe(
    combineLatestAll(),
    (value) => concat(value)
  );


testMap$.subscribe((value) => {
  console.log('Map', value);
});

testCombineAllLatest$.subscribe((value) => {
  console.log('CombineAllLatest', value);
});

testConcat$.subscribe((value) => {
  console.log('Concat', value);
});
