const {Observable} = require('rxjs')

Observable 
  .from([1,2,3,4,5])
  .count(x => x > 3)
  .subscribe(console.log)

Observable 
  .from([1,2,3,4,5])
  .max()
  .subscribe(console.log)

Observable 
  .from([1,2,3,4,5])
  .min()
  .subscribe(console.log)

Observable 
  .from([1,2,3,4,5])
  .reduce((x, y) => x + y, 0)
  .subscribe(console.log)