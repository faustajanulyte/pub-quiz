<template>

  <div class="quiz">
    <div>
      <div>

        <div id="app">
          <p><button @click="this.Test">On Off</button></p>
        </div>
        {{this.true_false}}

        <form method="get" action="/?#/Buttons_test" @click="this.on_off">
          <button type="submit" class="Start_button">Start</button>
        </form>
      </div>
    </div>
  </div>

</template> 



<script>

export default {
  name: "app",
  data() {
    return {
      startTime: 0,
      true_false:localStorage.getItem('OnOff'),
      countDown: 16,

    };
  },
  // define methods under the `methods` object
  methods: {
    Test:function(){
      alert(localStorage.getItem('OnOff'))
    },
    on_off:function(){
      localStorage.setItem('Timer',this.startTime)
      localStorage.setItem('OnOff',1)
      alert(localStorage.getItem('OnOff'))
      localStorage.setItem('Countdown', this.countDown)
      }
  },
}



</script> 

<style>

.text{
  font-size: 5vh;
}


</style>