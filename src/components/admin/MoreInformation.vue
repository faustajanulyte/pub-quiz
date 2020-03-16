<template >
    <div v-if="loaded" class="results col-12">
        <h1 class="font-weight-bold pt-3">Team answers</h1>
            <div>
                <div class="row justify-content-center">
                <div class="col-sm-5">
                <label class="font-weight-bold h4">Team name</label>
                <div>
                <select v-model="teamName" class="custom-select bg-dark text-white col-8 mr-sm-2 mb-4">
                    <option v-for="team in teams" v-bind:key="team.Username">{{ team.Username }}</option>
                </select>
                </div>
                </div>
                <div class="col-sm-5">
                <label class="font-weight-bold h4">Quiz Name</label>
                <div>
                <select v-model="quizName" class="custom-select bg-dark text-white col-8 mr-sm-2 mb-4" id="inlineFormCustomSelect">
                    <option v-for="quiz in filterTeamQuiz(teamName)" v-bind:key="quiz.QuizId">{{ quiz }}</option>
                </select>
                </div>
                </div>
                </div>
            </div>
            <h3 class="font-weight-bold">Score: {{ quizScore }}</h3>
            <table class="table mt-4">
                <thead class="thead-dark col-14">
                    <tr>
                        <th scope="col" class="col-md-">Question</th> 
                        <th scope="col" class="col-md-">Team answer</th>
                        <th scope="col" class="col-md-">Correct answer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="response in getQuizResponses(teams, quizs)" v-bind:key="response">
                        <td class="text-white">{{ response.questionNo }}</td>
                        <td class="text-white">{{ response.answer }}</td>
                        <td class="text-white">{{ response.correctAnswer }}</td>
                    </tr>
                </tbody>
            </table>
        <form @click="$router.push('Results')">
            <button type="submit" class="btn btn-dark btn-md my-4">Back</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios'
export default{
  data(){
    return{
        teams: [],
        quizs: [],
        teamName: null,
        quizName: null,
        currentTeam: null,
        quizScore: 0,
        loaded: false
    }
  },
  methods:{
    GetData: function(){
        let requestOne = axios.get("https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev")
        let requestTwo = axios.get("https://ilxze566s8.execute-api.eu-west-2.amazonaws.com/dev")

      axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
          let responseOne = responses[0];
          let responseTwo = responses[1];

          this.teams = this.filterAdminUsers(responseOne.data.body);//sets this.questions as the data from the link     
          
          for (let index = 0; index < this.teams.length; index++) {
              console.log(this.teams[index]);
              
              if(typeof (this.teams[index].Results) !== 'undefined') {
                  this.teamName = this.teams[index].Username;
                  this.quizName = this.objectToKey(this.teams[index].Results)[0];
                  break;
              }          
          }
          
          this.quizs = responseTwo.data.body;
          this.loaded = true;
      }));
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
    filterAdminUsers: function(users) {
      let teams = [];
      users.forEach(team => {            
            if(team.Admin == 'false') {
                teams.push(team);
            }
        });
        return teams;
    },
    filterTeamQuiz: function(teamname) {
        let quizNames = []
        this.teams.forEach(team => {            
            if(team.Username === teamname) {
                if(typeof team.Results !== 'undefined') {
                    for (let quizName in team.Results) {
                        quizNames.push(quizName);
                    }
                }
            }
        }) 
        return quizNames;
    },
    getQuizResponses: function(teams, quizs) {
        let quizId;
        let currentTeamQuiz = {};
        let currentQuizResponse = {};

        teams.forEach(team => {
            if(team.Username === this.teamName) {
                currentTeamQuiz = team.Results[this.quizName];
                this.quizScore = team.Results[this.quizName].Score;
                quizId = team.Results[this.quizName].QuizID;
                console.log(quizId);
            }
        })

        quizs.forEach(quiz => {
            if(quiz.QuizNumber === quizId) {
                currentQuizResponse = quiz;
            }
        })
        
        let response = []
        this.objectToKey(currentTeamQuiz).forEach(element => {
            if(element.toLowerCase().includes("answer")){
                let questionNo = element.substring(6);
                let answer = currentTeamQuiz[element];
                let correctAnswer = currentQuizResponse.Questions[questionNo].Answer;

                let singleResponse = new Object();
                singleResponse.questionNo = questionNo;
                singleResponse.answer = answer;
                singleResponse.correctAnswer = correctAnswer;

                response.push(singleResponse);
            }
        });
        response.sort((a, b) => a.questionNo - b.questionNo);
        return response;
        },
        objectToKey: function(object) {
            let array = []
            for(let key in object) {
                array.push(key);
            }
            return array;
        },
        objectToArray: function(object) {
            let array = []
            for(let key in object) {
                array.push(object[key]);
            }
            return array;
        }
    },
    mounted: async function(){
      await this.GetData()
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