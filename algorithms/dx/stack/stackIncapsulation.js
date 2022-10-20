// Представим задачу: требуется реализовать функцию создания стека.
// Стек имеет следующее четко определенное внешнее апи: метод push для добавления айтема,
// метод pop должен удалять последний добавленный и возвращать его.
// Также функция создания стека принимает callback onItemsChanged, который вызывается в методе pop и push.
// Верно ли, что переданный callback всегда будет вызван при изменении items?
export const stackIncapsulation = (onItemsChanged) => ({
  items: [],
  push(item) {
    this.items.push(item);
    onItemsChanged(this.items);
  },
  pop() {
    try {
      return this.items.pop();
    } finally {
      onItemsChanged(this.items);
    }
  }
});
