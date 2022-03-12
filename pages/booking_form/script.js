
window.onload = function() {


    class node {
        constructor(data , left=null , right=null ) {
            this.data = data ;
            this.left = left ;
            this.right = right ;

        }
    }

    class linkedList {
        constructor() {
            this.root = null ;
        }


        add(data) {

            const n = new node(data)
            if(this.root == null) {
                this.root = n ;
            }else {
                let current = this.root ;
                // console.log(!current.right)
                while(current) {
                    console.log('inside the loop')
                    console.log(current.right) ;
                    if(!current.right) {
                        current.right = n ;
                        // current.left = current.left ;

                        break ;
                    }
                    current = current.right ;
                }
            }
        
            console.log(this.root) ;
        
        }

        show() {
            return this.root ;
        }
    }



    const ll = new linkedList() ;
    // ll.add('one') ;
    ll.add('two') ;
    ll.add('three') ;
    ll.add('four') ;

    let current = ll.show() ;


    let currentData = 'one' ;

window.onclick = function(event) {
    // if(event.target.matches('.dropbtn')) {
    //     document.getElementById("myDropdown").classList.toggle("show"); 
    // }else {
    //     var dropdowns = document.getElementsByClassName("dropdown-content") ;

    //     for(let i = 0 ; i < dropdowns.length ; i++) {
    //         var openDropdown = dropdowns[i] ;
    //         if(openDropdown.classList.contains('show')) {
    //             openDropdown.classList.remove('show') ;
    //         }
    //     }
    // }

    console.log(event)
   

    if(event.target.matches('.btn_nxt')) {
        // console.log('just clicked') ;
        // console.log(current.data) ;
      
        // console.log('current Data') ;
        // console.log(currentData) ;
        

        let currentDiv = document.querySelector(`.${current.data}`) ;

        let currentDivC = document.querySelector(`.${current.data}C`) ;

        
        currentDiv.classList.add('on') ;
        

        console.log(currentDivC) ;

        currentDivC.classList.add('on') ;


        if(currentData) {
            let passedData = document.querySelector(`.${currentData}C`) ;
            passedData.classList.remove('on')
            passedData.classList.add('off') ;
            console.log(passedData)
        }

        // passContainer.classList.add('off') ;

        // document.getElementById(id).style.property = new style 
        console.log(currentDiv) ;

        currentDiv.classList.add('on') ;


        currentData = current.data ;
        current = current.right ;



    }


}

}
