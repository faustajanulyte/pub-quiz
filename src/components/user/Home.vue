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
          <h2 class="pin_heading">Please enter the Quiz Name</h2>
          <input
            v-model="quizname"
            type="text"
            id="inputPIN"
            class="pin_input"
            placeholder="Please enter the Quiz Name"
            required
          />
          <br />
          <h2 class="pin_heading">Please enter the Quiz Pin</h2>
          <input
            v-model="PIN"
            type="text"
            id="inputquizname"
            class="pin_input"
            placeholder="Please enter the Quiz Pin"
            required
          />
          <br />
          <button class="pin_button"  type="submit" @click="authPIN()">Submit</button>
        </form>
      </div>  
    </div>        
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      quizname: "",
      PIN: "",
      valid: ""
    };
  },
  methods: {
    authPIN: function() { //creates the function which activates by the button
      console.log(this.quizname); 
      axios
        .post(
          "https://kezmvb42ga.execute-api.eu-west-2.amazonaws.com/dev", //gets the data from the amazon database
          {
            quizname: this.quizname, //sets the variable quizname the same as the input quizname 
            PIN: this.PIN //sets the variable PIN the same as the input PIN
          }
        )
        .then(response => {
          this.valid = response.data.valid 
          if(this.valid) { //checks the login is correct
            if (this.quizname == "Quiz1"){ //checks which quiz to send the user to 
              this.$router.push('quiz_1');
            }
            else if (this.quizname == "Quiz2"){ //checks which quiz to send the user to 
              this.$router.push('quiz_2')
            }
            else if (this.quizname == "Quiz3"){ //checks which quiz to send the user to 
              this.$router.push('quiz_3')
            }
            else if (this.quizname == "Quiz4"){ //checks which quiz to send the user to 
              this.$router.push('quiz_4')
            }
          } else {
            alert("Failed to sign in!"); // if wrong sends an alert
          }
          console.log(this.valid)
        });
    }
  }
};

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