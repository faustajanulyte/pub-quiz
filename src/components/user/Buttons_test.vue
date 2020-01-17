<template>

  <div class="quiz">
    <div>
      <div>

        <div id="app">
          <p><button @click="this.Test">Test</button></p>
        </div>

        <div>
          <form method="get" action="/?#/Test" @click="this.back">
          <button type="submit" class="Start_button">Back</button>
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
      
    };
  },
  // define methods under the `methods` object
  methods: {
    Test:function(){
      alert(localStorage.getItem('Countdown'))
    },

    
    back:function(){
      localStorage.setItem('OnOff',0)
    }
  },
  mounted() {

  }
}



</script> 

<style>

.text{
  font-size: 5vh;
}
</style>