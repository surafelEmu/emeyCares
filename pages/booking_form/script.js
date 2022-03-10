


window.onclick = function(event) {
    if(event.target.matches('.dropbtn')) {
        document.getElementById("myDropdown").classList.toggle("show"); 
    }else {
        var dropdowns = document.getElementsByClassName("dropdown-content") ;

        for(let i = 0 ; i < dropdowns.length ; i++) {
            var openDropdown = dropdowns[i] ;
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show') ;
            }
        }
    }
}