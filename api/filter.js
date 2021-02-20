const {Observable} = require('rxjs')

// Observable
//   .interval(1000)
//   .debounceTime(500)
//   .subscribe(console.log)

// Observable
//   .interval(1000)
//   .debounce(d => Observable.interval(d * 500))
//   .subscribe(console.log)

// Observable
//   .from([1,1,2,3,4,4])
//   .distinct()
//   .subscribe(console.log)

// Observable
//   .from([1,1,2,3,1])
//   .distinctUntilChanged()
//   .subscribe(console.log)

// Observable
//   .from([1,1,2,3,1])
//   .elementAt(2)
//   .subscribe(console.log)

// Observable
//   .from([1,2,3])
//   .filter(x => x >= 2)
//   .subscribe(console.log)

// Observable
//   .from([1,2,3])
//   .find(x => x >= 2)
//   .subscribe(console.log)

// Observable
//   .from([1,2,3])
//   .findIndex(x => x >= 2)
//   .subscribe(console.log)

// Observable
//   .from([1,2,3])
//   .first()
//   .subscribe(console.log)

// Observable
//   .from([1,2,3])
//   .ignoreElements()
//   .subscribe(console.log)

// Observable
//   .from([1,2,3])
//   .last()
//   .subscribe(console.log)

// Observable
//   .interval(1000)
//   .sampleTime(2000)
//   .subscribe(console.log)

// Observable
//   .interval(1000)
//   .skip(2)
//   .subscribe(console.log)

// Observable
//   .interval(1000)
//   .skipUntil(Observable.timer(5000, 1000))
//   .subscribe(console.log)

// Observable
//   .from([1,5,3,5,4])
//   .skipWhile(x => x < 5)
//   .subscribe(console.log)

// Observable
//   .from([1,5,3,5,4])
//   .take(2)
//   .subscribe(console.log)

// Observable
//   .from([1,5,3,5,4])
//   .takeLast(2)
//   .subscribe(console.log)

// Observable
//   .interval(1000)
//   .takeUntil(Observable.timer(5000))
//   .subscribe(console.log)

// Observable
//   .interval(1000)
//   .takeWhile(x => x < 5)
//   .subscribe(console.log)

// Observable
//   .interval(1000)
//   .throttleTime(500)
//   .subscribe(console.log)