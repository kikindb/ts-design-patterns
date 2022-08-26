interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];

  notify(value: T): void;
  suscribe(observer: IObserver<T>): void;
  unsuscribe(observer: IObserver<T>): void;
}

class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }
  notify(value: T): void {
    this.observers.forEach((observer) => {
      observer.refresh(value);
    });
  }
  suscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }
  unsuscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
}

class Observer<T> implements IObserver<T> {
  fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }
  refresh(value: T): void {
    this.fn(value);
  }
}

const subject = new Subject<number>();
const observer1 = new Observer<number>((n) => {
  console.log(`Number: ${n}`);
});

subject.suscribe(observer1);

subject.notify(100);
subject.notify(200);
subject.notify(300);
