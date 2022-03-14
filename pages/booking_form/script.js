

// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// //Show input error messages
// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
// }

// //show success colour
// function showSucces(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }

// //check email is valid
// function checkEmail(input) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if(re.test(input.value.trim())) {
//         showSucces(input)
//     }else {
//         showError(input,'Email is not invalid');
//     }
// }


// //checkRequired fields
// function checkRequired(inputArr) {
//     inputArr.forEach(function(input){
//         if(input.value.trim() === ''){
//             showError(input,`${getFieldName(input)} is required`)
//         }else {
//             showSucces(input);
//         }
//     });
// }


// //check input Length
// function checkLength(input, min ,max) {
//     if(input.value.length < min) {
//         showError(input, `${getFieldName(input)} must be at least ${min} characters`);
//     }else if(input.value.length > max) {
//         showError(input, `${getFieldName(input)} must be les than ${max} characters`);
//     }else {
//         showSucces(input);
//     }
// }

// //get FieldName
// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// // check passwords match
// function checkPasswordMatch(input1, input2) {
//     if(input1.value !== input2.value) {
//         showError(input2, 'Passwords do not match');
//     }
// }


// //Event Listeners
// form.addEventListener('submit',function(e) {
//     e.preventDefault();

//     checkRequired([username, email, password, password2]);
//     checkLength(username,3,15);
//     checkLength(password,6,25);
//     checkEmail(email);
//     checkPasswordMatch(password, password2);
// });






















window.onload = function() {

  
/**************Form Validation **************** */

const validateName = (selector) => {

console.log(selector)

    selector.forEach((el) => {

        console.log(el)
        const first = el.split('_') ;

        console.log(first[0]) ;

        const fName = document.getElementById(`${el}`) ;
        const error = document.getElementById(`error_${first[0]}`) ;

        fName.addEventListener('change' , (e) => {
            console.log(e) ;
        })
    
        if(fName.value == '') {
            console.log('please add something')
            error.textContent = `please add your ${first[1]}` ;
            fName.style.border = '0.1rem solid red'
            error.style.color = 'red' ;
        }
    
        console.log(fName.value) ;
    })


}



/*********** Form Transition **************** */


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
                console.log(l)
                return (l.length == 0) ;
            }
        }
        return stock ;
    })()
 

    const stock_nxt = new Stock() ;

    const stock_bck = new Stock() ;

    stock_nxt.push('five') ;
    stock_nxt.push('four') ;
    stock_nxt.push('three') ;
    stock_nxt.push('two') ;
    stock_nxt.push('one') ;

    console.log(stock_nxt.peak()) ;
    
    // console.log(stock_nxt.pop()) ;

    // console.log(stock_nxt.peak()) ;



    window.onclick = function(event) {




        if(event.target.matches('.btn_nxt')) {



            /************* Form Validation *********** */
            
            const currentDiv = document.querySelector('.personal_Info') ;
    
            console.log('validations...................')
            console.log(currentDiv) ;
    
            console.log(currentDiv.classList.contains('on')) ;

            if(currentDiv.classList.contains('on')) {

                const curButton = document.querySelector('.btn_nxt') ;

                validateName(['Name_f' , 'Name_l' , 'gb_birth' , 'address_city' , 'address_subCity', 'address_street' , 'address_phone' ]) ;
                
                
            }






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
        
        
                    containerNxt.classList.remove('off') ;
                    containerNxt.classList.add('on') ;
                    
                    containerPass.classList.remove('on') ;
                }
                containerPass.classList.add('off') ;
    
                // console.log(containerNxt) ;
                // console.log(containerPass) ;
            }


        }

        if(event.target.matches('.btn_back')) {

            if(!stock_bck.isEmpty()) {

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


            const action = document.querySelector('.action_set') ;

            console.log(action) ;
            console.log('................')
            console.log(stock_bck) ;
    
            if(!stock_bck.isEmpty()) {
                action.classList.add('on') ;
            } else {
                action.classList.remove('on') ;
            }
        
    }
}
