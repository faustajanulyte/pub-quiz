<template>
  <div class="home">
    <div class="welcome">
        <img src="@/assets/images/paper.png" alt="paper">
        <div class="message">
        <p>Ahoy me hearties, welcome to the all new Treasure Hunt Quiz Hub!
Grab yourselves some beverages, take a pew and have a go at the quizzes.
One quiz per pub and to launch them you will need to have found the Password as indicated in the clues sheet. There are 10 points on offer here,
so good luck.
        </p>
        </div>
    </div>
        <div class="parrot">
          <img src="@/assets/images/parrot.png" alt="parrot">
        </div>

         <div class="pin-overlay">
      <div class="pin-wrapper" >
        <form class="form-access">
          <h2 class="pin_heading">Please enter the pin</h2>
          <input
            v-model="Quiz_Pin"
            type="text"
            id="inputName"
            class="pin_input"
            placeholder="Enter Quiz Pin"
            required
          />
          <br />
          <button class="pin_button" type="submit">Submit</button>
        </form>
      </div>  
    </div>        
  </div>
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');

.home {
  background-image: url('~@/assets/images/treasurehunt.gif');
  width: 100%;
  height: 938px;
  background-size: 100%;
}
.welcome {
  position: absolute;
}
.welcome img {
    margin-top: 80px;
    position: relative;
    left: 90px;
    width: 500px;
    height: 700px
}
.message {
    position: absolute;
    top: 200px;
    left: 220px;
    color: black;
    font-family: 'Satisfy', cursive;
    font-size: 27px
}
.parrot img {
    position: absolute;
    width: 350px;
    top: 480px;
    right: 700px;
    transform: scaleX(-1);
}
.pin_input {
  vertical-align:center;   
  height: 35px;
  width: 360px;
  margin-top: -30px;
  margin-right: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 5px;
  font-size: 20px;
}
.pin_button{  
  margin-top: 15px;
  margin-right: -270px;
  height: 40px;
  width: 80px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.pin-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.pin-wrapper {
  background-color: rgba(100, 97, 97, 0.9);
  width: 400px;
  height: 170px;
  margin-top: 280px;
  margin-left: 900px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
}
.pin_heading{
  margin-top:10px;
  font-size:30px;
  color:white;
}
</style>