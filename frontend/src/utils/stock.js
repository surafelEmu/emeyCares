

    export default (function() {
        const items = new WeakMap() ;

        class stock {
            constructor() {
                items.set(this , []) ;
            }

            push(data) {
                let l = items.get(this) ;
                console.log(l) ;
                return l.push(data) ;
            }

            pop() {
                let l = items.get(this) ;
                return l.pop() ;
            }

            peak() {
                let l = items.get(this) ;
                return l[l.length - 1] ;
            }

            isEmpty() {
                let l = items.get(this) ;
                console.log(l)
                return (l.length == 0) ;
            }
        }
        return stock ;
    })()
 
