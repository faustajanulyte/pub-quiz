<template>
   <div class="col-md-3">
      <select class="form-control bg-dark text-white">
        <option selected>Team name</option>
        <option v-for="team in teams" v-bind:key="team.Username">{{ team.Username }}</option>
      </select>
    </div>
</template>


<script>
  import axios from 'axios'
export default{
  data(){
    return{
        teams: []
    }
  },
  methods:{
    GetData: function(){
        axios
        .get("https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.teams = this.filterAdminUsers(response.data.body);//sets this.questions as the data from the link       
      })},
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
    filterAdminUsers: function(users) {
      let teams = [];
      users.forEach(team => {            
            if(team.Admin == 'false') {
                teams.push(team);
            }
        });
        return teams;
    }  
    },
    mounted(){
      this.GetData()
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
</style>