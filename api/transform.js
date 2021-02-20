const {Observable} = require('rxjs')

// Observable
//   .interval(1000)
//   .buffer(Observable.interval(2000))
//   .subscribe(console.log)

// Observable
//   .interval(1000)
//   .bufferCount(3)
//   .subscribe(console.log)

// Observable
//   .interval(1000)
//   .bufferTime(2000)
//   .subscribe(console.log)

Observable
  .interval(1000)
  .concatMap(() => Observable.timer(5000, 1000), (x, y) => `${x} ${y}`)
  .subscribe(console.log)

