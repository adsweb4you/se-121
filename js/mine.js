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


let User = {
  name:"ზურა`1",
  email:"infozura@site.ge",
  phone:5487897897,
  admin:false,
  add: function() {
    console.log(this);
  }
}

// ობიექტის გაყინვა
Object.freeze(User);

// ობიექტის ფუნქციის გამოძახება
User.add();

// ობიექტის თვისების ჩამატება
User.title = "asdas";

// ობიექტის თვისების მნიშვნელობის რედაქტირება
User.name = "გიო"

// ობიექტის თვისების წაშლა
delete User.admin;

// ობიექტის ყველა თვისება
let key = Object.keys(User)


// ობიექტის ყველა თვისების მნიშვნელობა
let val = Object.values(User)

let all = Object.entries(User)

console.log(all)


let UserName = ["ემზარი", "სახელი", "გვარი", "გიორგი",  "ალექსი",  "გიორგი", "ბორჯომი" ,  "ზებრა"];

//let myage = [15, 7 , 25, 1800, 650, 77,85687];
 
// UserName =  UserName.every((el) => {
//   return el.length > 48
// })
 

let rend  = Math.random() * UserName.length;

let UserNames = UserName[Number(rend.toFixed())];

console.log(UserNames)

// for (let l = 0; l < myage.length; l++) {
//   const el = myage[l];
//   console.log(el);
// }


 

/* ========= მასივები 

UserName.length // ითვლის მასივში ელემენტების რაოდენობას
UserName.unshift("ახალი ელემენტი"); // ახალი ელემენტის ჩამატება მასივის თავში
UserName.push("ახალი ელემენტი"); // ახალი ელემენტის ჩამატება მასივის ბოლოში
UserName.shift(); //   ელემენტის წაშლა მასივის თავში
UserName.pop(); //   ელემენტის წაშლა მასივის ბოლოში
UserName.splice(2,2); //   ელემენტის წაშლა მასივში ინდექსის მიხედვით
UserName.splice(2,2, "შუა ელემენტი", "ასფასდფ"); //   ელემენტის წაშლა მასივში ინდექსის მიხედვით , ახალი ელემენტის 
ჩამატება
 UserName.sort(); // სორტირება A_z
 UserName.sort().reverse() // სორტირება Z_a

 myage = myage.sort( (a,b) =>{
  return a - b; 
} ); რიცხვების სორტირება ზრდადობით

 myage = myage.sort( (a,b) =>{
  return b - a; 
} ); რიცხვების სორტირება კლებადობით

UserName.forEach(el => {
  console.log(el + "test")
}) // ბეჭდავს ყველა ელემენტს , არ ცვლის ორიგინალ მასივს

UserName.map(el => {
  console.log(el + "test")
}) // ბეჭდავს ყველა ელემენტს ,  ქმნის ახალ მასივს

UserName =  UserName.find((el) => {
  return el == "გიორგი"
}) // აბრუნებს პირველივე ელემენტს რომელიც აკმაყოფილებს პირობას

UserName =  UserName.filter((el) => {
  return el.length > 6
}) // აბრუნებს  ყველა ელემენტს რომელიც აკმაყოფილებს პირობას , ქმნის ახალ მასივს

UserName =  UserName.some((el) => {
  return el  == "ემზარიz"
}) // აბრუნებს   boolean, ამოწმებს მასივის 1 წევრი მაინც თუ  აკმაყოფილებს პირობას 

UserName =  UserName.every((el) => {
  return el.length > 48
})  // აბრუნებს   boolean, ამოწმებს მასივის ყველა წევრი თუ  აკმაყოფილებს პირობას 
 
========= */


let Products = [
  // item1
  {
    title:"Apple AirPods 3 White",
    img:"https://img.zoommer.ge/zoommer-images/thumbs/0156556_apple-airpods-3-white_550.jpeg",
    price:699,
    descr:"ბრენდიApple ბლუთუზის ვერსია:V5.0 მუშაობის დრო: 6 hours დაცვა:"
  },

  // item2
  {
    title:"Apple AirPods 78 White",
    img:"https://img.zoommer.ge/zoommer-images/thumbs/0156556_apple-airpods-3-white_550.jpeg",
    price:699,
    descr:"ბრენდიApple ბლუთუზის ვერსია:V5.0 მუშაობის დრო: 6 hours დაცვა:"
  },

  // item3
  {
    title:"Apple AirPods 4 black",
    img:"https://img.zoommer.ge/zoommer-images/thumbs/0156556_apple-airpods-3-white_550.jpeg",
    price:780,
    descr:"ბრენდიApple ბლუთუზის ვერსია:V5.0 მუშაობის დრო: 6 hours დაცვა:"
  },

]

function findsprice(text){
  prod.innerHTML = '';
  prods = Products.filter(els =>{
  return els.price == Number(text);

})
 
myprod(prods);

}



