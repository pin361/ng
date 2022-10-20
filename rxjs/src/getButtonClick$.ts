import { fromEvent, Observable } from "rxjs";

let subscriber: Observable<Event>;
export const getButtonClick$ = (): Observable<Event> => {
  if(!subscriber) {
    subscriber = fromEvent(
      document.getElementById('button'),
      'click'
    );
  }

  return subscriber;
};
