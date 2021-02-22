const {Observable} = require('rxjs')

// Observable.combineLatest(
//   Observable.interval(1000),
//   Observable.timer(5000, 1000)
// ).subscribe(console.log)

// Observable.concat(
//   Observable.from([1,2,3]),
//   Observable.from([4,5,6])
// ).subscribe(console.log)

// Observable.merge(
//   Observable.interval(1000),
//   Observable.timer(5000, 1000)
// ).subscribe(console.log)

// Observable.race(
//   Observable.interval(1000),
//   Observable.timer(5000, 1000)
// ).subscribe(console.log)

// Observable
//   .interval(1000)
//   .startWith('???')
//   .subscribe(console.log)

// Observable
//   .interval(1000)
//   .withLatestFrom(
//     Observable.timer(5000, 1000),
//     (x, y) => `${x} ${y}`
//   ).subscribe(console.log)

Observable.zip(
  Observable.from([1]),
  Observable.interval(1000)
).subscribe(console.log)