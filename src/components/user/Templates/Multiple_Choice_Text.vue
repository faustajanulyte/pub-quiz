<template >
  <div class="quiz">
    <div class= "Quiz_box">
      
      

      <div class="title" ref="questions">
      <div>{{currentQuestion.question}}</div>
      
      <div class="timer_text" id="timer"> </div>
      
      </div>

      <div class="score"> {{score}} </div>

      <div class="buttons_border">
        <div class= "answer1" id="answer1" @click="selected_answer1">
        {{currentQuestion.option1}}
        </div>
        <div class= "answer2" id="answer2" @click="selected_answer2" >
        {{currentQuestion.option2}}
        </div>
        <div class= "answer3" id="answer3" @click="selected_answer3" >
        {{currentQuestion.option3}}
        </div>
        <div class= "answer4" id="answer4" @click="selected_answer4"  >
        {{currentQuestion.option4}}
        </div>
      </div> 
      
      <div id="NoAnswer" class="NoAnswer_Text"> </div>

      <div> 

        <button class="submit" @click="handleButton"> Submit </button>

      </div>
    </div>
 </div>
  
</template>

<script >
var answer1=0
var answer2=0
var answer3=0
var answer4=0
import axios from 'axios'
export default{
  data(){
    return{
      questions:[],
      currentQuestion:{},
      Question_Number: localStorage.Question_Number,
      score: localStorage.score,
      totalQuestions:null,
      totalAnswers:null,
      currentanswer:'',
      answers:{},
      countDown: localStorage.getItem('Countdown'), //Gets the varible from the page before and sets it as countDown
      startTime: localStorage.getItem('Timer'),
    }
  },
  methods: {
    timerDone:function() { //defines/starts the variable
      if(this.currentQuestion.answer == this.currentanswer){ // checks that current question is the same as the user's answer
            this.score ++;  //adds 1 to the score 
            localStorage.setItem('score', this.score)//Sets the local variable to the new score variable that has 1 added to it
        }
        if(this.Question_Number<this.totalQuestions){ // checks that number is less than the total amount of questions
          this.Question_Number ++;// adds 1 to the variable number
          localStorage.setItem('Question_Number', this.Question_Number)
          this.currentQuestion=this.questions[localStorage.Question_Number];// makes the variable currentQuestion equal the variable questions + number  
          localStorage.setItem('Countdown',15); //sets the variable Countdown as 15
          this.countDown += 16 - this.countDown; // the button makes the timer reset back to 15 seconds
          this.currentanswer=''; //Sets the variable current answer as nothing
          document.getElementById("NoAnswer").innerHTML = "" // Gets rid of the alert on the screen
        }
        if(this.Question_Number == this.totalQuestions){ // checks that number equals the total amount of questions 
          this.$router.push('Results'); // if it does, pushes the user to the results page
          localStorage.setItem('OnOff',0) // turns off the timer by changing OnOff to 0 
          localStorage.setItem('Score', this.score) // sets the local variable score as the score the user had after the quiz.
          localStorage.setItem('Question_Number', 0) // Sets the Question_number variable to zero
        }
            
      document.getElementById("answer1").style.background='white'; 
      document.getElementById("answer2").style.background='white';
      document.getElementById("answer3").style.background='white';
      document.getElementById("answer4").style.background='white'; // Sets the options back to white. ^
      
    },
    handleButton:function () {
      if(this.currentanswer == ''){  
        document.getElementById("NoAnswer").innerHTML = "You didn't pick an answer"
      }
      else{
        if(this.currentQuestion.answer == this.currentanswer){
            this.score ++;  //adds 1 to the score 
            localStorage.setItem('score', this.score)
        }
        if(this.Question_Number<this.totalQuestions){
          this.Question_Number ++;
          localStorage.setItem('Question_Number', this.Question_Number)
          this.currentQuestion=this.questions[localStorage.Question_Number];  
          localStorage.setItem('Countdown',15);
          this.countDown += 16 - this.countDown; // the button makes the timer reset back to 15 seconds
          this.currentanswer=''; 
          document.getElementById("NoAnswer").innerHTML = ""
        }
        if(this.Question_Number == this.totalQuestions){
          this.$router.push('Results');
          localStorage.setItem('OnOff',0)
          localStorage.setItem('Score', this.score)
          localStorage.setItem('Question_Number', 0)
        }
      }      
      document.getElementById("answer1").style.background='white';
      document.getElementById("answer2").style.background='white';
      document.getElementById("answer3").style.background='white';
      document.getElementById("answer4").style.background='white';
    
    },
    
    selected_answer1:function() {
      if (answer2 > 0) {
        answer2=0;
        answer3=0;
        answer4=0;
        ++answer1;
        document.getElementById("answer1").style.background='lightblue';
        document.getElementById("answer2").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option1;
        console.log(this.currentanswer)
        
      }
      else if (answer3 > 0){
        answer2=0;
        answer3=0;
        answer4=0;
        ++answer1;
        document.getElementById("answer1").style.background='lightblue';
        document.getElementById("answer2").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option1;
        console.log(this.currentanswer)
      }
      else if (answer4 > 0){
        answer2=0;
        answer3=0;
        answer4=0;
        ++answer1;
        document.getElementById("answer1").style.background='lightblue';
        document.getElementById("answer2").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option1;
        console.log(this.currentanswer)
      }  
      else{
        ++answer1;
        answer2=0;
        answer3=0;
        answer4=0;
        document.getElementById("answer1").style.background='lightblue';
        document.getElementById("answer2").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option1;
        console.log(this.currentanswer)
        console.log(answer1)
      }
    },
    selected_answer3:function() {
      if (answer1 > 0) {
        answer1=0;
        answer2=0;
        answer4=0;
        ++answer3;
        document.getElementById("answer3").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer2").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option3;
        console.log(this.currentanswer)
      }
      else if (answer2 > 0){
        answer1=0;
        answer2=0;
        answer4=0;
        ++answer3;
        document.getElementById("answer3").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer2").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option3;
        console.log(this.currentanswer)
      }
      else if (answer4 > 0){
        answer1=0;
        answer2=0;
        answer4=0;
        ++answer3;
        document.getElementById("answer3").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer2").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option3;
        console.log(this.currentanswer)
      }  
      else{
        ++answer3;
        answer1=0;
        answer2=0;
        answer4=0;
        document.getElementById("answer3").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer2").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option3;
        console.log(this.currentanswer)
        console.log(answer3)
      }
    },
    selected_answer2:function() {
      if (answer1 > 0) {
        answer1=0;
        answer3=0;
        answer4=0;
        ++answer2;
        document.getElementById("answer2").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option2;
        console.log(this.currentanswer)
      }
      else if (answer3 > 0){
        answer1=0;
        answer3=0;
        answer4=0;
        ++answer2;
        document.getElementById("answer2").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option2;
        console.log(this.currentanswer)
      }
      else if (answer4 > 0){
        answer1=0;
        answer3=0;
        answer4=0;
        ++answer2;
        document.getElementById("answer2").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option2;
        console.log(this.currentanswer)
      }  
      else{
        ++answer2;
        answer1=0;
        answer3=0;
        answer4=0;
        document.getElementById("answer2").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer4").style.background='white';
        this.currentanswer = this.currentQuestion.option2;
        console.log(this.currentanswer)
        console.log(answer2)
      }
    },
    selected_answer4:function() {
      if (answer1 > 0) {
        answer1=0;
        answer3=0;
        answer2=0;
        ++answer4;
        document.getElementById("answer4").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer2").style.background='white';
        this.currentanswer = this.currentQuestion.option4;
        console.log(this.currentanswer)
        
      }
      else if (answer3 > 0){
        answer1=0;
        answer3=0;
        answer2=0;
        ++answer4;
        document.getElementById("answer4").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer2").style.background='white';
        this.currentanswer = this.currentQuestion.option4;
        console.log(this.currentanswer)
      }
      else if (answer2 > 0){
        answer1=0;
        answer3=0;
        answer2=0;
        ++answer4;
        document.getElementById("answer4").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer2").style.background='white';
        this.currentanswer = this.currentQuestion.option4;
        console.log(this.currentanswer)
      }  
      else{
        ++answer4;
        answer1=0;
        answer3=0;
        answer2=0;
        document.getElementById("answer4").style.background='lightblue';
        document.getElementById("answer1").style.background='white';
        document.getElementById("answer3").style.background='white';
        document.getElementById("answer2").style.background='white';
        this.currentanswer = this.currentQuestion.option4;
        console.log(this.currentanswer)
        console.log(answer4)
      }
    },
   
  //This is all for the timer
    countDownTimer() {
      if(localStorage.getItem('OnOff') == 1){
        if(localStorage.getItem('Countdown') > 0) {
          setTimeout(() => {
            this.countDown -= 1
            localStorage.setItem('Countdown',this.countDown)
            this.countDownTimer()
            document.getElementById("timer").innerHTML = localStorage.Countdown ;
          }, 1000)
        }
        else if(localStorage.getItem('Countdown') == 0){
          localStorage.setItem('Countdown',15)
          this.countDownTimer()
          this.timerDone() 
          
          }
        }
      }         
    },
    mounted(){
      axios
        .get("https://12gzle39q6.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.questions=response.data.body;//sets this.questions as the data from the link
          this.currentQuestion=this.questions[localStorage.Question_Number]; //sets this.currentQuestion as this.qustions and whatever this.number equals
          this.totalQuestions=this.questions.length;
      })
      this.countDownTimer() //initializes the countdown function 
      
      
    },
};
</script>

