<template >
  <div class="quiz">
    <div class="wrapper" id="Info_Box" style="display: block;">
      <div>
        <img src="@/assets/images/Scroll.png" alt="paper" class="Scroll" > 
        <div class="paragraph">
          {{Info}}
        </div>  

      </div>

      <div class= "buttons_box"> 
        <div class= "TeamName" id="result">
          {{TeamName}}
        </div>

        <div>

        <button type="submit" class="Start_button" @click= Show_Hide_button>Start</button>
        
        </div>
      </div>
    </div>


    <div class= "Quiz_box" id="Question_Box" style="display: none;">
      
      <div class="title1" ref="questions">

        <div class="title" ref="questions"> {{ currentQuestions[NumberOfQuestions]["Question"] }} </div>
      
      
      <div class="timer_text" id="timer"> </div>
      
      </div>    

      <div class="buttons_border">
        <input
          v-model="currentanswer"
          type="text"
          id="currentAnswer"
          class="Input_Answer"
          placeholder=" "
        />
        <br />
      </div> 
      
      <div id="NoAnswer" class="NoAnswer_Text"> </div>
      <div>
        <button class="submit1" @click="handleButton"> Submit </button>
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
        currentanswer: ' ',
        URL: [] ,

        countDown: localStorage.getItem('Countdown'), //Gets the varible from the page before and sets it as countDown
        score: localStorage.Score,
        Team1_Id: this.values,//For posting 
        QuizId: localStorage.getItem('QuizID'),
        AnswerId: this.Question_Number,

        TeamAnswer: '',//For posting ^^
        TeamName: localStorage.teamname,// gets the team name 
        NumberOfQuestions: localStorage.getItem('NumberOfQuestions'),        
        Image_Time: localStorage.Image_Time,
        Info: localStorage.Info,
        locked: localStorage.getItem("quizNumber")
    }
  },
  methods:{
    handleButton:function () {
      localStorage.setItem('currentanswer',this.currentanswer)

      if(this.currentanswer == ' '){  // checking the user has selected an answer
        document.getElementById("NoAnswer").innerHTML = "You didn't pick an answer"
      }
      else{
        if(this.currentQuestions[this.NumberOfQuestions]["Answer"] == this.currentanswer){
            this.score ++;  //adds 1 to the score 
            localStorage.setItem('score', this.score)
        }
        this.pushData()
        if(this.NumberOfQuestions< 10){
          this.NumberOfQuestions ++;
          localStorage.setItem('Question_Number', this.NumberOfQuestions)
          localStorage.setItem('NumberOfQuestions', this.NumberOfQuestions)
          
          localStorage.setItem('Countdown',15);
          this.countDown += 16 - this.countDown; // the button makes the timer reset back to 15 seconds
          this.currentanswer=' '; 
          localStorage.setItem('currentanswer', 'blank')
          document.getElementById("NoAnswer").innerHTML = "" // Gets rid of the alert on the screen
        }
        if(this.NumberOfQuestions == 10){
          this.$router.push('Quiz_results');
          localStorage.setItem('OnOff',0)
          localStorage.setItem('Score', this.score)
          localStorage.setItem('Question_Number', 0)
        }
      }
    },

    timerDone:function () {
      if(this.currentQuestions[this.NumberOfQuestions]["Answer"] == this.currentanswer){
        this.score ++;  //adds 1 to the score 
        localStorage.setItem('score', this.score)     
      }
      this.pushData()
      if(this.NumberOfQuestions< 10){
        this.NumberOfQuestions ++;
        localStorage.setItem('Question_Number', this.NumberOfQuestions)
        localStorage.setItem('NumberOfQuestions', this.NumberOfQuestions)
         
        localStorage.setItem('Countdown',15);
        this.countDown += 16 - this.countDown; // the button makes the timer reset back to 15 seconds
        this.currentanswer=' '; 
        localStorage.setItem('currentanswer', 'blank')
        document.getElementById("NoAnswer").innerHTML = "" // Gets rid of the alert on the screen
      }
      if(this.NumberOfQuestions == 10){
        this.$router.push('Quiz_results');
        localStorage.setItem('OnOff',0)
        localStorage.setItem('Score', this.score)
        localStorage.setItem('Question_Number', 0)
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
        else if(localStorage.getItem('Countdown') < 1){
          localStorage.setItem('Countdown',15)
          this.countDownTimer()
          this.timerDone() 
        }
      }
    },

      Show_Hide_button(){ // Function that activates from button to show questions
        document.getElementById("Question_Box").style.display = 'block';
        document.getElementById("Info_Box").style.display = 'none';
        localStorage.setItem('OnOff',1)
        localStorage.setItem('Countdown',16)
        this.Hide_Show_Button()
        this.countDownTimer()

        localStorage.setItem("Locked" + this.locked, "1")
      },

      Show_Hide(){
        if(localStorage.Show_Hide_var == 1){ // Function that starts from mounted so still works when page is refreshed
          document.getElementById("Question_Box").style.display = 'block';
          document.getElementById("Info_Box").style.display = 'none';
          localStorage.setItem('OnOff',1)
        }
      },

      Hide_Show_Button(){// Function activates from button and allows it to work if page is refreshed
        localStorage.setItem("Show_Hide_var", 1)
      },

    pushData() {
      var values = crypto.getRandomValues(new Uint32Array(1));
      for (var i = 0; i < values.length; i++) {
        console.log(values[i].toString(16));    
      }
      axios
        .post("https://elur4e042l.execute-api.eu-west-2.amazonaws.com/dev/",
        {
          AnswerID: values.toString(16),
          Team: localStorage.teamname,
          Quiz: this.QuizID,
          QuestionNumber: this.NumberOfQuestions,
          TeamAnswer: localStorage.currentanswer,
          correctAnswer: this.currentQuestions[this.NumberOfQuestions]["Answer"]
        })
      }  
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
      this.Show_Hide()
      document.getElementById("result").innerHTML = localStorage.teamname ;
    }
}     
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
.title1{
  position:relative;
  font-size:9vw;
  text-align: left; 
  width: 75%;
  color:white;  
  left:5%;
  top:5%;
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
.submit1{
  position:fixed;
  bottom:27%;
  right:10%;
  font-size: 8vw;
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
  font-size:5vh;
  color: orange;
  position: fixed;
  width:80%;
  right:10%;
  left: 10%;
  bottom: 10%;
}
.Image_question{
  position:fixed;
  top:20%;
  left:10%;
  height: 20%;
  width:80%;
}
.test{
  position:fixed;
  top: 60%;
}
.Input_Answer{
  position:fixed;
  top: 40%;
  left: 15%;
  width:70%;
  height: 15%;
  font-size:4vh;
  text-align: center;
}
</style>