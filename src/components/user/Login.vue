<template>
  <div class="login">
    <div class="login-overlay">
      <div class="login-wrapper col-8 bg-dark pb-4">
        <form class="form-login">
          <h2 class="form-login-heading py-3">Please sign in</h2>
          <div class="input-group">
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
          <div class="input-group">
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
        </form>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-dark btn-md mt-4" @click="authUsers()">Sign in</button>
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
    };
  },
  methods: {
    authUsers: function() {
      console.log(this.Username);
      console.log(this.Password);
      console.log(this.Admin);
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
          } else {
            alert("Failed to sign in!");
        }
        localStorage.setItem('teamname',this.Username);
        localStorage.setItem('Admin', this.Admin) 
        localStorage.setItem('Password', this.Password)     

        localStorage.setItem('Score1', 0)  
        localStorage.setItem('Score2', 0)  
        localStorage.setItem('Score3', 0)  
        localStorage.setItem('Score4', 0)  
        

        });        
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
.login-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
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
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-login input[type="team name"] {
  margin-bottom: 0px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-login input[type="password"] {
  margin-bottom: 0px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
