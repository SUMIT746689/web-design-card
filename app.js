//movement animation to happend 
const card = document.querySelector('.card');
const container = document.querySelector('.container')

//items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.description');
const sizes = document.querySelector('.sizes');

//moving animation event
card.addEventListener("mousemove",function(e){
    let xAxis = window.innerWidth;
    let xAxis2 = (window.innerWidth/2-e.pageX)/10;
    let yAxis = window.innerHeight;
    let yAxis2 = (window.innerHeight/2-e.pageY)/10;

    console.log(xAxis,xAxis2 , yAxis , yAxis2 );

    card.style.transform = `rotateY(${xAxis2}deg) rotateX(${yAxis2}deg)`;
});

//animated in
card.addEventListener('mouseenter',()=>{
    card.style.transition='none';
    //popout
    sneaker.style.transform = 'translateZ(110px) rotateZ(25deg)';
    title.style.transform = 'translateZ(100px)';
    description.style.transform = 'translateZ(50px)';
    sizes.style.transform = 'translateZ(70px)';
    purchase.style.transform = 'translateZ(100px)';
})

//animate out
card.addEventListener('mouseleave',function(){
    card.style.transition = 'all 0.5s ease' ;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    title.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';

});