<template>
  <div class="quizzes">
    <div class="outerBox">
      <router-link class="createButton" to="/CreateAQuiz" tag="button">Create a quiz</router-link>
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
              <h class="textQuizList">Quiz 1</h>
            </div>
            <div class="quizTypeSect">
              <h class="textQuizList">Quiz Type</h>
            </div>
            <div class="quizEditSect">
              <router-link to="/CreateAQuiz">
              <h class="textQuizList">Edit</h>
              </router-link>
            </div>
            <div class="quizDeleteSect">
              <button class="textQuizList">Delete</button>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="quizNameSect">
              <h class="textQuizList">Quiz 2</h>
            </div>
            <div class="quizTypeSect">
              <h class="textQuizList">Quiz Type</h>
            </div>
            <div class="quizEditSect">
              <router-link to="/CreateAQuiz">
              <h class="textQuizList">Edit</h>
              </router-link>
            </div>
            <div class="quizDeleteSect">
              <button class="textQuizList">Delete</button>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="quizNameSect">
              <h class="textQuizList">Quiz 3</h>
            </div>
            <div class="quizTypeSect">
              <h class="textQuizList">Quiz Type</h>
            </div>
            <div class="quizEditSect">
              <router-link to="/CreateAQuiz">
              <h class="textQuizList">Edit</h>
              </router-link>
            </div>
            <div class="quizDeleteSect">
              <button class="textQuizList">Delete</button>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="quizNameSect">
              <h class="textQuizList">Quiz 4</h>
            </div>
            <div class="quizTypeSect">
              <h class="textQuizList">Quiz Type</h>
            </div>
            <div class="quizEditSect">
              <router-link to="/CreateAQuiz">
              <h class="textQuizList">Edit</h>
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
export default {
  name: "app",
  data() {
    return {
      
    };
  },
  methods:
  {},
  /*ReloadQuizzes()
  {
    CreateNewListQuizObject("Quiz 1");
    CreateNewListQuizObject("Quiz 2");
    CreateNewListQuizObject("Quiz 3");
    CreateNewListQuizObject("Quiz 4");
  },
  CreateNewListQuizObject(name)
  {
    var newListQuizObject = document.createElement('div');
    newListQuizObject.textContent = name;
    newListQuizObject.setAttribute('class','listQuizObject');
    newListQuizObject.parentNode = document.getElementById("quizListInnerBox");
  },
  mounted() {
    this.ReloadQuizzes();
  },*/
}


</script>

<style>
.quizzes {
  width: 100%;
  height: 1000px;
  background-image: url('~@/assets/images/questionmark.svg');
  background-size: 100%;
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