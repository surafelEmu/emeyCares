
window.onload = function() {


    const Stock = (function() {
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
                return l.length == 0 ;
            }
        }
        return stock ;
    })()
 

    const stock_nxt = new Stock() ;

    const stock_bck = new Stock() ;

    stock_nxt.push('four') ;
    stock_nxt.push('three') ;
    stock_nxt.push('two') ;
    stock_nxt.push('one') ;

    console.log(stock_nxt.peak()) ;
    
    // console.log(stock_nxt.pop()) ;

    // console.log(stock_nxt.peak()) ;


    window.onclick = function(event) {


        if(event.target.matches('.btn_nxt')) {

            const currentNxt = stock_nxt.pop() ;
            const currentPass = stock_nxt.peak() ;

            console.log(currentNxt); 

            stock_bck.push(currentNxt) ;

            const trackerOn = document.querySelector(`.${currentNxt}`) ;
            trackerOn.classList.add('on')

            const containerPass = document.querySelector(`.${currentNxt}C`) ;
            const containerNxt = document.querySelector(`.${currentPass}C`) ;


            containerNxt.classList.remove('off') ;
            containerNxt.classList.add('on') ;
            
            containerPass.classList.remove('on') ;
            containerPass.classList.add('off') ;

            console.log(containerNxt) ;
            console.log(containerPass) ;


        }

        if(event.target.matches('.btn_back')) {

            const nxt = stock_bck.pop() ;
            const pass = stock_nxt.peak()

            stock_nxt.push(nxt) ;



            const containerPass = document.querySelector(`.${pass}C`) ;
            const containerNxt = document.querySelector(`.${nxt}C`) ;



            containerNxt.classList.remove('off') ;
            containerNxt.classList.add('on') ;
            
            containerPass.classList.remove('on') ;
            containerPass.classList.add('off_bck') ;

            console.log(containerNxt) ;
            console.log(containerPass) ;



        }


        
    }
}
