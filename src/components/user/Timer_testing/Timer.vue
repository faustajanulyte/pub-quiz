<template>
<div >    

        <countdown :end-time="new Date().getTime() + 5000">
        
          <span
          slot="process"
          slot-scope="anyYouWantedScopName">{{ `Lefttime: ${anyYouWantedScopName.timeObj.ceil.s}` }}</span>
          <span slot="finish" >Done!</span>
        </countdown>

        
</div>
</template>



<script> 

/*function myFunction() {
  setInterval(function(){ window.location.href = "/?#/Quiz_1_questions" }, 5000);
  return;
}

window.onload = myFunction() 

*/
</script>

<style scoped>
.quiz {
  background-image: url('~@/assets/images/treasurehunt.gif');
  width: 100%;
  height: 938px;
  background-size: 100%;
}


.Quiz_box {
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  margin: 3%;
  width: 93%;
  height: 800px;
  border-style: solid;
  border-width: 4px;
  border-color: white;
}

.title {
  position: relative;
  font-size: 30px;
  text-align: left; 
  width: 75%;
  color: white;  
  padding-left: 30px;
  top: 5%;
  word-wrap: break-word; /** makes the text wrap inside the div */
}

.countdown {
  position: relative;
  font-size: 100px;
  color: black; 
}
.timer_text {
  position: relative;
  font-size: 100px;
  color: black; 
}

</style>