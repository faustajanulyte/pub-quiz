<template>
  
    <div class="home">
      <div class="holder">
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

.holder{
  top:2%;
  left:1%;
  position:fixed;
  width: 97%;
  height: 95%;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  
}

.home {
  position: fixed;
  background-image: url('~@/assets/images/treasurehunt.gif');
  width: 100%;
  height: 100%;
  background-size: 100%;
}
.welcome {
  position: absolute;
  width: 90%;
  height: 70%;
  margin: 5%;
  /*border-style: solid;
  border-width: 2px;
  border-color: white;*/
}
.welcome img {
    margin-top: 5%;
    position: relative;
    top:-8%;
    width:100%;
    height: 80%;
    max-width: 800px;
}
.message {
    position: fixed;
    top: 8%;
    height: 45%;
    max-height: 45%;
    width: 60%;
    right:15%;
    left: 20%;
    color: black;
    word-wrap:break-word;
    font-family: 'Satisfy', cursive;
    font-size: 4.9vw;
    -webkit-box-ordinal-group: 2; /* iOS 6-, Safari, Opera*/
    -moz-box-ordinal-group: 2; /* Firefox*/
    -ms-flex-order: 2; /* IE 10 */
    -webkit-order: 2; /* Chrome */
    
    
}
.parrot img {
    position: absolute;
    width: 35%;
    top: 44%;
    left: 71%;
    transform: scaleX(-1);
}
.pin_input {
  position:relative;
  vertical-align:center;   
  height: 10%;
  width: 90%;
  margin-top: -3%;
  margin-right: 1%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2%;
  font-size: 5vw;;
}
.pin_button{  
  margin-top: 10%;
  margin-left: 0%;
  height: 10%;
  width: 40%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2%;
  font-size: 5.5vw;;
}
.pin-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.pin-wrapper {
  position: absolute;
  background-color: rgba(100, 97, 97, 0.9);
  width: 70%;
  height: 30%;
  left:15%;
  bottom:13%;
  border-style: solid;
  border-width: 2px;
  border-color: white;
}
.pin_heading{
  margin-top:2%;
  font-size:5vw;;
  color:white;
}
</style>