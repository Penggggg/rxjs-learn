const {Observable} = require('rxjs')

// Observable.of([1, 2, 3])
//   .subscribe(console.log)

// Observable.from([1, 2, 3])
//   .subscribe(console.log)

// Observable.interval(1000)
//   .subscribe(console.log)

Observable.timer(5000, 1000)
  .subscribe(console.log)