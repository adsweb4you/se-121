let byid = document.getElementById('firstp'); // ეძებს id მიხედვით
let byclass = document.getElementsByClassName('myp'); // ეძებს ელემენტს მისი class მიხედვით 
let baytag = document.getElementsByTagName('p'); // ეძებს ელემენტს ტეგის მიხედვით 

let byquer  = document.querySelector('#firstp');// ეძებს css სელექტორის მიხედვით
let byquerall  = document.querySelectorAll('.myp');// ეძებს css სელექტორის მიხედვით (array)

// for (let i = 0; i < baytag.length; i++) {
//     const element = baytag[i];
//     element.innerHTML = "<span> ახალი მნიშვნელობა </span>";
// }

byquerall.forEach(el=>{
    el.addEventListener("click", function(){
        if (el.innerText == "კონტენტი") {
            this.innerHTML =  "ძველი ახალი  მნიშვნელობა"
        }else{
            this.innerHTML =  "კონტენტი"
        }
        
    })
})


// byquer.addEventListener("click",  function(){
//     this.innerHTML =  "ძველი ახალი  მნიშვნელობა"
// })

 

//byid.innerText = "<span> ახალი მნიშვნელობა </span>";

let plus = document.querySelector('.inrc');
let minus = document.querySelector('.decr');
let outp =  document.querySelector('.out');
let counter  = document.querySelector('.counter');
plus.addEventListener('click', function () {
      outp.innerText++; 
    if (outp.innerText > 0) {
      counter.classList.add('mycolor', 'class-2'); // კლასის მინიჭება
    }
  
 })

 minus.addEventListener('click', function () { 
    outp.innerText--;
    if (outp.innerText < 0) {
        counter.classList.remove('mycolor'); // კლასის წაშლა
      }
 })

 document.querySelector('.reset').addEventListener('click', function () {
    outp.innerText = 0
    console.log(counter.classList.contains('mycolor')) // ამოწმებს კლასს
    counter.classList.replace('mycolor', 'changedColor');  // კლასის ჩანაცვლება
   // counter.classList.toggle('nytog');   // კლასის წაშლა/მინიჭება
   
   });


let btn = document.querySelector('.btn-style');
let img =  document.querySelector('.partners');

btn.onclick = function(){
    // img.style.padding = "50px";
    // img.style.backgroundColor = "red";
    // img.style.borderRadius = "25px";
    // img.style.transition = "all .5s";

    css(img, {
        padding : "50px",
        backgroundColor:  "red",
        borderRadius:  "25px",
        transition:  "all .5s",
    })

}
 

function css(selector, style){
    for (const key in style) {
        let props =  key;
        let styles = style[key];     
        selector.style[props] = styles;
    }

}

let form = document.querySelector('.tests');
let input = document.querySelector('[name=title]');
form.addEventListener('submit', function(e){
    e.preventDefault();
    // input.getAttribute('name') აბრუნებს ატრიბუტის ველიუს
    // input.name აბრუნებს ატრიბუტის ველიუს (შემოკლებული)
   //  input.setAttribute('type', 'password') ატრიბუტის მინიჭება/განახლება
   //  input.type = 'password'; ატრიბუტის მინიჭება/განახლება (შემოკლებული)
   //   input.removeAttribute('required') ატრიბუტის წაშლა
   // input.toggleAttribute('name')  ატრიბუტის ჩანაცვლება
    console.log(input.name) 
  

})