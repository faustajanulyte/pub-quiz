<template>
  <div class="home">
    <div class="card">
      <div class="card-body font-weight-bold text-white">
        <h3>Ahoy me hearties, 
          <br>Welcome to the all new Treasure Hunt Quiz Hub!
          Grab yourselves some beverages, take a pew and have a go at the quizzes.
          One quiz per pub and to launch them you will need to have found the Password as indicated in the clues sheet. There are 10 points on offer here. 
          <br>Good luck!</h3>
      </div>
    </div>
    <div class="pin-overlay">
      <div class="pin-wrapper col-8 bg-dark">
        <form class="form-login">
          <h4 class="form-pin-heading py-3">Please enter the Quiz Name</h4>
          <div class="input-group" id="quiz">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Quiz name</span>
            </div>
          <input
            v-model="quizNumber"
            type="text"
            class="form-control"
            required
          />
          </div>
          <br>
          <div class="input-group" id="pin">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Quiz PIN</span>
            </div>
          <input
            v-model="quizPin"
            type="text"
            class="form-control"
            required
          />
          </div>
          <div>   </div>
          <div id="Invalid" class="NoAnswer_Text text-danger mt-4 mb-2"> </div>
        </form>
      </div>
      <div class="btn-group">
        <button type="submit" class="btn btn-dark btn-md my-4 rounded mr-4" @click="authPIN()">Submit</button>
      <form @click="$router.push('/')">
        <button id="back" type="submit" class="btn btn-dark btn-md my-4">Log out</button>
      </form>
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
            localStorage.setItem('OnOff',0)

            localStorage.setItem('Countdown', this.countDown)
            localStorage.setItem('Question_Number', this.Question_Number)
            localStorage.setItem('score', this.score)
            localStorage.setItem('NumberOfQuestions', this.NumberOfQuestions)     
            localStorage.setItem("Show_Hide_var", 0)
          }
          }
          else {
            if(this.x == 1){
              document.getElementById("Invalid").innerHTML = "Already completed" 
            }
            else{
              document.getElementById("Invalid").innerHTML = "Invalid Quiz name or Quiz PIN" 
            }
            //document.getElementById("Invalid").innerHTML = "The values were invalid"
            document.getElementById("quiz").style.outline = "thick solid Red"; // if none before are triggered then this will trigger and change the outline to red
            document.getElementById("pin").style.outline = "thick solid Red";
          }
          })
        })
    },
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
body {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/questionmark.svg');
  background-size: 50%;
  margin: 0px;
}
.pin-wrapper {
  background-color: rgba(0, 0, 0, 0.65);
  margin-top: 10%;
  margin-left: 17%;
  border-radius: 25px
}
.form-login {
  height: auto;
  padding: 10px;
  margin: 0 auto;
}
.form-pin-heading {
  color: white;
}
.card {
  margin-top: 10%;
  background-color: rgba(43, 41, 41, 0.8);
  margin-right: 10%;
  margin-left: 10%;
}
</style>