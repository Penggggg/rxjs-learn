const {Observable} = require('rxjs')

Observable
  .of(null)
  .defaultIfEmpty(1)
  .subscribe(console.log)

Observable
  .from([1, 2, 3])
  .every(x => x < 4)
  .subscribe(console.log)

Observable
  .from([1, 2])
  .sequenceEqual(
      Observable
        .from([1, 2])
    )
  .subscribe(console.log)