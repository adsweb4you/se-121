let myname, age, title, midname, phone, email;

myname = "ჩემი სახელი";
age = 25;
title = "სათაური";
phone = 5522545;
email =  "info@site.ge";

/* ------- data type ----------*/

let str =   "ჩემი პირველი სტრინგი"; // string
let numb = 25; // number
let obj = {title:"აღწერა"}; //object
let arr = [1,"2", "ewsr3r", 2]; // array
let tr = true; // boolean
let fl = false; // boolean
let fn = function(){} // function
let und = undefined; // undefined
let nan = NaN; // NaN
let Null = null; // null

 
  

document.getElementById("output").innerHTML = "<h1>" + myname + "</h1>";
 

let year = 6;
let month = " 6 "
let mystr = `მე ვსწავლობ it Step აკადემიაში   პროგრამირებას  ${month * 6}  ვსწავლობ  პროგრამირებას    განმავლობაში`;


 

console.log(mystr);

/* -- sting method 

mystr.length // ითვლის სიმბოლოების რაოდენობას სტრინგის შიგნით (ასევე სიცარილეეებსაც)
mystr.search("ვსწავლობ") // ეძებს სტრინგის შიგნით სიმბოლოებს
mystr.slice(30, 45) // ჭრის სტრინგს  გადაცემული პარამეტრის მიხედვით
mystr.replaceAll("პროგრამირებას", "ფრონტ-ენდ პროგრამირებას") // ანაცვლებს სიმბოლოებს 
mystr.match(/პროგრამირებას/gi) // ეძებს გადაცემული პარამეტრის მიხედვით სიმბოლოს ან ტექსტსს და ქმნის მის მასივს
mystr.toUpperCase() // ადიდებს სტრინგში არსებულ ყველა სიმბოლოს
mystr.toLowerCase()// აპატარავებს სტრინგში არსებულ ყველა სიმბოლოს  
mystr.startsWith("995") // ამოწმებს იწყება თუ არა სტრინგი რაიმე სიმბოლოთი
mystr.endsWith("ი") mystr.startsWith("995") // ამოწმებს მთავრდება თუ არა სტრინგი რაიმე სიმბოლოთი
mystr.split("@") // ჭრის სტრინგს და გადაყავს მასივში
 mystr.trim() // ჭრის სიცარიელეებს სტრინგის მარცხენა და მარჩვენა მხარეს
 mystr.concat(month) // სტრინგის გაერთიანება
-- end -- */

function findText(userinput){
    let Text = mytext.innerText;

    let finded = Text.replaceAll(userinput, "<span class='higl'>"+userinput+"</span>");
    var rgxp = new RegExp(userinput, "gi");
    let leng =  Text.match(rgxp);
    if(leng != null){
        match.innerText = `მოიძებნა ${leng.length} სიტყვა!`;
    }else{
         match.innerText = `სიტყვა ვერ მოიძებნა!`;
    }
   
    mytext.innerHTML = finded;

}


let img = "img/slider.png";
let titles = "პროდუქტის აღწერა";
let descr = "პროდუქტის სრული აღწერა";
let card  = `
<div class="card">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${titles}</h5>
    <p class="card-text">${descr}</p>
    <a href="#" class="btn btn-primary">სრულად ნახვა</a>
  </div>
</div>
`

mycards.innerHTML = card;


let int1 = 25;
let int2 = "25";
let sumint = int1 + Number(int2);
//int1 = Math.floor(int1)
//int1 = Math.round(int1)

console.log(sumint);

// ფუნქციის შექმნა
function info(msg) {
 document.getElementById('elem').innerHTML +=  msg + "<br>";
}

//გამოძახება
 info('ჩემი პირველი ფუნქცია');


function printinfo(x, y, ...params){
 

  let zz = x * y;

  console.log(params);

  // call
  info('ჩემი მეორე ფუნქცია');

}

printinfo(58,25, 45, 897, "asdas");


function calc(){
  return 0;
}

calc();

console.log(calc())

let arrs = (param1, param2) => {
  return console.log(param1);
}



arrs('arrow', 'asd');