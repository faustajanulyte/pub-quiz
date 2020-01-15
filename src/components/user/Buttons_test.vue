<template>
  <div class="quiz">
    <div>
      <button id="test" @click= "test"> Test </button>
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
    test: function () {
      // `this` inside methods points to the Vue instance
      alert(localStorage.getItem('teamname'))
    }
  }
}
</script> 

<style>


</style>