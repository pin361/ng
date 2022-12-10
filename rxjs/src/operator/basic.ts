import { from, mergeMap, of, tap } from "rxjs";

console.log('mergeMap');

const data = [
  { key: 'k-00', value: 'v-00' },
  { key: 'k-01', value: 'v-01' }
];

console.log('from');
from(data)
.pipe(
  tap((item) => {
    const { key, value } = item;
    item.value = `${value}-${key}`;
  })
)
.subscribe((item) => {
  console.log(item);
});

console.log('of');
of(data).subscribe((item) => {
  console.log(item);
});

console.log('mergeMap');
const testMergeMap$ = from(data)
  .pipe(
    mergeMap((item) => item.value),
  );

testMergeMap$.subscribe((item) => {
  console.log(item);
});
