<template >
  <div>
    <div class="infoPage" id="Info_Box">
      <h1 class="text-dark font-weight-bold my-4" id="result">{{ TeamName }}</h1>
        <div class="card mx-4 bg-dark">
          <div class="card-body font-weight-bold text-white">
            <h3>{{ Info }}</h3>
          </div>
        </div>
      <div>
        <button type="submit" class="btn btn-dark btn-lg mt-4" @click= Show_Hide_button>Start</button>
      </div>
    </div>
    <div class="Multiple_Choice_Image" v-if="!hidden">
      <div class="container bg-dark pb-3 col-10 my-4" id="Question_Box" style="display: none;">
        <h3 class="text-white font-weight-bold pt-4" ref="questions">{{ currentQuestions[NumberOfQuestions]["Question"] }}</h3>
          <div class="text-dark font-weight-bold h1 bg-light rounded-circle my-4 col-md- circle">
            <a class="py-1 px-3" id="timer"></a>
          </div>
          <div class="col-12">
            <img src= "" class="Image_question img-fluid mb-4 " id="URL"/>
          </div>
          <div class="btn-group-vertical col-12">
              <button @click="answer1()" class="answer11 font-weight-bold btn btn-lg btn-light text-dark my-4 rounded" id="answer1">{{ currentQuestions[NumberOfQuestions]["Option1"] }}</button>
              <button @click="answer2()" class="answer21 font-weight-bold btn btn-lg btn-light text-dark rounded" id="answer2">{{ currentQuestions[NumberOfQuestions]["Option2"] }}</button>
            </div>
            <div class="btn-group-vertical col-12 mb-4">
              <button @click="answer3()" class="answer31 font-weight-bold btn btn-lg btn-light text-dark my-4 rounded" id="answer3">{{ currentQuestions[NumberOfQuestions]["Option3"] }}</button>
              <button @click="answer4()" class="answer41 font-weight-bold btn btn-lg btn-light text-dark rounded" id="answer4">{{ currentQuestions[NumberOfQuestions]["Option4"] }}</button>
            </div>
              <div id="NoAnswer" class="NoAnswer_Text text-danger mb-4"> </div>
              <div class="col-15">
                <button type="submit" class="submit btn font-weight-bold btn-light btn-md mb-4" @click="handleButton">Submit</button>
              </div>
            </div>
        </div>
    </div>
</template>

<script >
import axios from 'axios'

