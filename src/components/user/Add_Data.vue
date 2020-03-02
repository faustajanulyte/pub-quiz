<template >
  <div class="">
    <div class= "">
        
      <button @click="this.GetData"> Update </button>
      <button @click="this.Patch"> Patch </button>
        
        <div>
          -----------------------------------------
        </div>

        <button @click="this.Check"> Check </button>

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
        NumberOfQuestions: "0",
        Question: '', 
        Answer: '',
        Option1: '',
        Option2: '',
        Option3: '',
        Option4: '',
        Test_Answer: 'Check',


        Username: localStorage.teamname,
        Password: "carrot",
        Admin: "true",  
        QuizID:localStorage.QuizID    
    }
  },
    methods:{

      GetData: function(){
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
              }
            },              
          },
        )},

      Patch: function(){
        axios.patch("https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev/",//Link to database api post
        {
        Username: this.Username,
        Password: "Test"
        },
      )},

      Check(){
        
      }
      },
    
      mounted(){
        axios
          .get("https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev/")
          .then(response=>{
            this.data = response.data.body;//sets this.questions as the data from the link
            this.data.forEach(data1 => {
            if(data1.Username == this.TeamName ) {
              console.log("correct")
                let currentQuiz = data1;
                for (let question in currentQuiz.Questions) {
                    this.currentQuestions.push(currentQuiz.Questions[question]);
                }
                console.log( this.currentQuestions[this.NumberOfQuestions]);
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