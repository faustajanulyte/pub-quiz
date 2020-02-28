<template >
  <div class="">
    <div class= "">
        
      <button @click="this.GetData"> Post </button>
        
        <div>
          -----------------------------------------
        </div>

        <div>
          <input
            v-model="Input"
            type="text"
            id=""
            class="form-control"
            placeholder=""
            required
          />
        </div>

        <button type="submit" @click="Check_Answer()"> Submit </button>
        <button type="submit" @click="Reset()"> Reset </button>

        <div id="result"> </div>

      </div>
 </div>
  
</template>



<script >
import axios from 'axios'

export default{
  data(){
    return{
        teams: [],
        questions: '',
        Quiz: '',
        QuestionNumber: '',
        Question: '', 
        Answer: '',
        Option1: '',
        Option2: '',
        Option3: '',
        Option4: '',
        Test_Answer: 'Check'
    }
  },
    methods:{
      Check_Answer(){
        if(this.Input.toUpperCase() == this.Test_Answer.toUpperCase()){ // Non case sensitive user input WORKING
          document.getElementById("result").innerHTML = "Correct" ;
        }
        else{
          document.getElementById("result").innerHTML = "Incorrect" ; // ^^
        }
      },

      GetData: function(){
          var values = crypto.getRandomValues(new Uint32Array(1));

          for (var i = 0; i < values.length; i++) {
              console.log(values[i].toString(16));    
          }
          console.log(values.toString(16))

          axios
          .post("https://gxxffbgloa.execute-api.eu-west-2.amazonaws.com/dev/",//Link to database api post
          {
            QuestionID: values.toString(16),
            Question: this.Question,
            Quiz: this.Quiz,
            QuestionNumber: this.QuestionNumber,
            Answer: this.Answer,
            Option1: this.Option1,
            Option2: this.Option2,
            Option3: this.Option3,
            Option4: this.Option4,
          })
        }
      },
    
      mounted(){
        axios
          .get("https://gxxffbgloa.execute-api.eu-west-2.amazonaws.com/dev")
          .then(response=>{
            this.teams =response.data.body;//sets this.questions as the data from the link
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