<style>
 
.quiz {
  position: fixed;
  background-image: url('~@/assets/images/treasurehunt.gif');
  width: 100%;
  height: 100%;
  background-size: 100%;
}
.Quiz_box{
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  top:2%;
  left:4%;
  width: 93%;
  height: 90vh;
  border-style: solid;
  border-width: 4px;
  border-color: white;
}
.title{
  position:relative;
  font-size:7vw;
  text-align: left; 
  width: 75%;
  color:white;  
  left:5%;
  top:0%;
  word-wrap: break-word; /** makes the text wrap inside the div */
}
.timer_text{
  font-size:8vw;
  color:rgba(250, 152, 71, 0.9);
  position: fixed;
  left: 80%;
  text-align: center;
  top:5%;
  width:13%;
  padding-left: 2%;
  padding-right:2%;
  border-style: solid;
  border-width: 4px;
  border-color: white;
}
.NoAnswer_Text{
  font-size:4vh;
  color: orange;
  position: fixed;
  width:60%;
  right:50%;
  left: 8%;
  bottom: 12%;
}
.buttons_border{
  position: relative;
  margin:3%;
  width: 90%;
  height: 400px;
  top: 10%;
  
}
.answer1{
  position: fixed;
  white-space: wrap; 
  overflow: hidden;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height: 15%;
  top:30%;
  left:10%;
  color: rgb(48, 49, 54);
  background-color: white;
}
.answer2{
  position: fixed;
  white-space: wrap; 
  overflow: hidden; 
  text-align: center;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height:15%;
  left:60%;
  top:30%;
  color: rgb(48, 49, 54);
  background-color: white;
  
}
.answer3{
  position: fixed;
  white-space: wrap; 
  overflow: hidden;
  text-align: center;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height: 15%;
  top:55%;
  left:10%;
  color: rgb(48, 49, 54);
  background-color: white;
  
}
.answer4{
  position: fixed;
  white-space: wrap; 
  overflow: hidden;
  text-align: center;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height: 15%;
  left:60%;
  top:55%;
  color: rgb(48, 49, 54);
  background-color: white;
  
}
.submit{
  position:fixed;
  bottom:12%;
  right:10%;
  font-size: 5vw;
  padding-left:1vw;
  padding-right:1vw;
}
.timer{
  position:relative;
  text-align:right;
  font-size: 40px;
  color:white;
  padding-left: 80%;
}
.score{
  font-size:4vh;
  color:white;
}
</style>