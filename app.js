const menu = document.querySelector('.menu');
const res = document.querySelector('.res');
const body = document.querySelector('body');
const img = document.querySelector('.logo')

menu.addEventListener('click',function(){
    res.classList.toggle('d-none')
    
})

window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    if(newWidth > 768){
        console.log('true')
        res.classList.add('d-none')
        
    }  else {
        console.log('no')
        res.classList.add('d-none')
    }
});

