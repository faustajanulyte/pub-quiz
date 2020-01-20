<template>
  <div class="quiz">
    <div class="wrapper">
      <div>
        <img src="@/assets/images/Scroll.png" alt="paper" class="Scroll" > 
        <div class="paragraph">
          Quiz info --------------------------------------------------------
          -------------------------------------------------------------------
        </div>  

      </div>

      <div class= "buttons_box"> 
        <div class= "TeamName" id="result">

        </div>

        <div>

        <form method="get" action="/?#/Quiz_1_Questions" @click="this.on_off">
          <button type="submit" class="Start_button">Start</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      teamname: "",
      true_false: 0,
      countDown: 16,
      Number: 0
    };
  },
  methods:{
    on_off:function(){
      localStorage.setItem('OnOff',1)
      }
  },
  mounted() {
    if (localStorage.teamname) {
      document.getElementById("result").innerHTML = localStorage.teamname ;
      this.teamname = localStorage.teamname;
      localStorage.setItem('Countdown', this.countDown),
      localStorage.setItem('Number', this.Number)
    }
  },
};



</script>

<style scoped>
.quiz {
  position: fixed;
  background-image: url('~@/assets/images/treasurehunt.gif');
}
.wrapper{
  position:fixed;
  margin:0.5%;
  width:99%;
  height:98%;
}
.Scroll {
  position:fixed;
  left: 0%;
  top: 12%;
  height: 70%;
  width: 100%;
  max-width: 700px;
}
.paragraph{
  position: absolute;
  left:23%;
  right:23%;
  top:24%;
  bottom:42%;
  font-size:3.5vh;
}
.buttons_box{
  position:fixed;
  top:2%;
  bottom:2%;
  left:5%;
  right:5%;   
}
.TeamName{
  position:static;
  background-color: rgba(100,97,97, 0.9);
  width:auto;
  text-align: center;
  margin:auto;
  color:white;
  border-style: solid;
  border-width: 4px;
  border-color: white;
  font-size: 3.5vh;
}
.Start_button{
  position:fixed;
  width:70%;
  top:80%;
  left:15%;
  font-size: 4vh;
  color: white;
  background-color: rgba(100,97,97, 0.9);
  border-style: solid;
  border-width: 4px;
  border-color: white;
  font-family: 'Dosis', sans-serif;
}

</style>