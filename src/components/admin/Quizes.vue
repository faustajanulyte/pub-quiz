<template>
  <div class="quizzes">
    <div class="outerBox">
      <!-- <router-link class="createButton" to="/CreateAQuiz" tag="button">Create a quiz</router-link>-->
      <div class="innerBox" id="quizListInnerBox">
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="quizNameSect">
              <h class="textQuizList">Quiz Name</h>
            </div>
            <div class="quizTypeSect">
              <h class="textQuizList">Quiz Type</h>
            </div>
            <div class="quizEditSect">
            </div>
            <div class="quizDeleteSect">
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="quizNameSect">
              <h class="textQuizList" id="q1name">Quiz 1</h>
            </div>
            <div class="quizTypeSect">
              <h class="textQuizList" id="q1type">Quiz Type</h>
            </div>
            <div class="quizEditSect">
              <router-link to="/CreateAQuiz">
              <h class="textQuizList" @click="SetQNumber(1)">Edit</h>
              </router-link>
            </div>
            <div class="quizDeleteSect">
              <button class="textQuizList">Delete</button>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="quizNameSect">
              <h class="textQuizList" id="q2name">Quiz 2</h>
            </div>
            <div class="quizTypeSect">
              <h class="textQuizList" id="q2type">Quiz Type</h>
            </div>
            <div class="quizEditSect">
              <router-link to="/CreateAQuiz">
              <h class="textQuizList" @click="SetQNumber(2)">Edit</h>
              </router-link>
            </div>
            <div class="quizDeleteSect">
              <button class="textQuizList">Delete</button>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="quizNameSect">
              <h class="textQuizList" id="q3name">Quiz 3</h>
            </div>
            <div class="quizTypeSect">
              <h class="textQuizList" id="q3type">Quiz Type</h>
            </div>
            <div class="quizEditSect">
              <router-link to="/CreateAQuiz">
              <h class="textQuizList" @click="SetQNumber(3)">Edit</h>
              </router-link>
            </div>
            <div class="quizDeleteSect">
              <button class="textQuizList">Delete</button>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="quizNameSect">
              <h class="textQuizList" id="q4name">Quiz 4</h>
            </div>
            <div class="quizTypeSect">
              <h class="textQuizList" id="q4type">Quiz Type</h>
            </div>
            <div class="quizEditSect">
              <router-link to="/CreateAQuiz">
              <h class="textQuizList" @click="SetQNumber(4)">Edit</h>
              </router-link>
            </div>
            <div class="quizDeleteSect">
              <button class="textQuizList">Delete</button>
            </div>
          </div>

      </div>
      <router-link class="backButton" to="/Services" tag="button">Back</router-link>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: "app",
  data() {
    return {

    };
  },
  methods: {
  GetQuizData: function() {
        Axios
        .get("https://ilxze566s8.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.quizs = response.data.body;
          this.quizs.forEach(quiz => {
            document.getElementById("q" + quiz.QuizNumber + "name").innerHTML = quiz.QuizName;
            document.getElementById("q" + quiz.QuizNumber + "type").innerHTML = quiz.QuizType;
          })
        })
  },
  SetQNumber: function(number)
  {
    localStorage.setItem("quizNumber", number);
  }
  },
  mounted: function()
  {
    this.GetQuizData()
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
.outerBox {
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  top:2%;
  left:4%;
  width: 93%;
  height: 90vh;
  border-style: solid;
  border-width: 4px;
  border-color: white;
}
.innerBox {
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  top:10%;
  left:4%;
  width: 93%;
  height: 73vh;
  border-style: solid;
  border-width: 4px;
  border-color: white;
}

.listQuizObject {
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 100%;
  border-style: solid;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
}

.quizNameSect {
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 25%;
  left: 0%;
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
}

.quizTypeSect {
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 25%;
  left: 25%;
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
  vertical-align: middle;
}

.quizEditSect {
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 25%;
  left: 50%;
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
}

.quizDeleteSect {
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 25%;
  left: 75%;
  border-style: solid;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
}

.createButton{
  position: absolute;
  top:5%;
  left:4%;
  font-size: 20px;
}

.backButton {
  position: absolute;
  bottom:3%;
  right:3%;
  font-size: 20px;
}

.textQuizList
{
  text-align: center;
  font-size: 25px;
}

</style>