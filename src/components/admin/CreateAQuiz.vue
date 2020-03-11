<template>
  <div class="create">
   <div class="outerBox">
      <button class="createButton" @click="SetQuizQuestionData()">Save</button>
      <textarea rows="1" placeholder="Enter Pin" class="pinInputBox" id="qpininput"></textarea>
      <textarea rows="2" cols="50" placeholder="Enter Description" class="descriptionInputBox" id="qdescinput"></textarea>
      <textarea rows="1" placeholder="Quiz Name" class="quizNameInputBox" id="qquiznameinput"></textarea>
      <textarea rows="1" class="quizTypeInput" id="qquiztypeinput"></textarea>
      <h class="textQuizList">Fill all boxes</h>
      <div class="innerBox" id="quizListInnerBox">
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="QuestSect">
              <h class="textQuizList">Question</h>
            </div>
            <div class="PicSect">
              <h class="textQuizList">Pic URL</h>
            </div>
            <div class="CorrectSect">
              <h class="textQuizList">Correct Answer</h>
            </div>
            <div class="Option1Sect">
              <h class="textQuizList">Option 1</h>
            </div>
            <div class="Option2Sect">
              <h class="textQuizList">Option 2</h>
            </div>
            <div class="Option3Sect">
              <h class="textQuizList">Option 3</h>
            </div>
            <div class="Option4Sect">
              <h class="textQuizList">Option 4</h>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="QuestSect">
              <textarea rows="1" class="TextArea" placeholder="Question Here" id="qr1c1"></textarea>
            </div>
            <div class="PicSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="URL here" id="qr1c2"></textarea>
            </div>
            <div class="CorrectSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Correct Answer Here" id="qr1c3"></textarea>
            </div>
            <div class="Option1Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr1c4"></textarea>
            </div>
            <div class="Option2Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr1c5"></textarea>
            </div>
            <div class="Option3Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr1c6"></textarea>
            </div>
            <div class="Option4Sect">
              <textarea rows="1" class="TextArea" placeholder="Option Here" id="qr1c7"></textarea>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="QuestSect">
              <textarea rows="1" class="TextArea" placeholder="Question Here" id="qr2c1"></textarea>
            </div>
            <div class="PicSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="URL here" id="qr2c2"></textarea>
            </div>
            <div class="CorrectSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Correct Answer Here" id="qr2c3"></textarea>
            </div>
            <div class="Option1Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr2c4"></textarea>
            </div>
            <div class="Option2Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr2c5"></textarea>
            </div>
            <div class="Option3Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr2c6"></textarea>
            </div>
            <div class="Option4Sect">
              <textarea rows="1" class="TextArea" placeholder="Option Here" id="qr2c7"></textarea>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="QuestSect">
              <textarea rows="1" class="TextArea" placeholder="Question Here" id="qr3c1"></textarea>
            </div>
            <div class="PicSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="URL here" id="qr3c2"></textarea>
            </div>
            <div class="CorrectSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Correct Answer Here" id="qr3c3"></textarea>
            </div>
            <div class="Option1Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr3c4"></textarea>
            </div>
            <div class="Option2Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr3c5"></textarea>
            </div>
            <div class="Option3Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr3c6"></textarea>
            </div>
            <div class="Option4Sect">
              <textarea rows="1" class="TextArea" placeholder="Option Here" id="qr3c7"></textarea>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="QuestSect">
              <textarea rows="1" class="TextArea" placeholder="Question Here" id="qr4c1"></textarea>
            </div>
            <div class="PicSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="URL here" id="qr4c2"></textarea>
            </div>
            <div class="CorrectSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Correct Answer Here" id="qr4c3"></textarea>
            </div>
            <div class="Option1Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr4c4"></textarea>
            </div>
            <div class="Option2Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr4c5"></textarea>
            </div>
            <div class="Option3Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr4c6"></textarea>
            </div>
            <div class="Option4Sect">
              <textarea rows="1" class="TextArea" placeholder="Option Here" id="qr4c7"></textarea>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="QuestSect">
              <textarea rows="1" class="TextArea" placeholder="Question Here" id="qr5c1"></textarea>
            </div>
            <div class="PicSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="URL here" id="qr5c2"></textarea>
            </div>
            <div class="CorrectSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Correct Answer Here" id="qr5c3"></textarea>
            </div>
            <div class="Option1Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr5c4"></textarea>
            </div>
            <div class="Option2Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr5c5"></textarea>
            </div>
            <div class="Option3Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr5c6"></textarea>
            </div>
            <div class="Option4Sect">
              <textarea rows="1" class="TextArea" placeholder="Option Here" id="qr5c7"></textarea>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="QuestSect">
              <textarea rows="1" class="TextArea" placeholder="Question Here" id="qr6c1"></textarea>
            </div>
            <div class="PicSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="URL here" id="qr6c2"></textarea>
            </div>
            <div class="CorrectSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Correct Answer Here" id="qr6c3"></textarea>
            </div>
            <div class="Option1Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr6c4"></textarea>
            </div>
            <div class="Option2Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr6c5"></textarea>
            </div>
            <div class="Option3Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr6c6"></textarea>
            </div>
            <div class="Option4Sect">
              <textarea rows="1" class="TextArea" placeholder="Option Here" id="qr6c7"></textarea>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="QuestSect">
              <textarea rows="1" class="TextArea" placeholder="Question Here" id="qr7c1"></textarea>
            </div>
            <div class="PicSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="URL here" id="qr7c2"></textarea>
            </div>
            <div class="CorrectSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Correct Answer Here" id="qr7c3"></textarea>
            </div>
            <div class="Option1Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr7c4"></textarea>
            </div>
            <div class="Option2Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr7c5"></textarea>
            </div>
            <div class="Option3Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr7c6"></textarea>
            </div>
            <div class="Option4Sect">
              <textarea rows="1" class="TextArea" placeholder="Option Here" id="qr7c7"></textarea>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="QuestSect">
              <textarea rows="1" class="TextArea" placeholder="Question Here" id="qr8c1"></textarea>
            </div>
            <div class="PicSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="URL here" id="qr8c2"></textarea>
            </div>
            <div class="CorrectSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Correct Answer Here" id="qr8c3"></textarea>
            </div>
            <div class="Option1Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr8c4"></textarea>
            </div>
            <div class="Option2Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr8c5"></textarea>
            </div>
            <div class="Option3Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr8c6"></textarea>
            </div>
            <div class="Option4Sect">
              <textarea rows="1" class="TextArea" placeholder="Option Here" id="qr8c7"></textarea>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="QuestSect">
              <textarea rows="1" class="TextArea" placeholder="Question Here" id="qr9c1"></textarea>
            </div>
            <div class="PicSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="URL here" id="qr9c2"></textarea>
            </div>
            <div class="CorrectSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Correct Answer Here" id="qr9c3"></textarea>
            </div>
            <div class="Option1Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr9c4"></textarea>
            </div>
            <div class="Option2Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr9c5"></textarea>
            </div>
            <div class="Option3Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr9c6"></textarea>
            </div>
            <div class="Option4Sect">
              <textarea rows="1" class="TextArea" placeholder="Option Here" id="qr9c7"></textarea>
            </div>
          </div>
          <div class="listQuizObject"> <!-- Top of the Quiz table -->
            <div class="QuestSect">
              <textarea rows="1" class="TextArea" placeholder="Question Here" id="qr10c1"></textarea>
            </div>
            <div class="PicSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="URL here" id="qr10c2"></textarea>
            </div>
            <div class="CorrectSect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Correct Answer Here" id="qr10c3"></textarea>
            </div>
            <div class="Option1Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr10c4"></textarea>
            </div>
            <div class="Option2Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr10c5"></textarea>
            </div>
            <div class="Option3Sect">
              <textarea rows="1" class="TextAreaCenter" placeholder="Option Here" id="qr10c6"></textarea>
            </div>
            <div class="Option4Sect">
              <textarea rows="1" class="TextArea" placeholder="Option Here" id="qr10c7"></textarea>
            </div>
          </div>

      </div>
      <router-link class="backButton" to="/Quizes" tag="button">Back</router-link>
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
  GetQuizQuestionData() {
        Axios
        .get("https://ilxze566s8.execute-api.eu-west-2.amazonaws.com/dev")
        .then(response=>{
          this.quizs = response.data.body;
          this.quizs.forEach(quiz => {
            if(quiz.QuizNumber == localStorage.getItem("quizNumber"))
            {
              document.getElementById("qpininput").innerHTML = quiz.QuizPIN;
              document.getElementById("qdescinput").innerHTML = quiz.QuizInfo;
              document.getElementById("qquiznameinput").innerHTML = quiz.QuizName;
              document.getElementById("qquiztypeinput").innerHTML = quiz.QuizType;
              // Question 1
              document.getElementById("qr1c1").innerHTML = quiz.Questions[1].Question;
              document.getElementById("qr1c2").innerHTML = quiz.Questions[1].URL;
              document.getElementById("qr1c3").innerHTML = quiz.Questions[1].Answer;
              document.getElementById("qr1c4").innerHTML = quiz.Questions[1]["Option1"];
              document.getElementById("qr1c5").innerHTML = quiz.Questions[1]["Option2"];
              document.getElementById("qr1c6").innerHTML = quiz.Questions[1]["Option3"];
              document.getElementById("qr1c7").innerHTML = quiz.Questions[1]["Option4"];
              // Question 2
              document.getElementById("qr2c1").innerHTML = quiz.Questions[2].Question;
              document.getElementById("qr2c2").innerHTML = quiz.Questions[2].URL;
              document.getElementById("qr2c3").innerHTML = quiz.Questions[2].Answer;
              document.getElementById("qr2c4").innerHTML = quiz.Questions[2]["Option1"];
              document.getElementById("qr2c5").innerHTML = quiz.Questions[2]["Option2"];
              document.getElementById("qr2c6").innerHTML = quiz.Questions[2]["Option3"];
              document.getElementById("qr2c7").innerHTML = quiz.Questions[2]["Option4"];
              // Question 3
              document.getElementById("qr3c1").innerHTML = quiz.Questions[3].Question;
              document.getElementById("qr3c2").innerHTML = quiz.Questions[3].URL;
              document.getElementById("qr3c3").innerHTML = quiz.Questions[3].Answer;
              document.getElementById("qr3c4").innerHTML = quiz.Questions[3]["Option1"];
              document.getElementById("qr3c5").innerHTML = quiz.Questions[3]["Option2"];
              document.getElementById("qr3c6").innerHTML = quiz.Questions[3]["Option3"];
              document.getElementById("qr3c7").innerHTML = quiz.Questions[3]["Option4"];
              // Question 4
              document.getElementById("qr4c1").innerHTML = quiz.Questions[4].Question;
              document.getElementById("qr4c2").innerHTML = quiz.Questions[4].URL;
              document.getElementById("qr4c3").innerHTML = quiz.Questions[4].Answer;
              document.getElementById("qr4c4").innerHTML = quiz.Questions[4]["Option1"];
              document.getElementById("qr4c5").innerHTML = quiz.Questions[4]["Option2"];
              document.getElementById("qr4c6").innerHTML = quiz.Questions[4]["Option3"];
              document.getElementById("qr4c7").innerHTML = quiz.Questions[4]["Option4"];
              // Question 5
              document.getElementById("qr5c1").innerHTML = quiz.Questions[5].Question;
              document.getElementById("qr5c2").innerHTML = quiz.Questions[5].URL;
              document.getElementById("qr5c3").innerHTML = quiz.Questions[5].Answer;
              document.getElementById("qr5c4").innerHTML = quiz.Questions[5]["Option1"];
              document.getElementById("qr5c5").innerHTML = quiz.Questions[5]["Option2"];
              document.getElementById("qr5c6").innerHTML = quiz.Questions[5]["Option3"];
              document.getElementById("qr5c7").innerHTML = quiz.Questions[5]["Option4"];
              // Question 6
              document.getElementById("qr6c1").innerHTML = quiz.Questions[6].Question;
              document.getElementById("qr6c2").innerHTML = quiz.Questions[6].URL;
              document.getElementById("qr6c3").innerHTML = quiz.Questions[6].Answer;
              document.getElementById("qr6c4").innerHTML = quiz.Questions[6]["Option1"];
              document.getElementById("qr6c5").innerHTML = quiz.Questions[6]["Option2"];
              document.getElementById("qr6c6").innerHTML = quiz.Questions[6]["Option3"];
              document.getElementById("qr6c7").innerHTML = quiz.Questions[6]["Option4"];
              // Question 7
              document.getElementById("qr7c1").innerHTML = quiz.Questions[7].Question;
              document.getElementById("qr7c2").innerHTML = quiz.Questions[7].URL;
              document.getElementById("qr7c3").innerHTML = quiz.Questions[7].Answer;
              document.getElementById("qr7c4").innerHTML = quiz.Questions[7]["Option1"];
              document.getElementById("qr7c5").innerHTML = quiz.Questions[7]["Option2"];
              document.getElementById("qr7c6").innerHTML = quiz.Questions[7]["Option3"];
              document.getElementById("qr7c7").innerHTML = quiz.Questions[7]["Option4"];
              // Question 8
              document.getElementById("qr8c1").innerHTML = quiz.Questions[8].Question;
              document.getElementById("qr8c2").innerHTML = quiz.Questions[8].URL;
              document.getElementById("qr8c3").innerHTML = quiz.Questions[8].Answer;
              document.getElementById("qr8c4").innerHTML = quiz.Questions[8]["Option1"];
              document.getElementById("qr8c5").innerHTML = quiz.Questions[8]["Option2"];
              document.getElementById("qr8c6").innerHTML = quiz.Questions[8]["Option3"];
              document.getElementById("qr8c7").innerHTML = quiz.Questions[8]["Option4"];
              // Question 9
              document.getElementById("qr9c1").innerHTML = quiz.Questions[9].Question;
              document.getElementById("qr9c2").innerHTML = quiz.Questions[9].URL;
              document.getElementById("qr9c3").innerHTML = quiz.Questions[9].Answer;
              document.getElementById("qr9c4").innerHTML = quiz.Questions[9]["Option1"];
              document.getElementById("qr9c5").innerHTML = quiz.Questions[9]["Option2"];
              document.getElementById("qr9c6").innerHTML = quiz.Questions[9]["Option3"];
              document.getElementById("qr9c7").innerHTML = quiz.Questions[9]["Option4"];
              // Question 10
              document.getElementById("qr10c1").innerHTML = quiz.Questions[10].Question;
              document.getElementById("qr10c2").innerHTML = quiz.Questions[10].URL;
              document.getElementById("qr10c3").innerHTML = quiz.Questions[10].Answer;
              document.getElementById("qr10c4").innerHTML = quiz.Questions[10]["Option1"];
              document.getElementById("qr10c5").innerHTML = quiz.Questions[10]["Option2"];
              document.getElementById("qr10c6").innerHTML = quiz.Questions[10]["Option3"];
              document.getElementById("qr10c7").innerHTML = quiz.Questions[10]["Option4"];

            }
          })
        })
  },
  SetQuizQuestionData: function()
  {
            Axios
            .post("https://ilxze566s8.execute-api.eu-west-2.amazonaws.com/dev",
            {
              QuizNumber: localStorage.getItem("quizNumber"),
              QuizName: document.getElementById("qquiznameinput").value,
              QuizInfo: document.getElementById("qdescinput").value,
              QuizPIN: document.getElementById("qpininput").value,
              QuizType: document.getElementById("qquiztypeinput").value,
              Questions:{
                1:{
                  Question: document.getElementById("qr1c1").value,
                  URL: document.getElementById("qr1c2").value,
                  Answer: document.getElementById("qr1c3").value,
                  ["Option1"]: document.getElementById("qr1c4").value,
                  ["Option2"]: document.getElementById("qr1c5").value,
                  ["Option3"]: document.getElementById("qr1c6").value,
                  ["Option4"]: document.getElementById("qr1c7").value,
                },
                2:{
                  Question: document.getElementById("qr2c1").value,
                  URL: document.getElementById("qr2c2").value,
                  Answer: document.getElementById("qr2c3").value,
                  ["Option1"]: document.getElementById("qr2c4").value,
                  ["Option2"]: document.getElementById("qr2c5").value,
                  ["Option3"]: document.getElementById("qr2c6").value,
                  ["Option4"]: document.getElementById("qr2c7").value,
                },
                3:{
                  Question: document.getElementById("qr3c1").value,
                  URL: document.getElementById("qr3c2").value,
                  Answer: document.getElementById("qr3c3").value,
                  ["Option1"]: document.getElementById("qr3c4").value,
                  ["Option2"]: document.getElementById("qr3c5").value,
                  ["Option3"]: document.getElementById("qr3c6").value,
                  ["Option4"]: document.getElementById("qr3c7").value,
                },
                4:{
                  Question: document.getElementById("qr4c1").value,
                  URL: document.getElementById("qr4c2").value,
                  Answer: document.getElementById("qr4c3").value,
                  ["Option1"]: document.getElementById("qr4c4").value,
                  ["Option2"]: document.getElementById("qr4c5").value,
                  ["Option3"]: document.getElementById("qr4c6").value,
                  ["Option4"]: document.getElementById("qr4c7").value,
                },
                5:{
                  Question: document.getElementById("qr5c1").value,
                  URL: document.getElementById("qr5c2").value,
                  Answer: document.getElementById("qr5c3").value,
                  ["Option1"]: document.getElementById("qr5c4").value,
                  ["Option2"]: document.getElementById("qr5c5").value,
                  ["Option3"]: document.getElementById("qr5c6").value,
                  ["Option4"]: document.getElementById("qr5c7").value,
                },
                6:{
                  Question: document.getElementById("qr6c1").value,
                  URL: document.getElementById("qr6c2").value,
                  Answer: document.getElementById("qr6c3").value,
                  ["Option1"]: document.getElementById("qr6c4").value,
                  ["Option2"]: document.getElementById("qr6c5").value,
                  ["Option3"]: document.getElementById("qr6c6").value,
                  ["Option4"]: document.getElementById("qr6c7").value,
                },
                7:{
                  Question: document.getElementById("qr7c1").value,
                  URL: document.getElementById("qr7c2").value,
                  Answer: document.getElementById("qr7c3").value,
                  ["Option1"]: document.getElementById("qr7c4").value,
                  ["Option2"]: document.getElementById("qr7c5").value,
                  ["Option3"]: document.getElementById("qr7c6").value,
                  ["Option4"]: document.getElementById("qr7c7").value,
                },
                8:{
                  Question: document.getElementById("qr8c1").value,
                  URL: document.getElementById("qr8c2").value,
                  Answer: document.getElementById("qr8c3").value,
                  ["Option1"]: document.getElementById("qr8c4").value,
                  ["Option2"]: document.getElementById("qr8c5").value,
                  ["Option3"]: document.getElementById("qr8c6").value,
                  ["Option4"]: document.getElementById("qr8c7").value,
                },
                9:{
                  Question: document.getElementById("qr9c1").value,
                  URL: document.getElementById("qr9c2").value,
                  Answer: document.getElementById("qr9c3").value,
                  ["Option1"]: document.getElementById("qr9c4").value,
                  ["Option2"]: document.getElementById("qr9c5").value,
                  ["Option3"]: document.getElementById("qr9c6").value,
                  ["Option4"]: document.getElementById("qr9c7").value,
                },
                10:{
                  Question: document.getElementById("qr10c1").value,
                  URL: document.getElementById("qr10c2").value,
                  Answer: document.getElementById("qr10c3").value,
                  ["Option1"]: document.getElementById("qr10c4").value,
                  ["Option2"]: document.getElementById("qr10c5").value,
                  ["Option3"]: document.getElementById("qr10c6").value,
                  ["Option4"]: document.getElementById("qr10c7").value,
                }

              }
            })
            location.reload();
  },
  },
  mounted()
  {
    this.GetQuizQuestionData();
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
.pinInputBox
{
  position: absolute;
  top:5.8%;
  left:8%;
}

.descriptionInputBox
{
  position: absolute;
  top:2.9%;
  left:19.3%;
}

.quizNameInputBox
{
  position: absolute;
  top:5.8%;
  left:45%;
}

.quizTypeInput
{
  position: absolute;
  top:5.8%;
  left:57%;
}

.QuestSect
{
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 12.5%;
  left: 0%;
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
}

.PicSect
{
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 12.5%;
  left: 14.28571428571429%;
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
}

.CorrectSect
{
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 12.5%;
  left: 28.57142857142858%;
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
}

.Option1Sect
{
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 12.5%;
  left: 42.85714285714287%;
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
}

.Option2Sect
{
position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 12.5%;
  left: 57.14285714285716%;
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
}

.Option3Sect
{
position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 12.5%;
  left: 71.42857142857145%;
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
}

.Option4Sect
{
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  height: 5vh;
  width: 12.5%;
  left: 85.71428571428574%;
  border-style: solid;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}

.TextArea
{
  margin-top: 3%;
}

.TextAreaCenter
{
  margin-top: 3%;
  margin-right: 50%;
}

</style>