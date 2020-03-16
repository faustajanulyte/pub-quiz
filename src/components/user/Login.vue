<template>
  <div class="login">
    <div class="login-overlay">
      <div class="login-wrapper col-8 bg-dark">
        <form class="form-login">
          <h2 class="form-login-heading py-3">Please sign in</h2>
          <div class="input-group" id="username">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Username</span>
            </div>
          <input
            v-model="Username"
            type="text"
            id="inputName"
            class="form-control"
            required
          />
          </div>
          <br>
          <div class="input-group" id="password">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
            </div>
          <input
            v-model="Password"
            type="password"
            id="inputPassword"
            class="form-control"
            required
          />
          </div>
          <div id="Invalid" class="NoAnswer_Text text-danger my-4"> </div>
        </form>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-dark btn-md my-4" @click="authUsers()">Sign in</button>
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
      Username: '',
      Password: '',
      Admin: '',
      valid: '',

      x:[],
      date:[],
      time:[],
      h:[],
      m:[],
      s:[],
    };
  },
  methods: {
    authUsers: function() {
      localStorage.setItem("teamname", this.Username)
      axios.post("https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev/auth", {
            Username: this.Username,
            Password: this.Password,
            Admin: this.Admin
          })
        .then(response => {
          this.Admin = response.data.Admin,
          this.valid = response.data.valid
          
          if(response.data.Admin == "true") {
            this.$router.push('Services');
          } else if(response.data.valid) {
            this.$router.push('Home');
            this.Send_Time()
          } else {
            document.getElementById("username").style.outline = "thick solid Red";
            document.getElementById("password").style.outline = "thick solid Red";
            document.getElementById("Invalid").innerHTML = "Invalid Username or Password" 
        }
        localStorage.setItem('teamname',this.Username);
        localStorage.setItem('Admin', this.Admin) 
        localStorage.setItem('Password', this.Password)     

        localStorage.setItem('Score1', 0)  
        localStorage.setItem('Score2', 0)  
        localStorage.setItem('Score3', 0)  
        localStorage.setItem('Score4', 0)  
        

        });        
    },
    Send_Time(){ 
      this.x = new Date();
      this.h = this.x.getHours();
      this.m = this.x.getMinutes();
      this.s = this.x.getSeconds();

      if(this.s < 10){
        this.s = "0"+this.s
      }

      if(this.m < 10){
        this.m = "0"+this.m
      }
      
      this.date = this.x.getFullYear()+'-'+this.x.getDate()+'-'+(this.x.getMonth()+1);
      this.time = this.h + ':' + this.m + ':' + this.s
      
      axios.post("https://qhwdqbjutb.execute-api.eu-west-2.amazonaws.com/Dev/", {
        Date: this.date,
        Time: this.time,
        Username: localStorage.teamname
      })     
    }
  },
  mounted(){
    localStorage.clear();
  }
};

</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/questionmark.svg');
  background-size: 50%;
  margin: 0px;
}
.login-wrapper {
  background-color: rgba(0, 0, 0, 0.65);
  margin-top: 10%;
  margin-left: 17%;
  border-radius: 25px
}
.form-login-heading {
  color: white;
}
.form-login .form-control {
  height: auto;
  padding: 10px;
}
</style>
