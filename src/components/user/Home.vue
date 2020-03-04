<template>
  <div class="home">
    <div class="holder">
      <div>
        <img src="@/assets/images/paper.png" alt="paper" class="welcome"> 
          <p class="message">Ahoy me hearties, welcome to the all new Treasure Hunt Quiz Hub!
          Grab yourselves some beverages, take a pew and have a go at the quizzes.
          One quiz per pub and to launch them you will need to have found the Password as indicated in the clues sheet. There are 10 points on offer here,
          so good luck.
          </p>
      </div>

      <div class="pin-overlay" >
          <div class="pin-wrapper" id="login">
            <form class="form-access" >
              <h2 class="pin_heading">Please enter the Quiz Name</h2>
                <input
                  class="pin_input"
                  v-model="quizNumber"
                  type="text"
                  id="inputPIN"
                  placeholder="Please select a quiz"
                  required
                />
              <br/>
              
              <h2 class="pin_heading">Please enter the Quiz Pin</h2>
                <input
                  v-model="quizPin"
                  type="text"
                  id="inputquizname"
                  class="pin_input"
                  placeholder="Please enter the Quiz Pin"
                  required
                />
              <br />
              <button class="pin_button"  type="submit" @click="authPIN()">Submit</button>            
            </form>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      quizNumber: "",
      quizPin: "",
      valid: "",
      Type: "",

      currentQuestions: [],
      NumberOfQuestions: 0,
      Quiz_Type: "",

      countDown: 16,
      Question_Number: 0,
      score: 0,
      
    };
  },
  methods: {
    authPIN: function() { //creates the function which activates by the button
      console.log(this.quizNumber); 
      
        axios
        .get("https://ilxze566s8.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.quizs = response.data.body;//sets this.questions as the data from the link
          this.quizs.forEach(quiz => {
          if(quiz.QuizPIN == this.quizPin && quiz.QuizName == this.quizNumber) { 
            
            this.Quiz_Type = quiz.QuizType // All data sent to the next page
            this.QuizID = quiz.QuizNumber// The quizes number ID
            this.Info = quiz.QuizInfo
            this.$router.push(this.Quiz_Type);    
            localStorage.setItem("quizPin", this.quizPin)  
            localStorage.setItem("quizNumber", this.quizNumber) 
            localStorage.setItem("QuizID", this.QuizID) 
            localStorage.setItem("Info", this.Info) 

            localStorage.setItem('Countdown', this.countDown)
            localStorage.setItem('Question_Number', this.Question_Number)
            localStorage.setItem('score', this.score)
            localStorage.setItem('NumberOfQuestions', this.NumberOfQuestions)     
                          
          }
          else {
            document.getElementById("login").style.outline = "thick solid Red"; // if none before are triggered then this will trigger and change the outline to red
          }
          })
        })
    }
  },
  mounted(){
    axios
        .get("https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev/")
        .then(response=>{
          this.users = response.data.body;
          console.log(this.users[1].Results.Quiz1.Done)
        })
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');

.holder{
  position:fixed;
  margin:1%;
  width: 98%;
  height: 97%;
}
.welcome {
  position: fixed;
  width: 90%;
  height: 60%;
  max-width:6000px;
  max-height: 1000px;
  left:5%;
}
.message {
    position: fixed;
    color: black;
    left:20%;
    right:15%;
    top:8%;
    font-size: 2.7vh;   
}
.pin_input {
  position:fixed;  
  height: 5%;
  width: 50%;
  left:25%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 2vh;;
}
.pin_button{  
  position: fixed;
  margin-top: 3vh;
  margin-left: -20%;
  height: 5%;
  width: 40%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0%;
  font-size: 2vh;;
}
.pin-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
}
.form-access{
  height: 90%;
}
.pin-wrapper {
  position: fixed;
  background-color: rgba(150, 150, 150, 0.8);
  width: 70%;
  height: 30%;
  left:15%;
  bottom:8%;

}
.pin_heading{
  margin-top:7%;
  font-size:5vw;;
  color:white;
}
body {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/questionmark.svg');
  background-size: 50%;
  margin: 0px;
}
</style>