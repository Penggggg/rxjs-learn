class Observable {

  ob;

  constructor(obFunc, op, parallelList) {
    this.op = op || {};
    this.obFunc = obFunc
    this.parallelList = parallelList || []
  }

  static create(obFunc) {
    return new Observable(obFunc)
  }

  subscribe(subFunc, errFunc, comFunc) {
    this.ob = new Observer(subFunc, errFunc, comFunc, this.op)
    this.obFunc(this.ob)
    this.parallelList.map(observable => observable.subscribe(x => this.ob.next(x)))
  }
  
  map(Func) {
    return new Observable(this.obFunc, {opMap: Func})
  }

  merge(observable) {
    return new Observable(this.obFunc, {}, [observable])
  }
}

class Observer {

  isDone = false;

  constructor(subFunc, errFunc, comFunc, op) {
    this.op = op || {}
    this.subFunc = subFunc
    this.errFunc = errFunc
    this.comFunc = comFunc
  }

  decorateVal(val) {
    const opCode = Object.keys(this.op)[0]
    return opCode ? this.op[opCode](val) : val
  }

  next(val) {
    if (this.isDone) return
    this.subFunc(this.decorateVal(val))
  }

  error(msg) {
    this.isDone = true
    this.errFunc && this.errFunc(msg)
  }
  
  complete(msg) {
    this.isDone = true;
    this.comFunc && this.comFunc(msg)
  }
}


Observable.create(
  observer => {
    observer.next(1);
    setTimeout(() => {
      observer.next(2);
    }, 1000 )
  }
)
.map(x => `${x} hhh`)
.merge(
  Observable.create(
    observer => {
      setTimeout(() => {
        observer.next(3);
      }, 2000);
    }
  )
)
.subscribe(
  x => console.log(x),
  err => console.error(err),
  msg => console.log(`I am complete`)
);