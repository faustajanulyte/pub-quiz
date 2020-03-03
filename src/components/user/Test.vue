<template >
  <div class="">
    <div class= "">
        
        <div>
             {{ currentQuestions[NumberOfQuestions]["Question"] }}
        </div>

        <div>
            ------------
        </div>

        <div>
             {{ currentQuestions[NumberOfQuestions]["Answer"] }}
        </div>


        <div class="buttons_border">
        <input
          v-model="currentanswer"
          type="text"
          id="currentAnswer"
          class="Input_Answer1"
          placeholder=""
        />
        <br />
        <button type= "submit" @click="CheckAnswer()"> Check </button>

        <div id="Check">
        
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
        teams: [],

        x: "4",
        y: "4",
        
        w: null,
        z: null,
        Test: localStorage.setItem("Test", 12),

        quizPIN: "2222",
        quizNumber: "TextQuiz1",
        NumberOfQuestions: "1",
        currentanswer: [],
        currentQuestions: [],
        
        

    }
  },
  methods:{
    GetData: function(){
        console.log(localStorage.Test + 1)
        console.log("----------------")
        console.log( parseInt(localStorage.Test) + 1);
    },
    Reset: function(){
        this.teams = [];
        },
    getTotalScore: function(teamname) {
        let totalScore = 0;
        this.teams.forEach(team => {            
            if(team.Username === teamname) {
                if(typeof team.Results !== 'undefined') {
                    for (let quiz in team.Results) {
                        totalScore =  totalScore + team.Results[quiz].Score;
                    }
                }
            }
        });
        return totalScore;
    },
    CheckAnswer(){
        if(this.currentanswer == this.currentQuestions[this.NumberOfQuestions]["Answer"]){
            document.getElementById("Check").innerHTML = 'Correct';
        }
        else{
            document.getElementById("Check").innerHTML = 'False';
        }
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

</style>