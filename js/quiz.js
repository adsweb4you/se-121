let Quizs = [
    {
        ques:"შენი აზრით, რა უნდა გააკეთოს მთავრობამ, რომ არჩევნებში ბევრმა ადამიანმა მიიღოს მონაწილეობა?",
        answ1:"კონკრეტული მაგალითებით მოსახლეობას აჩვენოს, რომ არჩევნებში თითოეულ ხმას გადამწყვეტი მნიშვნელობა შეიძლება ჰქონდეს",
        answ2:"ამომრჩეველთა მობილიზება ე.წ. ძველ ბიჭებს უნდა დაავალოს და საარჩევნო უბნებთან კოორდინატორები სიებით დააყენოს",
        answ3:"დააშინოს და მოისყიდოს მოქალაქეები, რომ მივიდნენ არჩევნებზე და მას მისცენ ხმა",
        answ4:"მაშინ, როცა ეს ერის მამას მოუნდება",
        corrans:"answ3",
    },

    {
        ques:"შენი აზრით, რა უნდა გააკეთოს მთავრობამ, რომ არჩევნებში ბევრმა ადამიანმა მიიღოს მონაწილეობა?",
        answ1:"კონკრეტული მაგალითებით მოსახლეობას აჩვენოს, რომ არჩევნებში თითოეულ ხმას გადამწყვეტი მნიშვნელობა შეიძლება ჰქონდეს",
        answ2:"ამომრჩეველთა მობილიზება ე.წ. ძველ ბიჭებს უნდა დაავალოს და საარჩევნო უბნებთან კოორდინატორები სიებით დააყენოს",
        answ3:"დააშინოს და მოისყიდოს მოქალაქეები, რომ მივიდნენ არჩევნებზე და მას მისცენ ხმა",
        answ4:"მაშინ, როცა ეს ერის მამას მოუნდება",
        corrans:"answ1",
    }
]

let quescount = Quizs.length;
 

Quizs.forEach((quest, index) =>{
 
    let Tests = `
    <div class="col-lg-12 p-5 bg-light">
    ${quest.ques}
    </div>
    <div class="form-check col-lg-6 p-5 ">
  <input class="form-check-input" type="radio" name="ans${index}" data-id="${index}" data-ans="answ1" id="rad${index}answ1">
  <label class="form-check-label" for="rad${index}answ1">
  ${quest.answ1}
  </label>
</div>
<div class="form-check col-lg-6 p-5  mb-3">
  <input class="form-check-input" type="radio" name="ans${index}" data-id="${index}" data-ans="answ2" id="rad${index}answ2"  >
  <label class="form-check-label" for="rad${index}answ2">
  ${quest.answ2}
  </label>
</div>
<div class="form-check col-lg-6 p-5 ">
  <input class="form-check-input" type="radio" name="ans${index}" data-id="${index}" data-ans="answ3" id="rad${index}answ3"  >
  <label class="form-check-label" for="rad${index}answ3">
  ${quest.answ3}
  </label>
</div>

<div class="form-check col-lg-6 p-5 ">
  <input class="form-check-input" type="radio" name="ans${index}" data-id="${index}" data-ans="answ4" id="rad${index}answ4"  >
  <label class="form-check-label" for="rad${index}answ4">
  ${quest.answ4}
  </label>
</div>
<div class="col-lg-12  ">
 <hr>
</div>
    `

    app.innerHTML += Tests;


//    let checbox = document.querySelectorAll('.form-check-input');
   
//    checbox.forEach(inp =>{
//     inp.addEventListener("click", function(){
//         let answer = this.getAttribute('data-ans');
//         let ques = this.getAttribute('data-id');
    
      
//     })
//    })

})

let corrans = 0;

function sub(e){
    e.preventDefault();
    let checbox = document.querySelectorAll('.form-check-input:checked');

    for (let i = 0; i < checbox.length; i++) {
        const answer = checbox[i].getAttribute('data-ans');
        const queiz = Quizs[i];
       if(answer == queiz.corrans){
        corrans++;
       }
        
    }

    msg.innerHTML = `თქვენ სწორად უპასუხეთ <span class="text-success">  ${corrans} </span> კითხვას ${quescount} კითხვიდან` 
 
    myform.classList.add('disabled')

}