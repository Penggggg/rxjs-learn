const {Observable} = require('rxjs')

Observable 
  .from([1,2,3,4,5])
  .delay(50000)
  .subscribe(console.log)