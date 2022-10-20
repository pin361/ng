export class Observer {
  constructor() {
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  removeSubscriber(subscriber) {
    const removeIndex = this.subscribers.findIndex((item) => {
      return subscriber === item;
    });

    if (removeIndex !== -1) {
      this.subscribers = this.subscribers.slice(removeIndex, 1);
    }
  }

  notify(data) {
    this.subscribers.forEach(
      (subscriber) => subscriber.update(data)
    );
  }
}
