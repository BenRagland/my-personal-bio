const menuBar = document.querySelectorAll('.header-bar h3')



for ( let i = 0 ; i < menuBar.length ; i++){
    menuBar[i].addEventListener('mouseover',function(e){
        menuBar[i].style.color = "#E26310" 
        
    })
}