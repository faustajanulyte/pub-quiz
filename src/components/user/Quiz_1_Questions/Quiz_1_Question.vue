<template>
  <div class="quiz">
    <div class= "Quiz_box">

      <div class="title">
        Question ( "1" ) 
        ...........................................................................................................................................
      </div>
      
      <vac :left-time="10000" :auto-start="true" >
        <countdown :end-time="new Date().getTime() + 10000" class="timer">
          <span 
          slot="process"
          slot-scope="anyYouWantedScopName">{{ `Lefttime: ${anyYouWantedScopName.timeObj.ceil.s}` }}</span>
          <span slot="finish" >Done!</span>
        </countdown>
      </vac>
    </div>
 </div>
  
</template>

<script>

function startCountdowns(seconds){
  var counter = seconds;
  //var counter_countdown = Number;

  var interval = setInterval(() => {
    console.log(counter);

    counter--;
    

    if(counter < 0 ){
      // The code here will run when
      // the timer has reached zero.
      clearInterval(interval);
      console.log('Ding!');
      startCountdowns(9.5);
      alert("Works");
      return;
    }
    }, 1000);
}
var url = document.createElement('a');
var currentUrl = window.location.pathname
url.href = 'https://master.d20fwluev9xat5.amplifyapp.com/?#/Quiz_1_questions';
console.log(url.host);      // stackoverflow.com
console.log(currentUrl);

if (currentUrl == "https://master.d20fwluev9xat5.amplifyapp.com/?#/Quiz_1_questions") {
  console.log ("Works");
  startCountdowns(9.5);
} else {
  console.log("does not work");
  
  
}


</script>

<style scoped>

.quiz {
  background-image: url('~@/assets/images/treasurehunt.gif');
  width: 100%;
  height: 938px;
  background-size: 100%;
}

.Quiz_box{
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  margin:3%;
  width: 93%;
  height: 800px;
  border-style: solid;
  border-width: 4px;
  border-color: white;
}

.title{
  position:relative;
  font-size:30px;
  text-align: left; 
  width: 75%;
  color:white;  
  padding-left:30px;
  top:5%;
  word-wrap: break-word; /** makes the text wrap inside the div */
}
.timer{
  position:relative;
  text-align:right;
  font-size: 40px;
  color:white;
  padding-left: 80%;

}

</style>