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
              <button class=""  type="" @click="Test()">Test</button>        
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
      Username: localStorage.teamname,

      Completed1: localStorage.Completed1,
      Completed2: localStorage.Completed2,
      Completed3: localStorage.Completed3,
      Completed4: localStorage.Completed4,
      QuizID: [],
      x: 0
      
      
    };
  },
  methods: {
    authPIN: function() { //creates the function which activates by the button
        this.x = 0
        axios
        .get("https://ilxze566s8.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.quizs = response.data.body;//sets this.questions as the data from the link
          this.quizs.forEach(quiz => {
          if(quiz.QuizPIN == this.quizPin && quiz.QuizName == this.quizNumber) { 
            this.QuizID = quiz.QuizNumber// The quizes number ID
            console.log(this.QuizID)
            if(this.QuizID === "1"){
              if(localStorage.Completed1 === "1"){
                this.x ++;               
              }
              else{
                console.log("Quiz1 not completed")
              }
            }
            else if (this.QuizID === "2"){
              if(localStorage.Completed2 === "1"){
                this.x ++;                 
              }
              else{
                console.log("Quiz2 not completed")
              }
            }
            else if (this.QuizID === "3"){
              if(localStorage.Completed3 === "1"){
                this.x ++;                 
              }
              else{
                console.log("Quiz3 not completed")
              }
            }
            else if (this.QuizID === "4"){
              if(localStorage.Completed4 === "1"){
                this.x ++;                
              }
              else{
                console.log("Quiz4 not completed")
              }
            }
          if(this.x === 0){
            console.log("Went through")
            this.Quiz_Type = quiz.QuizType // All data sent to the next page
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
          }
          else {
            document.getElementById("login").style.outline = "thick solid Red"; // if none before are triggered then this will trigger and change the outline to red
          }
          })
        })
    },
    Test(){
      console.log(localStorage.Completed1)
    }
  },
  mounted(){
    axios
        .get("https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev/")
        .then(response=>{
          this.users = response.data.body;
          this.users.forEach(user => {
          if(user.Username == this.Username) { 
            let currentQuiz = user;
            for (let question in currentQuiz.Results.Quiz1) {
              this.currentQuestions.push(currentQuiz.Results.Quiz1[question]);

              localStorage.Answer10 = currentQuiz.Results.Quiz1.Answer1
              localStorage.Answer11 = currentQuiz.Results.Quiz1.Answer2
              localStorage.Answer12 = currentQuiz.Results.Quiz1.Answer3
              localStorage.Answer13 = currentQuiz.Results.Quiz1.Answer4
              localStorage.Answer14 = currentQuiz.Results.Quiz1.Answer5
              localStorage.Answer15 = currentQuiz.Results.Quiz1.Answer6
              localStorage.Answer16 = currentQuiz.Results.Quiz1.Answer7
              localStorage.Answer17 = currentQuiz.Results.Quiz1.Answer8
              localStorage.Answer18 = currentQuiz.Results.Quiz1.Answer9
              localStorage.Answer19 = currentQuiz.Results.Quiz1.Answer10 
              localStorage.Score1 =  currentQuiz.Results.Quiz1.Score
              localStorage.Quiz1 =  currentQuiz.Results.Quiz1.QuizID
              localStorage.Completed1 = currentQuiz.Results.Quiz1.Completed
            }    
            
            for (let question in currentQuiz.Results.Quiz2) {
              this.currentQuestions.push(currentQuiz.Results.Quiz2[question]);

              localStorage.Answer20 = currentQuiz.Results.Quiz2.Answer1
              localStorage.Answer21 = currentQuiz.Results.Quiz2.Answer2
              localStorage.Answer22 = currentQuiz.Results.Quiz2.Answer3
              localStorage.Answer23 = currentQuiz.Results.Quiz2.Answer4
              localStorage.Answer24 = currentQuiz.Results.Quiz2.Answer5
              localStorage.Answer25 = currentQuiz.Results.Quiz2.Answer6
              localStorage.Answer26 = currentQuiz.Results.Quiz2.Answer7
              localStorage.Answer27 = currentQuiz.Results.Quiz2.Answer8
              localStorage.Answer28 = currentQuiz.Results.Quiz2.Answer9
              localStorage.Answer29 = currentQuiz.Results.Quiz2.Answer10 
              localStorage.Score2 =  currentQuiz.Results.Quiz2.Score
              localStorage.Quiz2 =  currentQuiz.Results.Quiz2.QuizID
              localStorage.Completed2 = currentQuiz.Results.Quiz2.Completed
            }

            for (let question in currentQuiz.Results.Quiz3) {
              this.currentQuestions.push(currentQuiz.Results.Quiz3[question]);

              localStorage.Answer30 = currentQuiz.Results.Quiz3.Answer1
              localStorage.Answer31 = currentQuiz.Results.Quiz3.Answer2
              localStorage.Answer32 = currentQuiz.Results.Quiz3.Answer3
              localStorage.Answer33 = currentQuiz.Results.Quiz3.Answer4
              localStorage.Answer34 = currentQuiz.Results.Quiz3.Answer5
              localStorage.Answer35 = currentQuiz.Results.Quiz3.Answer6
              localStorage.Answer36 = currentQuiz.Results.Quiz3.Answer7
              localStorage.Answer37 = currentQuiz.Results.Quiz3.Answer8
              localStorage.Answer38 = currentQuiz.Results.Quiz3.Answer9
              localStorage.Answer39 = currentQuiz.Results.Quiz3.Answer10 
              localStorage.Score3 =  currentQuiz.Results.Quiz3.Score
              localStorage.Quiz3 =  currentQuiz.Results.Quiz3.QuizID
              localStorage.Completed3 = currentQuiz.Results.Quiz3.Completed
            }

            for (let question in currentQuiz.Results.Quiz4) {
              this.currentQuestions.push(currentQuiz.Results.Quiz4[question]);

              localStorage.Answer40 = currentQuiz.Results.Quiz4.Answer1
              localStorage.Answer41 = currentQuiz.Results.Quiz4.Answer2
              localStorage.Answer42 = currentQuiz.Results.Quiz4.Answer3
              localStorage.Answer43 = currentQuiz.Results.Quiz4.Answer4
              localStorage.Answer44 = currentQuiz.Results.Quiz4.Answer5
              localStorage.Answer45 = currentQuiz.Results.Quiz4.Answer6
              localStorage.Answer46 = currentQuiz.Results.Quiz4.Answer7
              localStorage.Answer47 = currentQuiz.Results.Quiz4.Answer8
              localStorage.Answer48 = currentQuiz.Results.Quiz4.Answer9
              localStorage.Answer49 = currentQuiz.Results.Quiz4.Answer10 
              localStorage.Score4 =  currentQuiz.Results.Quiz4.Score
              localStorage.Quiz4 =  currentQuiz.Results.Quiz4.QuizID
              localStorage.Completed4 = currentQuiz.Results.Quiz4.Completed
            }            
          }
          })
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