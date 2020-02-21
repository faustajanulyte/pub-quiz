<template >
  <div class="quiz">
    <div class= "Quiz_box">
      
      <div class="title" ref="questions">

        <div>{{currentQuestion.question}}</div> 

        <img src="" class="Image_question" id="url" /> 
      
        
      <div class="timer_text" id="timer"> </div>
      
      </div>    

      <div class="buttons_border">
        <div class= "answer11" id="answer1" @click="selected_answer1">
        {{currentQuestion.option1}}
        </div>
        <div class= "answer21" id="answer2" @click="selected_answer2" >
        {{currentQuestion.option2}}
        </div>
        <div class= "answer31" id="answer3" @click="selected_answer3" >
        {{currentQuestion.option3}}
        </div>
        <div class= "answer41" id="answer4" @click="selected_answer4"  >
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

<script>

import axios from 'axios'
export default{
  data(){
    return{
      Team1_Id: this.values,//For posting 
      QuizId: '2',
      AnswerId: this.Question_Number,
      Answer: '',
      TeamAnswer: '',//For posting ^^
      TeamName: localStorage.teamname,
      questions:[],
      currentQuestion:'',
      Question_Number: localStorage.Question_Number,
      score: localStorage.score,
      totalQuestions:null,
      totalAnswers:null,
      currentanswer:'',
      answers:{},
      countDown: localStorage.getItem('Countdown'), //Gets the varible from the page before and sets it as countDown
      startTime: localStorage.getItem('Timer'),
      image_url: '',
      TeamAnswerId: '',
      NumberOfQuestions: null,
      
    }
  },
  methods: {
    timerDone:function() { //defines/starts the variable
      if(this.currentQuestion.answer == this.currentanswer){ // checks that current question is the same as the user's answer
            this.score ++;  //adds 1 to the score 
            localStorage.setItem('score', this.score)//Sets the local variable to the new score variable that has 1 added to it

        }
        if(this.NumberOfQuestions< 9){ // checks that number is less than the total amount of questions
          this.Question_Number ++;// adds 1 to the variable number
          localStorage.setItem('Question_Number', this.Question_Number)
          this.currentQuestion=this.questions[localStorage.Question_Number];// makes the variable currentQuestion equal the variable questions + number    
          localStorage.setItem('Countdown',15); //sets the variable Countdown as 15
          this.countDown += 16 - this.countDown; // the button makes the timer reset back to 15 seconds
          this.currentanswer=''; //Sets the variable current answer as nothing
          localStorage.setItem('currentanswer', 'blank')
          document.getElementById("NoAnswer").innerHTML = "" // Gets rid of the alert on the screen
        }
        if(this.NumberOfQuestions == 9){ // checks that number equals the total amount of questions
          this.$router.push('Quiz_results'); // if it does, pushes the user to the results page
          localStorage.setItem('OnOff',0) // turns off the timer by changing OnOff to 0 
          localStorage.setItem('Score', this.score) // sets the local variable score as the score the user had after the quiz.
          localStorage.setItem('Question_Number', 0) // Sets the Question_number variable to zero
        }
         
      this.image_url = this.currentQuestion.url
      this.pushData()
      document.getElementById('url').setAttribute('src',this.image_url)
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
        this.pushData()
        if(this.NumberOfQuestions< 9){
          this.Question_Number ++;
          localStorage.setItem('Question_Number', this.Question_Number)
          this.currentQuestion=this.questions[localStorage.Question_Number];  
          localStorage.setItem('Countdown',15);
          this.countDown += 16 - this.countDown; // the button makes the timer reset back to 15 seconds
          this.currentanswer=''; 
          document.getElementById("NoAnswer").innerHTML = "" // Gets rid of the alert on the screen
        }
        if(this.NumberOfQuestions == 9){
          this.$router.push('Quiz_results');
          localStorage.setItem('OnOff',0)
          localStorage.setItem('Score', this.score)
           localStorage.setItem('Question_Number', 0)
        }
      }      
      
      this.image_url = this.currentQuestion.url
      this.pushData()
      document.getElementById('url').setAttribute('src',this.image_url)
      document.getElementById("answer1").style.background='white';
      document.getElementById("answer2").style.background='white';
      document.getElementById("answer3").style.background='white';
      document.getElementById("answer4").style.background='white';
    },

    Test:function() {
    if(this.currentQuestion.Quiz == "2"){// checks if the question has the quiz id of 2
        
        this.NumberOfQuestions ++;
    }
    else{
        this.Question_Number ++;
        localStorage.setItem('Question_Number', this.Question_Number)
        this.currentQuestion=this.questions[localStorage.Question_Number];
        this.Test()
    }
    },
    
    selected_answer1:function() {
      document.getElementById("answer1").style.background='lightblue';
      document.getElementById("answer2").style.background='white';
      document.getElementById("answer3").style.background='white';
      document.getElementById("answer4").style.background='white';
      this.currentanswer = this.currentQuestion.option1;
      console.log(this.currentanswer)
    },
    selected_answer3:function() {
      document.getElementById("answer3").style.background='lightblue';
      document.getElementById("answer1").style.background='white';
      document.getElementById("answer2").style.background='white';
      document.getElementById("answer4").style.background='white';
      this.currentanswer = this.currentQuestion.option3;
      console.log(this.currentanswer)
    },
    selected_answer2:function() {
      document.getElementById("answer2").style.background='lightblue';
      document.getElementById("answer1").style.background='white';
      document.getElementById("answer3").style.background='white';
      document.getElementById("answer4").style.background='white'; 
      this.currentanswer = this.currentQuestion.option2;
      console.log(this.currentanswer)
    },
    selected_answer4:function() {
      document.getElementById("answer4").style.background='lightblue'; //sets the option has blue 
      document.getElementById("answer1").style.background='white'; //sets the option has white
      document.getElementById("answer3").style.background='white'; //sets the option has white
      document.getElementById("answer2").style.background='white'; //sets the option has white
      this.currentanswer = this.currentQuestion.option4; // Sets the variable currentanswer as the selected option 
      console.log(this.currentanswer) //displays the chosen answer in the console.
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
      },
      pushData() {
        var values = crypto.getRandomValues(new Uint32Array(1));

        for (var i = 0; i < values.length; i++) {
            console.log(values[i].toString(16));    
        }
        console.log(values.toString(16))
        axios
          .post("https://elur4e042l.execute-api.eu-west-2.amazonaws.com/dev/",//Link to database api post
          {
            AnswerID: values.toString(16),
            Team: localStorage.teamname,
            Quiz: this.QuizId,
            QuestionNumber: this.Question_Number,
            TeamAnswer: localStorage.currentanswer,
            
          })
          
      }        
    },
    mounted(){
      axios
        .get("https://9fkrdvjgji.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.questions=response.data.body;//sets this.questions as the data from the link
          this.currentQuestion=this.questions[this.Question_Number]; //sets this.currentQuestion as this.qustions and whatever this.number equals
          this.totalQuestions=this.questions.length;
          this.image_url = this.currentQuestion.url
          document.getElementById('url').src = this.image_url
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
.buttons_border{
  position: relative;
  margin:3%;
  width: 90%;
  height: 400px;
  top: 10%;
}
.answer11{
  position: fixed;
  white-space: wrap; 
  overflow: hidden;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height: 15%;
  top:43%;
  left:10%;
  color: rgb(48, 49, 54);
  background-color: white;
}
.answer21{
  position: fixed;
  white-space: wrap; 
  overflow: hidden; 
  text-align: center;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height:15%;
  left:60%;
  top:43%;
  color: rgb(48, 49, 54);
  background-color: white;
}
.answer31{
  position: fixed;
  white-space: wrap; 
  overflow: hidden;
  text-align: center;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height: 15%;
  top:61%;
  left:10%;
  color: rgb(48, 49, 54);
  background-color: white;
}
.answer41{
  position: fixed;
  white-space: wrap; 
  overflow: hidden;
  text-align: center;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height: 15%;
  left:60%;
  top:61%;
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
.NoAnswer_Text{
  font-size:4vh;
  color: orange;
  position: fixed;
  width:60%;
  right:50%;
  left: 8%;
  bottom: 12%;
}
.Image_question{
  position:fixed;
  top:20%;
  left:10%;
  height: 20%;
  width:80%;
  
}
</style>