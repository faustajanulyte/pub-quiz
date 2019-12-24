<template>
  <div class="quiz">

    <div class="Scroll">

      <div class="paragraph">
        Quiz info
      </div>  

    </div>

    <div class= "buttons_box"> 
      <div class= "TeamName">
        (TeamName)
      </div>

      <div>

      <form method="get" action="/?#/Quiz_1_questions">
        <button type="submit" class="Start_button">Start</button>
      </form>
          
      </div>
  </div>
 </div>

 
  
</template>

<script>




</script>

<style scoped>
.quiz {
  background-image: url('~@/assets/images/treasurehunt.gif');
  width: 100%;
  height: 938px;
  background-size: 100%;
}
.Scroll {
  background-image: url('~@/assets/images/Scroll.png');
  width: 950px;
  height: 900px;
  background-size: 100%;
}
.paragraph{
  position: absolute;
    top: 200px;
    left: 220px;
    color: black;
    font-size: 27px;
}
.buttons_box{
  width: 500px;
  height: 700px;
  position: absolute;
  top: 90px;
  right: 200px;
  
  
}
.TeamName{
  position: relative;
  top: 100px;
  margin: 0 auto;
  font-size: 40px;
  color: white;
  width:300px;
  background-color: rgba(100,97,97, 0.9);
  padding: 10px;
  border-style: solid;
  border-width: 4px;
  border-color: white;
}
.Start_button{
  position: relative;
  top:  450px;
  margin: 0 auto;
  font-size: 40px;
  color: white;
  width:328px;
  background-color: rgba(100,97,97, 0.9);
  padding: 10px;
  border-style: solid;
  border-width: 4px;
  border-color: white;
  font-family: 'Dosis', sans-serif;
}
</style>