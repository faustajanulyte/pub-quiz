<template>
  <div class="login">
    <div class="login-overlay">
      <div class="login-wrapper">
        <form class="form-login">
          <h2 class="form-login-heading">Please sign in</h2>
          <input
            v-model="Username"
            type="text"
            id="inputName"
            class="form-control"
            placeholder="Username"
            required
          />
          <br>
          <input
            v-model="Password"
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <br />
          <button type="submit" @click="authUsers()">Sign in</button>
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
      Username: '',
      Password: '',
      Admin: '',
      valid: '',
    };
  },
  methods: {
    authUsers: function() {
      console.log(this.Username);
      axios
        .post(
          "https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev/",
          {
            Username: this.Username,
            Password: this.Password,
            Admin: this.Admin

          }
        )
        .then(response => {
          this.Admin = response.data.Admin,
          this.valid = response.data.valid
          if(this.Admin == "true") {
            this.$router.push('Services');
          } else if(this.valid) {
            this.$router.push('Home');
          } else {
            alert("Failed to sign in!");
          }
          console.log(this.valid)
          localStorage.setItem('teamname',this.Username);
        });
    }
  }
};

</script>

<style>
.login {
  width: 100%;
  height: 1000px;
  background-image: url('~@/assets/images/questionmark.jpeg');
  background-size: 100%;
  margin: 0px;
}
.login-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.login-wrapper {
  background-color: rgba(0, 0, 0, 0.65);
  width: 40%;
  margin: 12% auto;
  margin-top: 10%;
}
.form-login {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
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
