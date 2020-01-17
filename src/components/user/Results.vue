<template>
  <div class="quiz">
    <div class="text">
        RESULTS
    </div>

    <div class="score" id="Score"> </div> <div class="score"> /10</div>



  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      Score: localStorage.getItem('Score')
    };
  },
  methods:{

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
.quiz {
  background-image: url('~@/assets/images/questionmark.jpeg');
  width: 100%;
  height: 800px;
  background-size: 100%;
}
.text{
    font-size: 10vh;
    color: yellow;
}

.score{
    font-size: 10vh;
    color: red;
}
</style>