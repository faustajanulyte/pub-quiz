
<template >
  <div class="quiz">
    <div class= "Quiz_box">
      
      

      <div class="title" id="question_text">
        Question:
      </div>

      <div class="buttons_border">
        <div class= "answer1" >
        Answers
        </div>
        <div class= "answer2" >
        Answers
        </div>
        <div class= "answer3" >
        Answers
        </div>
        <div class= "answer4" >
        Answers
        </div>
      </div> 

      <div>
        <button class="submit"> Submit </button>
      </div>
    </div>
 </div>
  
</template>

<script >

/* function answer1_hover() {
     document.getElementById("answer1").style.color = "red";
   }
*/

  
</script>

<style>
 
.quiz {
  position: fixed;
  background-image: url('~@/assets/images/treasurehunt.gif');
  width: 100%;
  height: 938px;
  background-size: 100%;
}

.Quiz_box{
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  margin:4%;
  width: 93%;
  height: 800px;
  border-style: solid;
  border-width: 4px;
  border-color: white;
}

.title{
  position:relative;
  font-size:60px;
  text-align: left; 
  width: 75%;
  color:white;  
  padding-left:30px;
  top:5%;
  word-wrap: break-word; /** makes the text wrap inside the div */
}

.buttons_border{
  position: relative;
  margin:3%;
  width: 90%;
  height: 400px;
  top: 10%;
  
}

.answer1{
  position: fixed;
  white-space: wrap; 
  overflow: hidden;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height: 15%;
  top:35%;
  left:10%;
  color: rgb(48, 49, 54);
  background-color: white;
}

.answer2{
  position: fixed;
  white-space: wrap; 
  overflow: hidden; 
  text-align: center;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height:15%;
  left:60%;
  top:35%;
  color: rgb(48, 49, 54);
  background-color: white;
  
}
.answer3{
  position: fixed;
  white-space: wrap; 
  overflow: hidden;
  text-align: center;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height: 15%;
  top:60%;
  left:10%;
  color: rgb(48, 49, 54);
  background-color: white;
  
}
.answer4{
  position: fixed;
  white-space: wrap; 
  overflow: hidden;
  text-align: center;
  font-size: 5vw;
  padding: 1vw;
  width:30%;
  height: 15%;
  left:60%;
  top:60%;
  color: rgb(48, 49, 54);
  background-color: white;
  
}

.submit{
  position:fixed;
  bottom:12%;
  right:10%;
  font-size: 5vw;
  padding-left:1vw;
  padding-right:1vw;
}
.timer{
  position:relative;
  text-align:right;
  font-size: 40px;
  color:white;
  padding-left: 80%;

}

</style>