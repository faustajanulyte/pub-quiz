<template >
    <div class="results col-12">
        <h1 class="font-weight-bold pt-3">Team answers</h1>
            <div>
                <b-dropdown size="md" text="Team name" variant="dark" class="my-3 mx-3">
                    <b-dropdown-item-button  v-for="team in teams" v-bind:key="team.Username">{{ team.Username }}</b-dropdown-item-button>
                </b-dropdown>
                <b-dropdown size="md" text="Quiz" variant="dark">
                    <b-dropdown-item-button  v-for="team in teams" v-bind:key="team.Username">{{ team.Results[quiz] }}</b-dropdown-item-button>
                </b-dropdown>
            </div>
            <h3 class="font-weight-bold">Score: 9</h3>
            <table class="table mt-4">
                <thead class="thead-dark col-14">
                    <tr>
                        <th scope="col" class="col-md-">Question</th> 
                        <th scope="col" class="col-md-">Team answer</th>
                        <th scope="col" class="col-md-">Correct answer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-white">1</td>
                        <td class="text-white">Dog</td>
                        <td class="text-white">Cat</td>
                    </tr>
                </tbody>
            </table>
        <form @click="$router.push('Results')">
            <button type="submit" class="btn btn-dark btn-md mt-4">Back</button>
        </form>
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
.table {
    background-color: rgba(43, 41, 41, 0.8);
}
</style>