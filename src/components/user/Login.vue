<template>
  <div class="login">
    <router-link class="router-link" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    <div class="login-overlay">
      <div class="login-wrapper">
        <form class="form-login">
          <h2 class="form-login-heading">Please sign in</h2>
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
            this.$router.push('Services');
          } else if(this.valid) {
            this.$router.push('Home');
          } else {
            alert("Failed to sign in!");
          }
          console.log(this.valid)
          localStorage.setItem('teamname',this.name);
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
  background-color: rgba(255, 255, 255, 0.5);
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
  color: black;
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
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
