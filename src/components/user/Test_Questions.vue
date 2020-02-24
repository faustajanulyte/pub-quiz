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
        
        <div>
            <div v-for="team in teams" v-bind:key="team.Questions">
                <h1> {{  team.Questions }} </h1>
                <p> </p>
            </div>
        </div>

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
        teams: [],
        
    }
  },
  methods:{
    GetData: function(){
        axios
        .get("https://0m5zyuzwnf.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.teams = response.data.body;//sets this.questions as the data from the link
      })},
    Reset: function(){
        this.teams = [];
        }, 
    
    /*GetQuestins: function(QuizName){
        this.teams.forEach(teams)
    },*/
    
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