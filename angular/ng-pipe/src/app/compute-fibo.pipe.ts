import { Pipe, PipeTransform } from '@angular/core';
import { fibonacci } from 'src/utils/fibbonaci';

@Pipe({
  name: 'computeFibo',
  pure: true,
})
export class ComputeFiboPipe implements PipeTransform {
  constructor() {
    console.log('ComputeFiboPipe constructed');
  }

  transform(value: number): unknown {
    return fibonacci(value);
  }

  ngOnInit() {
    console.log('ComputeFiboPipe OnInit');
  }
}
