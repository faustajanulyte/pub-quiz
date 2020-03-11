<template>
  <div>
    <div class="container bg-dark pb-5 col-8 mt-4">
      <h1 class="text-white font-weight-bold py-4">RESULTS</h1>
      <h2 class="text-white font-weight-bold pt-4" id="Score">{{ Score }}</h2>
      <h2 class="text-white font-weight-bold">out of</h2>
      <h2 class="text-white font-weight-bold">10</h2>
    </div>
    <button type="submit" class="btn btn-dark btn-lg my-4" @click="back_to_home">Back</button>
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

<style>
</style>