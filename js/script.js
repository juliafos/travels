var form = document.querySelector('form');
var input = document.querySelectorAll('.form-input');

form.addEventListener('submit', function(event){
    for(var i = 0; input.length; i++){
        if(input[i].value == ''){
            event.preventDefault();
            input[i].classList.add('error');
            input[i].placeholder = '*Заполните это поле';
        }
    }
})

for(var i = 0; i < input.length; i++){
    input[i].addEventListener('input', function(){
        this.classList.remove('error');
    })
}
 
var btn = document.querySelector('.btn-top');

window.addEventListener('scroll', function(e){
    console.log(pageYOffset);
    if(pageYOffset > 700){
        btn.style.display = 'block';
    }
    else{
        btn.style.display = 'none';
    }
})

btn.addEventListener('click', toTop);

function toTop(){
    var scrolled = pageYOffset;
    if(scrolled > 0){
        scrolled -= 20;
        scrollTo(0, scrolled);
        setTimeout(toTop, 1);
    } 
}
