var readlineSync = require("readline-sync");
var score = 0 ;

var userName = readlineSync.question("what's your name ? ");
console.log("welcome " + userName + " Are Ready for a quiz on crypto? ");


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(" you are right ");
    score = score + 1 ;
  }
  else {
    console.log(" you are wrong ");
  }
  console.log ("score is " + score );
  console.log ("-------");
  
}


var questions = 
  [ 
    
  {question: "What is cryptocurrency? " ,
  answer: "digitalcurrency" }  , 
    
   {question: " Which cryptocurrency was the most expensive at the end of 2017? " ,
  answer: "bitcoin" }  , 

      {question: "What technology is the cryptocurrency based on? " ,
  answer: "blockchain" }  , 
    
   {question: "Where do you store your cryptocurrency? " ,
  answer: "wallet" }  , 

      {question: "Who created Bitcoin? " ,
  answer: "satoshinakamoto" }  , 
    
   {question: "In what year does the term cryptocurrency first begin to be used? " ,
  answer: "2009" }  , 

      {question: "What is blockchain? " ,
  answer: "chainofblocks" }  , 
    
   {question: "What is the production of cryptocurrency called? " ,
  answer: "mining" }  , 

      {question: "can a user alter data on blockchain? " ,
  answer: "false" }  , 
    
   {question: "What does P2P stand for? " ,
  answer: "peertopeer" }  , 
    
    
    ];

   for (var i = 0; i<questions.length; i++ ){
     var currentquestion = questions[i];
     play (currentquestion.question ,
     currentquestion.answer)
   }

console.log ("yeh you scored: " + score );
    
  




