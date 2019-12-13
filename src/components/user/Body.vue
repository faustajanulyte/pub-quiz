<template>
  <div class="body">
    <router-link class="router-link" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    <div class="login-overlay">
      <div class="login-wrapper">
        <form class="form-signin">
          <h2 class="form-signin-heading">Please sign in</h2>
          <input
            v-model="name"
            type="text"
            id="inputName"
            class="form-control"
            placeholder="Username"
            required
          />
          <input
            v-model="password"
            type="password"
            id="inputPassword"
            v-show="!showPass"
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
      name: "",
      password: "",
      admin: "",
      valid: ""
    };
  },
  methods: {
    authUsers: function() {
      console.log(this.name);
      axios
        .post(
          "https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev",
          {
            name: this.name,
            password: this.password,
            admin: this.admin
          }
        )
        .then(response => {
          this.admin = response.data.admin,
          this.valid = response.data.valid
          if(this.admin) {
            this.$router.push('services');
          } else if(this.valid) {
            this.$router.push('home');
          } else {
            alert("Failed to sign in!");
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
  height: 1000px;
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