export default{
  data(){
    return{
        quizs: [],
        hidden: true,
        quizNumber: localStorage.quizNumber,
        quizPIN: localStorage.quizPin,
        currentQuestions: [],
        questions: {},
        currentanswer: null,
        URL: [] ,

        countDown: localStorage.getItem('Countdown'), //Gets the varible from the page before and sets it as countDown
        score: 0, // Sets the score to 0 from the previous page
        
        TeamName: localStorage.teamname,// gets the team name 
        NumberOfQuestions: localStorage.getItem('NumberOfQuestions'), //Starts the questions from 0      
        Info: localStorage.Info,//Gets the quiz info for the users at the start of the quiz 

        Username: localStorage.teamname, //Gets team name for posting
        Password: localStorage.Password, // Gets password for posting
        Admin: localStorage.Admin,  //Gets admin true or fasle for posting
        QuizID:localStorage.QuizID,  //Gets QuizID for posting 

        Score1: [],
        Score2: [],
        Score3: [],
        Score4: [],
    }
  },
  methods:{
    handleButton:function () {
      if(this.currentanswer == null){  // checking the user has selected an answer
        document.getElementById("NoAnswer").innerHTML = "You didn't pick an answer"
      }
      else{
        localStorage.setItem("Answer"+this.QuizID+this.NumberOfQuestions, this.currentanswer)//Sets the user answer as the localvaraible using the question number and ID to then send to the DB
        if(this.currentQuestions[this.NumberOfQuestions]["Answer"] == this.currentanswer){
            console.log(this.score)
            this.score ++;  //adds 1 to the score 
            localStorage.setItem('score', this.score)
                        
        }
        if(this.NumberOfQuestions< 10){//Checks if this variable is less than more than 10 
          this.NumberOfQuestions ++; // Adds +1 to the varible to get the next question to appear
          localStorage.setItem('Question_Number', this.NumberOfQuestions) //Sets the local varaible: Question_Number as NumberOfQuestions
          localStorage.setItem('NumberOfQuestions', this.NumberOfQuestions) //Sets the local varaible: NumberOfQuestions as NumberOfQuestions
          this.Image_Test_Button() //Activates the function to get the next image to appear.
          
          localStorage.setItem('Countdown',20); // Resets the countdown
          this.countDown += 21 - this.countDown; // the button makes the timer reset back to 15 seconds
          this.currentanswer = null; 
          localStorage.setItem('currentanswer', 'blank')
          document.getElementById("NoAnswer").innerHTML = "" // Gets rid of the alert on the screen
        }
        if(this.NumberOfQuestions == 10){
          this.$router.push('Quiz_results');
          localStorage.setItem('OnOff',0)
          localStorage.setItem('Score', this.score)
          localStorage.setItem('Score'+this.QuizID, localStorage.Score)
          localStorage.setItem("Completed"+this.QuizID, "1")
          this.SendAnswers()
          localStorage.setItem('Question_Number', 0)
        }
      }
      document.getElementById("answer1").style.background='white';
      document.getElementById("answer2").style.background='white';
      document.getElementById("answer3").style.background='white';
      document.getElementById("answer4").style.background='white';
    },

    timerDone:function () {
      localStorage.setItem("Answer"+this.QuizID+this.NumberOfQuestions, this.currentanswer) 
      if(this.currentQuestions[this.NumberOfQuestions]["Answer"] == this.currentanswer){
        this.score ++;  //adds 1 to the score 
        localStorage.setItem('score', this.score)     
      }
      if(this.NumberOfQuestions< 10){
        this.NumberOfQuestions ++;
        localStorage.setItem('Question_Number', this.NumberOfQuestions)
        localStorage.setItem('NumberOfQuestions', this.NumberOfQuestions)
        this.Image_Test_Button()
         
        localStorage.setItem('Countdown',20);
        this.countDown += 21 - this.countDown; // the button makes the timer reset back to 15 seconds
        this.currentanswer=null; 
        localStorage.setItem('currentanswer', 'blank')
        document.getElementById("NoAnswer").innerHTML = "" // Gets rid of the alert on the screen
      }
      if(this.NumberOfQuestions == 10){
        this.$router.push('Quiz_results');
        localStorage.setItem('OnOff',0)
        localStorage.setItem('Score', this.score)
        localStorage.setItem('Score'+this.QuizID, localStorage.Score)
        localStorage.setItem("Completed"+this.QuizID, "1")
        this.SendAnswers()
        localStorage.setItem('Question_Number', 0)
      }
      document.getElementById("answer1").style.background='white';
      document.getElementById("answer2").style.background='white';
      document.getElementById("answer3").style.background='white';
      document.getElementById("answer4").style.background='white';
    },

    SendAnswers(){ // Sends the answers from this quiz to the DB
          localStorage.setItem("Quiz"+this.QuizID, this.QuizID)
          axios.put("https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev/",//Link to database api post
          {
            Username: this.Username,
            Password: this.Password,
            Admin: this.Admin,
            Results:{
              Quiz1:{
                QuizID: localStorage.Quiz1, 
                Answer1: localStorage.Answer10,
                Answer2: localStorage.Answer11, 
                Answer3: localStorage.Answer12,
                Answer4: localStorage.Answer13,
                Answer5: localStorage.Answer14,
                Answer6: localStorage.Answer15,
                Answer7: localStorage.Answer16,
                Answer8: localStorage.Answer17,
                Answer9: localStorage.Answer18,
                Answer10: localStorage.Answer19,
                Score: parseInt(localStorage.Score1),
                Completed: localStorage.Completed1
              },
              Quiz2:{
                QuizID: localStorage.Quiz2, 
                Answer1: localStorage.Answer20,
                Answer2: localStorage.Answer21, 
                Answer3: localStorage.Answer22,
                Answer4: localStorage.Answer23,
                Answer5: localStorage.Answer24,
                Answer6: localStorage.Answer25,
                Answer7: localStorage.Answer26,
                Answer8: localStorage.Answer27,
                Answer9: localStorage.Answer28,
                Answer10: localStorage.Answer29, 
                Score: parseInt(localStorage.Score2), 
                Completed: localStorage.Completed2         
              },
              Quiz3:{
                QuizID: localStorage.Quiz3, 
                Answer1: localStorage.Answer30,
                Answer2: localStorage.Answer31, 
                Answer3: localStorage.Answer32,
                Answer4: localStorage.Answer33,
                Answer5: localStorage.Answer34,
                Answer6: localStorage.Answer35,
                Answer7: localStorage.Answer36,
                Answer8: localStorage.Answer37,
                Answer9: localStorage.Answer38,
                Answer10: localStorage.Answer39, 
                Score: parseInt(localStorage.Score3),
                Completed: localStorage.Completed3           
              },
              Quiz4:{
                QuizID: localStorage.Quiz4, 
                Answer1: localStorage.Answer40,
                Answer2: localStorage.Answer41, 
                Answer3: localStorage.Answer42,
                Answer4: localStorage.Answer43,
                Answer5: localStorage.Answer44,
                Answer6: localStorage.Answer45,
                Answer7: localStorage.Answer46,
                Answer8: localStorage.Answer47,
                Answer9: localStorage.Answer48,
                Answer10: localStorage.Answer49, 
                Score: parseInt(localStorage.Score4),
                Completed: localStorage.Completed4          
              }
            },              
          },
        )},

    //This is all for the timer
    countDownTimer() {
      if(localStorage.getItem('OnOff') == 1){
        if(localStorage.getItem('Countdown') > 0) {
          setTimeout(() => {
            this.countDown -= 1
            localStorage.setItem('Countdown',this.countDown)
            this.countDownTimer()
            document.getElementById("timer").innerHTML = localStorage.Countdown ;
          }, 1000) //Delays the function by 1 second 
        }
        else if(localStorage.getItem('Countdown') < 1){ // checks to see if the countdown is less than 1
          localStorage.setItem('Countdown',20) //sets the local variable 'Countdown' to 15
          this.countDownTimer() // Starts the timer again
          this.timerDone() //starts the timer done function
        }
      }
    },

    Show_Hide_button(){ // Function that activates from button to show questions
        document.getElementById("Question_Box").style.display = 'block';
        document.getElementById("Info_Box").style.display = 'none';
        localStorage.setItem('OnOff',1)
        localStorage.setItem('Countdown',21)
        localStorage.setItem("Show_Hide_var", 1)

        this.countDownTimer()
        this.Image_Test_Button()
    },

    Show_Hide(){
      setTimeout(() => { // starts the function but with a delay
        if(localStorage.Show_Hide_var == 1){ // Function that starts from mounted so still works when page is refreshed
          document.getElementById("Question_Box").style.display = 'block';
          document.getElementById("Info_Box").style.display = 'none';
          localStorage.setItem('OnOff',1)
          this.Image_Test()
        }
      },600)  
    },


    Image_Test(){
      setTimeout(() => { // starts the function but with a delay
        this.URL = this.currentQuestions[this.NumberOfQuestions]["URL"] // Sets the variable 'URL' 
        document.getElementById('URL').src = this.URL // Changes the image div to the URL from the database
      },500)  
    },

    Image_Test_Button(){
      setTimeout(() => { // starts the function but with a delay
        this.URL = this.currentQuestions[this.NumberOfQuestions]["URL"] // Sets the variable 'URL' 
        document.getElementById('URL').src = this.URL // Changes the image div to the URL from the database
      })  
    },


    answer1:function() {
      document.getElementById("answer1").style.background='lightblue'; //sets the option has blue 
      document.getElementById("answer4").style.background='white'; //sets the option has white
      document.getElementById("answer3").style.background='white'; //sets the option has white
      document.getElementById("answer2").style.background='white'; //sets the option has white
      localStorage.setItem('currentanswer',this.currentQuestions[this.NumberOfQuestions]["Option1"])
      this.currentanswer = this.currentQuestions[this.NumberOfQuestions]["Option1"]; // Sets the variable currentanswer as the selected option 
      console.log(this.currentanswer) //displays the chosen answer in the console.
    },
     answer2:function() {
      document.getElementById("answer2").style.background='lightblue'; //sets the option has blue 
      document.getElementById("answer1").style.background='white'; //sets the option has white
      document.getElementById("answer3").style.background='white'; //sets the option has white
      document.getElementById("answer4").style.background='white'; //sets the option has white
      localStorage.setItem('currentanswer',this.currentQuestions[this.NumberOfQuestions]["Option2"])
      this.currentanswer = this.currentQuestions[this.NumberOfQuestions]["Option2"]; // Sets the variable currentanswer as the selected option 
      console.log(this.currentanswer) //displays the chosen answer in the console.
    },
    answer3:function() {
      document.getElementById("answer3").style.background='lightblue'; //sets the option has blue 
      document.getElementById("answer1").style.background='white'; //sets the option has white
      document.getElementById("answer4").style.background='white'; //sets the option has white
      document.getElementById("answer2").style.background='white'; //sets the option has white
      localStorage.setItem('currentanswer',this.currentQuestions[this.NumberOfQuestions]["Option3"])
      this.currentanswer = this.currentQuestions[this.NumberOfQuestions]["Option3"]; // Sets the variable currentanswer as the selected option 
      console.log(this.currentanswer) //displays the chosen answer in the console.
    },
    answer4:function() {
      document.getElementById("answer4").style.background='lightblue'; //sets the option has blue 
      document.getElementById("answer1").style.background='white'; //sets the option has white
      document.getElementById("answer3").style.background='white'; //sets the option has white
      document.getElementById("answer2").style.background='white'; //sets the option has white
      localStorage.setItem('currentanswer',this.currentQuestions[this.NumberOfQuestions]["Option4"])
      this.currentanswer = this.currentQuestions[this.NumberOfQuestions]["Option4"]; // Sets the variable currentanswer as the selected option 
      console.log(this.currentanswer) //displays the chosen answer in the console.
    },

    },
    mounted(){
      axios
        .get("https://ilxze566s8.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.quizs = response.data.body;//sets this.questions as the data from the link
          this.quizs.forEach(quiz => {
            if(quiz.QuizPIN == this.quizPIN && quiz.QuizName == this.quizNumber) {
              console.log("correct pin")
                let currentQuiz = quiz;
                for (let question in currentQuiz.Questions) {
                    this.currentQuestions.push(currentQuiz.Questions[question]);
                }
                console.log( this.currentQuestions[this.NumberOfQuestions]);
                this.hidden = false;
            }
        })
      })
      
      this.countDownTimer() //initializes the countdown function 
      this.Image_Test()
      this.Show_Hide()
      document.getElementById("result").innerHTML = localStorage.teamname ;
    }
}     
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/questionmark.svg');
  background-size: 50%;
  margin: 0px;
}
.circle {
  height: 80px;
  width: 80px;
  display: table;
  margin: 20px auto;
}
.circle a {
  vertical-align: middle;
  display: table-cell;
}
</style>
