<template >
  <div class="">
    <div class= "">
        
        <div>
        </div>

        <div>
            
        </div>

        <div>
            ------------
        </div>
        
        <div v-if="!hidden">
            <div>
                <h1> {{ currentQuestions[currentQuestion].Question }} </h1>
                <!-- <p v-for="option in currentQuestions[currentQuestion].Options" v-bind:key="option"> {{ option }}</p> -->
                <div @click="answer1()" id="option1"> {{ currentQuestions[currentQuestion]["Option 1"] }} </div>
                <div @click="answer2()" id="option2"> {{ currentQuestions[currentQuestion]["Option 2"] }} </div>
                <div @click="answer3()" id="option3"> {{ currentQuestions[currentQuestion]["Option 3"] }} </div>
                <div @click="answer4()" id="option4"> {{ currentQuestions[currentQuestion]["Option 4"] }} </div>
                <div @click="answer4()" id="option4"> {{ currentQuestions[currentQuestion]["Answer"] }} </div>
            </div>
            <button type="submit" @click="nextQuestion()">Next Question</button>
        </div>

        <form class="form-login">
          <h2 class="form-login-heading">Please sign in</h2>
          <input
            v-model="quizNumber"
            type="text"
            id="quizNumber"
            placeholder="Quiz Number"
            required
          />
          <br>
          <input
            v-model="quizPin"
            type="text"
            id="pin"
            placeholder="Quiz Pin"
            required
          />
          <br />
          <button type="submit" @click="getQuizQuestions()">Get Quiz</button>
        </form>

        <button type= "submit" @click="GetData()"> Get Data </button>
        <button type= "submit" @click="Reset()"> Reset </button>
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
        quizNumber: "Test1",
        quizPin: "1234",
        currentQuestions: [],
        currentQuestion: 0,
        questions: {},
        currentanswer: '',
    }
  },
  methods:{
    GetData: function(){
        axios
        .get("https://0m5zyuzwnf.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.quizs = response.data.body;//sets this.questions as the data from the link
      })},
    Reset: function(){
        console.log(this.currentQuestions[this.currentQuestion]["Option 1"])
    }, 
    getQuizQuestions: function() {
        this.quizs.forEach(quiz => {
            if(quiz.QuizPIN == this.quizPin && quiz.Quiz == this.quizNumber) {
                let currentQuiz = quiz;
                for (let question in currentQuiz.Questions) {
                    this.currentQuestions.push(currentQuiz.Questions[question]);
                }
                console.log( this.currentQuestions[this.currentQuestion]);
                this.hidden = false;
            }
        });
    },
    nextQuestion: function() {
        this.currentQuestion++;
    },
    

    answer1:function() {
      console.log("OK")
    },
     answer2:function() {
      this.currentanswer = this.currentQuestions[this.currentQuestion]["Option 2"];
      console.log(this.currentanswer)
    },
    answer3:function() {
      this.currentanswer = this.currentQuestions[this.currentQuestion]["Option 3"];
      console.log(this.currentanswer)
    },
    answer4:function() {
      this.currentanswer = this.currentQuestions[this.currentQuestion]["Option 4"]; // Sets the variable currentanswer as the selected option 
      console.log(this.currentanswer) //displays the chosen answer in the console.
    },
    },  
    mounted(){
      this.GetData()
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