<template>
  <div class="quiz">
    <div class= "Quiz_box">

      <div class="title">
        Question ( "1" ) 
        ...........................................................................................................................................
      </div>

      <div class="timer">
        00:00
      </div>

      
      }
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
  font-size: 30px;
  color:white;
  padding-right: 30px;
  top: -14%;


}

</style>