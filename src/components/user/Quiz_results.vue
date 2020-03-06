<template>
  <div>
    <div class="container bg-dark pb-5 col-8 my-4">
      <h1 class="text-white font-weight-bold py-4">RESULTS</H1>
    </div>
    <button type="submit" class="btn btn-dark btn-lg mt-2" @click="back_to_home">Back</button>
    <div class="box">
        <div class="text">
            RESULTS
        </div>

        <div class="score" id="Score"> </div> <div class="score1"> /10</div>

        <button class="back" @click="back_to_home"> Back </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      Score: localStorage.getItem('Score'),
      Show_Hide_var: localStorage.Show_Hide_var,
    };
  },
  methods:{
    back_to_home:function(){
        this.$router.push('Home');
        localStorage.setItem('Score', 0)
        localStorage.setItem('Question_Number', 0)
        localStorage.setItem("Show_Hide_var", 0)
        localStorage.setItem('Countdown', 0)
        localStorage.setItem('OnOff',0)
    }
  },
  mounted() {
    if (localStorage.Score) {
      document.getElementById("Score").innerHTML = this.Score ;
      this.teamname = localStorage.teamname;
      localStorage.setItem('Countdown', this.countDown)
    }
  },
};

</script>

<style scoped>
.box{
    position: fixed;
    top:5%;
    left:10%;
    bottom:10%;
    right:10%;
    background:rgba(100, 97, 97, 0.9);
    border-style: solid;
    border-width: 4px;
    border-color: white;
}
.text{
    font-size: 9vh;
    color: white;
    top:10px;
}

.score{
    font-size: 10vh;
    color: white;
}
.score1{
    font-size: 10vh;
    color: rgb(0, 0, 0);
}
.back{
    font-size: 4vh;
    position: fixed;
    margin-left:-9%;
    bottom:25%;
}
</style>