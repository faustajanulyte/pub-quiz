<template>
  <div class="quiz">
    <div class="quiz_questions" ref="questions">
      <button class="btn btn-primary form-control loadmorebutton" @click="handleButton">Next question</button>
      <h1>{{currentQuestion.question}}</h1>
    </div>
    <div>
      <b-form-group >
        <b-form-radio-group
          id="btn-radios-2"
          v-model="selected"
          :options="options"
          buttons
          button-variant="outline-primary"
          size="lg"
          name="radio-btn-outline"
        ></b-form-radio-group>
      </b-form-group>
    </div>
  </div>

</template> 



<script>
import axios from 'axios'

export default{
  data(){
    return{
      questions:[],
      currentQuestion:{},
      number:0,
      totalQuestions:null
    }
  },
  methods: {
    handleButton:function () {
      if(this.number<this.totalQuestions){
        this.number=this.number+1;
        this.currentQuestion=this.questions[this.number];
      }
    }
  }, 
    mounted(){
      axios
        .get("https://12gzle39q6.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.questions=response.data.body;
          this.currentQuestion=this.questions[this.number];
          this.totalQuestions=this.questions.length;
      })
    }
};
</script> 

<style>


</style>