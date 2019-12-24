<template>
<div>    
        <div @click="set_time">Click me!

        </div>

        <div @click="check_time"> Click! 

        </div>
</div>
</template>



<script>


export default {
  methods: {
        set_time: function() {  
        var time = new Date();
        var end_time = new Date();
        end_time.setSeconds(time.getSeconds() + 15 );

        if(this.time == this.end_time) {
        alert('times up')
        }
        else {
        alert(end_time);
        alert(time);
        }
    }
  }
}


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

.timer {
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