function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) return cache[args];
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;

    };
}

function slowFib(n) {
    if (n<2) return n;
    return fib(n-1) +fib(n-2);
}
const fib = memoize(slowFib)

class Iterator {
    constructor(args) {
        if(args) {
            this.storage= fib(args)
            this.nextStorage = fib(args+1)
        } else {
            this.storage = fib(1)
            this.nextStorage =fib(2)
        }

    }

    next() {
        this.storage = this.nextStorage
        return this.storage
    }

    
}


// test
//let A = new Iterator(4)
//console.log(A.next())

