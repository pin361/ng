import { Observer }  from './observer.js';

const data = ['one', 'two', 'three'];

export class GroupModel extends Observer {
  constructor() {
    this.items = data;
    this.selectedIndex = -1;
  }
}
