<template>
  <div class="body">
    <div class="login-overlay">
      <div class="login-wrapper">
        <form class="form-signin">
          <h2 class="form-signin-heading">Please sign in</h2>
          <input
            v-model="name"
            type="text"
            id="inputName"
            class="form-control"
            placeholder="Team name"
            required
          />
          <input
            v-model="password"
            type="text"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <br />
          <button type="submit" @click="authTeam()">Sign in</button>
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
      name: "",
      password: "",
      valid: ""
    };
  },
  methods: {
    authTeam: function() {
      console.log(this.name);
      axios
        .post(
          "https://ayo669jcxd.execute-api.eu-west-2.amazonaws.com/dev/",
          {
            name: this.name,
            password: this.password
          }
        )
        .then(response => {
          this.valid = response.data.valid
          if(this.valid) {
            // route xyz
          } else {
            // failed
          }
          console.log(this.valid)
        });
    }
  }
};
</script>

<style>
.body {
  width: 100%;
  height: 750px;
}
.login-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.login-wrapper {
  background-color: rgba(255, 255, 255, 0.5);
  width: 40%;
  margin: 12% auto;
  margin-top: 10%;
}
.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin-heading {
  color: black;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin input[type="team name"] {
  margin-bottom: 0px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
