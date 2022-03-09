window.onload = function(){   
    
    const rightButton = document.querySelector('.right') ;
    const leftButton = document.querySelector('.left') ;

    const headText = document.querySelector('.heading') ;

    const container = document.querySelector('.bag') ;

    const message = document.querySelector('.message') ;



    console.log(message) ;

    rightButton.addEventListener('click'  , function() {
        console.log('clicked') ;

        console.log(rightButton.classList.contains('signin')) ;

        if(rightButton.classList.contains('signin')) {

            container.classList.add('right-panel-active') ;

            rightButton.textContent = 'Sign Up' ;

            leftButton.textContent = 'Sign In' ;
            leftButton.classList.remove('signup') ;
            leftButton.classList.add('signin') ;

            headText.textContent = 'Sign In' ;

            message.textContent = "By being a part of our family be close to your loved once even at far" ;


            rightButton.classList.remove('signin') ;
            rightButton.classList.add('signup') ;


        }else if(rightButton.classList.contains('signup')) {

            container.classList.remove('right-panel-active') ;

            rightButton.textContent = 'Log In' ;

            leftButton.textContent = 'Sign Up' ;
            leftButton.classList.remove('signin') ;
            leftButton.classList.add('signup') ;

            message.textContent = "Check up on your loved one,See how they are doing"

            headText.textContent = 'Sign Up' ;


            rightButton.classList.remove('signup') ;
            rightButton.classList.add('signin') ;
        }
    })


    //  const container = document.querySelector(".bag") ;
    //     console.log(document.querySelector(".bag")) ;

    //     let heading = document.querySelector('.head') ;

    //     console.log(heading.textContent) ;
    //     const singInButton = document.getElementsByClassName("signin") ;
    //     const signUpButton = document.querySelector('.signup') ;
        
    //     console.log(singInButton)


    //     const message = document.querySelector('.message') ;

    //     console.log(message)


    //  singInButton[0].addEventListener('click' , function() {


    //     container.classList.add("right-panel-active") ;
        


    //     // signUpButton.classList.remove("signup") ;
    //     // signUpButton.classList.add('signin')
    //     // heading.textContent = 'Sign In' ;
    //     // signUpButton.textContent = 'Log In'
    //     // message.textContent = '' ;
    //     // singInButton.textContent = 'Sign Up' ;
    //     // singInButton[0].classList.remove('signin') ;
    //     // singInButton[0].classList.add('signup') ;
    // }) ;

    // signUpButton.addEventListener('click' , function() {
    //     console.log('this is sign up')
    //     container.classList.remove("right-panel-active") ;
        
    // }) ;


        // singInButton.addEventListener("click" , function() {
        //     console.log('clicked') ;
        // })
}