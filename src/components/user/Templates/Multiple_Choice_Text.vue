<template >
  <div>
    <div class="infoPage">
      <h1 class="text-dark font-weight-bold my-4" id="result">{{ TeamName }}</h1>
        <div class="card mx-4 bg-dark" id="Info_Box">
          <div class="card-body font-weight-bold text-white">
            <h3>{{ Info }}</h3>
          </div>
        </div>
      <div>
        <button type="submit" class="btn btn-dark btn-lg mt-4" @click= Show_Hide_button>Start</button>
      </div>
    
    </div>

    <div class= "Quiz_box" id="Question_Box" style="display: none;">
                
        <div v-if="!hidden">
            <div>
                <div class="title" ref="questions"> {{ currentQuestions[NumberOfQuestions].Question }} </div>
                <!-- <p v-for="option in currentQuestions[currentQuestion].Options" v-bind:key="option"> {{ option }}</p> -->
                <div @click="answer1()" class= "answer1" id="answer1"> {{ currentQuestions[NumberOfQuestions]["Option1"] }} </div>
                <div @click="answer2()" class= "answer2" id="answer2"> {{ currentQuestions[NumberOfQuestions]["Option2"] }} </div>
                <div @click="answer3()" class= "answer3" id="answer3"> {{ currentQuestions[NumberOfQuestions]["Option3"] }} </div>
                <div @click="answer4()" class= "answer4" id="answer4"> {{ currentQuestions[NumberOfQuestions]["Option4"] }} </div>
            </div>
        </div>

        <div class="timer_text" id="timer"> </div>
        

        <div id="NoAnswer" class="NoAnswer_Text"> </div>
      <div>
        <button class="submit" @click="handleButton"> Submit </button>
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
        countDown: localStorage.getItem('Countdown'), //Gets the varible from the page before and sets it as countDown
        score: 0,
        Team1_Id: this.values,//For posting 
        AnswerId: this.Question_Number,
        
        TeamName: localStorage.teamname,// gets the team name 
        NumberOfQuestions: localStorage.getItem('NumberOfQuestions'),
        Show_Hide_var: localStorage.Show_Hide_var,
        Info: localStorage.Info,

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
      if(this.currentanswer == ' '){  // checking the user has selected an answer
        document.getElementById("NoAnswer").innerHTML = "You didn't pick an answer"
      }
      else{
        localStorage.setItem("Answer"+this.QuizID+this.NumberOfQuestions, this.currentanswer) 
        if(this.currentQuestions[this.NumberOfQuestions]["Answer"] == this.currentanswer){//NEED TO CHANGE 
            this.score ++;  //adds 1 to the score 
            localStorage.setItem('score', this.score)
            
        }
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
          localStorage.setItem('Score'+this.QuizID, localStorage.Score)
          localStorage.setItem("Completed"+this.QuizID, "1")
          this.SendAnswers()
          localStorage.setItem('Question_Number', 0)
          
        }
      }


      localStorage.setItem("Answer"+this.NumberOfQuestions, localStorage.currentanswer),


      document.getElementById("answer1").style.background='white';
      document.getElementById("answer2").style.background='white';
      document.getElementById("answer3").style.background='white';
      document.getElementById("answer4").style.background='white';
    },

    timerDone:function () {
      localStorage.setItem("Answer"+this.QuizID+this.NumberOfQuestions, this.currentanswer) 
      if(this.currentQuestions[this.NumberOfQuestions]["Answer"] == this.currentanswer){//NEED TO CHANGE 
        this.score ++;  //adds 1 to the score 
        localStorage.setItem('score', this.score)     
      }
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
        this.SendAnswers()
        this.$router.push('Quiz_results');
        localStorage.setItem('OnOff',0)
        localStorage.setItem('Score', this.score)
        localStorage.setItem('Score'+this.QuizID, localStorage.Score)
        localStorage.setItem("Completed"+this.QuizID, "1")
        this.SendAnswers()
        localStorage.setItem('Question_Number', 0)
      }

      localStorage.setItem("Answer"+this.NumberOfQuestions, localStorage.currentanswer),


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
      this.Show_Hide()
      document.getElementById("result").innerHTML = localStorage.teamname ;
    }
}     
</script>

<style>

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
.NoAnswer_Text{
  font-size:4vh;
  color: orange;
  position: fixed;
  width:60%;
  right:50%;
  left: 8%;
  bottom: 12%;
}
.wrapper{
  position:fixed;
  margin:0.5%;
  width:99%;
  height:98%;
}
.Scroll {
  position:fixed;
  left: 0%;
  top: 12%;
  height: 70%;
  width: 100%;
  max-width: 700px;
}
.paragraph{
  position: absolute;
  left:23%;
  right:23%;
  top:24%;
  bottom:42%;
  font-size:3.5vh;
}
.buttons_box{
  position:fixed;
  top:2%;
  bottom:2%;
  left:5%;
  right:5%;   
}
.TeamName{
  position:static;
  background-color: rgba(100,97,97, 0.9);
  width:auto;
  text-align: center;
  margin:auto;
  color:white;
  border-style: solid;
  border-width: 4px;
  border-color: white;
  font-size: 3.5vh;
}
.Start_button{
  position:fixed;
  width:70%;
  top:80%;
  left:15%;
  font-size: 4vh;
  color: white;
  background-color: rgba(100,97,97, 0.9);
  border-style: solid;
  border-width: 4px;
  border-color: white;
  font-family: 'Dosis', sans-serif;
}
</style>