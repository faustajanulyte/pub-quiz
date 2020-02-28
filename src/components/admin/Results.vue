<template >
  <div class="results col-12">
    <h1 class="font-weight-bold pt-3">Results</h1>
      <table class="table mt-4">
        <thead class="thead-dark col-14">
          <tr>
            <th scope="col" class="col-md-">Team name</th>
            <th scope="col" class="col-md-">Overall score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in teams" v-bind:key="team.Username">
            <td class="text-white"> {{ team.Username }} </td>
            <td class="text-white">{{ getTotalScore(team.Username) }}</td>
          </tr>
        </tbody>
      </table>
        <form @click="$router.push('Services')">
          <button type="submit" class="btn btn-dark btn-md mt-4">Back</button>
        </form>
    </div>
</template>

<script >
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
 
.results {
  width: 100%;
  height: 1000px;
  background-image: url('~@/assets/images/questionmark.svg');
  background-size: 100%;
  margin: 0px;
}

</style>