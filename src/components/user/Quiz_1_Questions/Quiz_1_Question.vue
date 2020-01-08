
<template>
  <div class="quiz">
    <div class= "Quiz_box">
      
      

      <div class="title" id="question_text">
        Question:
      </div>

      <body onload= "startTimer(10)">
        <div class="timer"> <span id="time">00:10</span> seconds!</div>
      </body>

      <div class="buttons_border">
        <div class= "answer1"  >
        Answers
        </div>
        <div class= "answer2" >
        Answers
        </div>
        <div class= "answer3" >
        Answers
        </div>
        <div class= "answer4" >
        Answers
        </div>
      </div>
    </div>
 </div>
  
</template>

<script>

/*function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

 

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        var display = document.querySelector('#time');
        display.textContent = minutes + ":" + seconds;

 

        if (--timer < 0) {
            timer = duration;
            clearInterval(setInterval);
        }
    }, 1000);
    
}
*/
/*var User_question = "1",

import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      question: "",
      answer: "",
      nummber: "",
      quiz: "",
      Team1_answer: "",
    };
  },
  methods: {
    getQuestion: function() { //creates the function which activates by the button
      console.log(this.question); 
      axios
        .get(
          "https://12gzle39q6.execute-api.eu-west-2.amazonaws.com/dev", //gets the data from the amazon database
          {
            quiz: this.quiz, 
            number: this.number, 
            question: this.question,
            answer: this.answer,
            Team1_answer: this.Team1_answer
          }
        )
        .then(response => {
          if(this.quiz=="1") { 
            if (this.number == User_question){ 
              question_text == question
            }
            else if (this.number == User_question){ 
              question_text == question
            }
          } else {
            alert("Failed to sign in!"); // if wrong sends an alert
          }
          console.log(this.valid)
        });
    }
  }
};
*/

/*function startCountdowns(seconds){
  var counter = seconds;
  

  var interval = setInterval(() => {
    console.log(counter);

    counter--;
    

    if(counter < 0 ){
      // The code here will run when
      // the timer has reached zero.
      clearInterval(interval);
      console.log('Ding!');
      startCountdowns(9.5);
      alert("Works");
      return;
    }
    }, 1000);
}
startCountdowns(9.5);

TIMER TO PUT IN TEMPLATE

<vac :left-time="10000" :auto-start="true" >
        <countdown :end-time="new Date().getTime() + 10000" class="timer">
          <span 
          slot="process"
          slot-scope="anyYouWantedScopName">{{ `Lefttime: ${anyYouWantedScopName.timeObj.ceil.s}` }}</span>
          <span slot="finish" >Done!</span>
        </countdown>
      </vac>

*/
</script>

<style scoped>

.quiz {
  background-image: url('~@/assets/images/treasurehunt.gif');
  width: 100%;
  height: 938px;
  background-size: 100%;
}

.Quiz_box{
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  margin:3%;
  width: 93%;
  height: 800px;
  border-style: solid;
  border-width: 4px;
  border-color: white;
}

.title{
  position:relative;
  font-size:60px;
  text-align: left; 
  width: 75%;
  color:white;  
  padding-left:30px;
  top:5%;
  word-wrap: break-word; /** makes the text wrap inside the div */
}

.buttons_border{
  position: relative;
  margin:5%;
  width: 90%;
  height: 400px;
  top: 10%;
  border-style: solid;
  border-width: 4px;
  border-color: white;
}

.answer1{
  position: relative;
  font-size:40px;
  width:30%;
  top:15%;
  left:10%;
  background-color: white;
  
}
.answer2{
  position: relative;
  font-size:40px;
  width:30%;
  left:60%;
  top:-0.5%;
  background-color: white;
  
}
.answer3{
  position: relative;
  font-size:40px;
  width:30%;
  top:35%;
  left:10%;
  background-color: white;
  
}
.answer4{
  position: relative;
  font-size:40px;
  width:30%;
  left:60%;
  top:19%;
  background-color: white;
  
}
.timer{
  position:relative;
  text-align:right;
  font-size: 40px;
  color:white;
  padding-left: 80%;

}

</style>