function myprod(product){
  product.forEach(el =>{
  let card  = `
  <div class="col-lg-4">
<div class="card">
  <img src="${el.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${el.title}</h5>
    <p class="card-text">${el.descr}</p>
    <p class="btn btn-danger">${el.price} ₾</p>
  </div>
  </div>
</div>
`

prod.innerHTML += card;

})
}


let Students = [
  {
    name:"სტუდენტი 1",
    img:"img/icon/bir.png",
    age:20,
    reg_at:"2020/07/20",
    prog:"პროგრამირება",
    das:100,
    styp:true,
  },
  {
    name:"სტუდენტი 1",
    img:"img/icon/bir.png",
    age:20,
    reg_at:"2020/07/20",
    prog:"ბიზნესი",
    das:100,
    styp:true,
  },
  {
    name:"სტუდენტი 1",
    img:"img/icon/bir.png",
    age:20,
    reg_at:"2020/07/20",
    prog:"პროგრამირება",
    das:100,
    styp:true,
  },
  {
    name:"გიორგის",
    img:"img/icon/bir.png",
    age:22,
    reg_at:"2020/07/20",
    prog:"პროგრამირება",
    das:85,
    styp:false,
  },
  {
    name:"სტუდენტი 1",
    img:"img/icon/bir.png",
    age:20,
    reg_at:"2020/09/22",
    prog:"პროგრამირება",
    das:65,
    styp:true,
  },
  {
    name:"გიორგის",
    img:"img/icon/bir.png",
    age:20,
    reg_at:"2020/07/20",
    prog:"პროგრამირება",
    das:100,
    styp:false,
  },
  
]


let Ages = Students.filter(st=>{
  return st.age == 22;
})

let findname = Students.find(st=>{
  return st.name == "გიორგის";
})

console.log(findname);

let num = 100;
let numstr = "100";
console.log(num == numstr || num === numstr);
/* -- ლოგიკური/შედარების ოპერატორირები

//  num++; // 1 გაზრდა
//  num--; // 1 დაპატარავება
// num += 5; // ველიუს გაზრდა 
// num -= 5; // ველიუს შემცირება 
// num /= 5; // ველიუს   გაყოფა
// num /= 5; // ველიუს   გამრავლება
= // მინიჭების ოპერატორი
== // შედარების ოპერატორი ადარებს მხოლოდ ველიუს
===  // შედარების ოპერატორი ადარებს   ველიუს და ტიპს
> /მეტობა
< //ნაკლებობა
>=  // მეტია ან ტოლია
>=  // ნაკლებია ან ტოლია
!  // შებრუნების ოპერატორი
&&  // და ოპერატორი
|| // ან ოპერატორი
--*/

let ts = "სად";

if(ts > 0 && ts < 100){
  // ts *= 15;
}else if(ts * 2 != "NaN"){
  console.log('ts ცვლადი არის ნამბერი')
}else if(ts * 2 == "NaN"){
  console.log('ts ცვლადი არის stringi')
}
 
let menu;
let Lang = "KA";


switch (Lang) {
  case "KA":
    menu = "მენიუ"
    break;

    case "EN":
      menu = "MENU"
      break;

      case "RU":
        menu = "RUSSS"
        break;

  default:
    menu = "Undefined";
    break;
}

if (Lang == "KA") {
  menu = "მენიუ"
}else if(Lang == "EN"){
  menu = "MENU"
}else if(Lang == "RU"){
  menu = "RUSSS"
}else{
  menu = "Undefined";
}

let out =  Lang == undefined  ? `CHECK` :  `CHECK`

document.getElementById('shortif').innerHTML = out;

let currd  = new Date();
let d = new Date("2022/02/20");


let years = d.getFullYear(); // გვიბრუნებს წელს
let monts = d.getMonth() + 1; // გვიბრუნებს თვეს
let day  = d.getDate(); // რიცხვი

//d.setHours(22) // საათის მინიჭება

let hour = d.getHours();// საათი
let min = d.getMinutes();// წუთი
let sec = d.getSeconds();// წამი

let n = d.getDay();

let datstr = d.toLocaleDateString(); // გვიბრუნებს წელს თვეს რიცხვს 
let tim = d.toLocaleTimeString(); // გვიბრუნებს საათი წუთი  წამი 

console.log(d.getDay());

setInterval(()=>{

let startD = Date.parse(new Date());
let endtD = Date.parse('2022-1-30');

let diff = endtD - startD; 

let difdey = (diff / 86400000).toFixed();
let ho =     (diff  / 3600000 -  (difdey * 24)).toFixed();  
let mins =   (diff  / 60000  -  (difdey * 24 * 60 ) - ho * 60).toFixed(); 

let secs =   (diff  / 1000   -  (9 * 24 * 60 * 60) - (2 * 60 * 60 ) - ( 5 * 60)); 

document.getElementById('day').innerHTML = difdey + "დღე:";
document.getElementById('hour').innerHTML = ho + "საათი:";
document.getElementById('min').innerHTML = mins + "წუთი:";
document.getElementById('sec').innerHTML = secs + "წამი";

}, 1000)

