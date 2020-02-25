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
                <p> {{ currentQuestions[currentQuestion]["Option 1"] }} </p>
                <p> {{ currentQuestions[currentQuestion]["Option 2"] }} </p>
                <p> {{ currentQuestions[currentQuestion]["Option 3"] }} </p>
                <p> {{ currentQuestions[currentQuestion]["Option 4"] }} </p>
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
        quizNumber: null,
        quizPin: null,
        currentQuestions: [],
        currentQuestion: 0,
        questions: {}
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
        this.quizs = [];
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
        }
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