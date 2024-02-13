const menuBar = document.querySelectorAll('.header-bar h3')
const NotableProjects = document.querySelectorAll('#notable-projects h2')


for ( let i = 0 ; i < menuBar.length ; i++){
    menuBar[i].addEventListener('mouseover',function(e){
        menuBar[i].style.color = "#E26310" 
        
    })
}
for ( let i = 0 ; i < NotableProjects.length ; i++){
    NotableProjects[i].addEventListener('mouseover',function(e){
        NotableProjects[i].style.color = "#E26310" 
        
    })
}