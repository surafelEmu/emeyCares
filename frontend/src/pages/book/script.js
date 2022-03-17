import stock from '../../utils/stock' ;



const stock_nxt = new stock() ;

const stock_bck = new stock() ;

stock_nxt.push('five') ;
stock_nxt.push('four') ;
stock_nxt.push('three') ;
stock_nxt.push('two') ;
stock_nxt.push('one') ;

console.log(stock_nxt.peak()) ;

let flag = true ;


const validateName = (selector) => {


    console.log(selector)
    
        selector.forEach((el) => {
    
            console.log(el)
            const first = el.split('_') ;
    
            console.log(first[0]) ;
    
            const fName = document.getElementById(`${el}`) ;
            //const error = document.getElementById(`error_${first[0]}`) ;
    
            fName.addEventListener('change' , (e) => {
                console.log(e) ;
            })
        
            if(fName.value == '') {
                console.log('please add something')
                //error.textContent = `please add your ${first[1]}` ;
                fName.style.border = '0.1rem solid red'
               // error.style.color = 'red' ;
               console.log('..............................................flag..................')
               flag = false ;
            }
        
            console.log(fName.value) ;
        })
        
        return flag ;
    
    }
    
    

    window.onclick = function(event) {
        
        const action = document.querySelector('.action_set') ;



        if(event.target.matches('.btn_nxt')) {



            /************* Form Validation *********** */
            
            const currentDiv = document.querySelector('.personal_Info') ;
    
            console.log('validations...................')
            console.log(currentDiv) ;
    
            console.log(currentDiv.classList.contains('on')) ;

            if(currentDiv.classList.contains('on')) {

                const curButton = document.querySelector('.btn_nxt') ;

                console.log('This is the validation') ;
                console.log(validateName(['Name_f' , 'Name_l' , 'gb_birth' , 'address_city' , 'address_subCity', 'address_street' , 'address_phone' ])) ;
                
                
            }






            if(!flag) {

                if(!stock_nxt.isEmpty()) {
                    
    
                    const currentNxt = stock_nxt.pop() ;
                    const currentPass = stock_nxt.peak() ;
        
                    console.log(currentNxt); 
        
                    stock_bck.push(currentNxt) ;
        
                    const trackerOn = document.querySelector(`.${currentNxt}`) ;
                    trackerOn.classList.add('on')
    
                    
        
                    const containerPass = document.querySelector(`.${currentNxt}C`) ;
                    if(currentPass) {
                        
                        const containerNxt = document.querySelector(`.${currentPass}C`) ;
                        
                        console.log('******************') ;
                        console.log(currentPass) ;
            
                        containerNxt.classList.remove('off') ;
                        containerNxt.classList.add('on') ;


                        const bag = document.querySelector('.bag') ;

                        if(currentPass == 'three') {
                            
                            bag.classList.add('bag_scroll') ;
                            document.getElementById('nxt').innerText = 'Agree and Book' ;
                            // action.classList.add('off') ;

                        }else {
                            bag.classList.remove('bag_scroll') ;
                        }
                        
                        containerPass.classList.remove('on') ;
                    }
                    containerPass.classList.add('off') ;
        
                    // console.log(containerNxt) ;
                    // console.log(containerPass) ;
                }

            }else {
                console.log('adding error flag')
                console.log(document.querySelector('.btn_nxt').classList.add('err')) ;
            }

        }

        if(event.target.matches('.btn_back')) {

            if(!stock_bck.isEmpty()) {

                const nxt = stock_bck.pop() ;
                const pass = stock_nxt.peak()
    
                stock_nxt.push(nxt) ;
    
    
    
                const containerPass = document.querySelector(`.${pass}C`) ;
                const containerNxt = document.querySelector(`.${nxt}C`) ;
    
                if(nxt != 'three') {
                    document.querySelector('.bag').classList.remove('bag_scroll') ;
                    document.getElementById('nxt').innerText = 'Next' ;
                }
    
    
                containerNxt.classList.remove('off') ;
                containerNxt.classList.add('on') ;
                
                containerPass.classList.remove('on') ;
                containerPass.classList.add('off_bck') ;
    
                console.log(containerNxt) ;
                console.log(containerPass) ;
    
    
    
            }
            }



            console.log(action) ;
            console.log('................')
            console.log(stock_bck.peak()) ;
    
            if((!stock_bck.isEmpty())) {
                action.classList.add('on') ;
            } else {
                action.classList.remove('on') ;
            }

            if((stock_bck.peak() == 'three' || stock_bck.peak() == 'four')) {
                action.classList.add('off') ;

            }

            
        
    }
