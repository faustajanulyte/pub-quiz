<template>
  <div class="home">
    <div class="holder">
      <div>
        <img src="@/assets/images/paper.png" alt="paper" class="welcome"> 
          <p class="message">Ahoy me hearties, welcome to the all new Treasure Hunt Quiz Hub!
          Grab yourselves some beverages, take a pew and have a go at the quizzes.
          One quiz per pub and to launch them you will need to have found the Password as indicated in the clues sheet. There are 10 points on offer here,
          so good luck.
          </p>
      </div>

      <div class="pin-overlay" >
          <div class="pin-wrapper" id="login">
            <form class="form-access" >
              <h2 class="pin_heading">Please enter the Quiz Name</h2>
              <select name="Quiz" v-model="quizname" id="inputPIN" class="pin_input" placeholder="Please select a quiz" required>
                  <option value="Invalid" selected>Please Select A Quiz</option>
                  <option value="Quiz1">Quiz1</option>
                  <option value="Quiz2">Quiz2</option>
                  <option value="Quiz3">Quiz3</option>
                  <option value="Quiz4">Quiz4</option>
                </select>
              <br/>
              
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
              this.$router.push('Quiz_1');
            }
            else if (this.quizname == "Quiz2"){ //checks which quiz to send the user to 
              this.$router.push('Quiz_2')
            }
            else if (this.quizname == "Quiz3"){ //checks which quiz to send the user to 
              this.$router.push('Quiz_3')
            }
            else if (this.quizname == "Quiz4"){ //checks which quiz to send the user to 
              this.$router.push('Quiz_4')
            }
          } else {
            document.getElementById("login").style.outline = "thick solid Red";
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
  position: fixed;
  background-image: url('~@/assets/images/treasurehunt.gif');
  width: 100%;
  height: 100%;
  background-size: 100%;
}
.holder{
  position:fixed;
  margin:1%;
  width: 98%;
  height: 97%;
}
.welcome {
  position: fixed;
  width: 90%;
  height: 60%;
  max-width:6000px;
  max-height: 1000px;
  left:5%;
}
.message {
    position: fixed;
    color: black;
    left:20%;
    right:15%;
    top:8%;
    font-size: 2.7vh;   
}
.pin_input {
  position:fixed;  
  height: 5%;
  width: 50%;
  left:25%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 2vh;;
}
.pin_button{  
  position: fixed;
  margin-top: 3vh;
  margin-left: -20%;
  height: 5%;
  width: 40%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0%;
  font-size: 2vh;;
}
.pin-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
}
.form-access{
  height: 90%;
}
.pin-wrapper {
  position: fixed;
  background-color: rgba(150, 150, 150, 0.8);
  width: 70%;
  height: 30%;
  left:15%;
  bottom:8%;

}
.pin_heading{
  margin-top:7%;
  font-size:5vw;;
  color:white;
}
</style>