<template>
  <div class="admin-body">
    <router-link class="router-link" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    <div class="admin-login-overlay">
      <div class="admin-login-wrapper">
        <form class="admin-form-signin">
          <h2 class="admin-form-signin-heading">Please sign in</h2>
          <input
            v-model="name"
            type="text"
            id="inputUserame"
            class="admin-form-control"
            placeholder="Username"
            required
          />
          <input
            v-model="password"
            type="password"
            id="inputPassword"
            v-show="!showPass"
            class="admin-form-control"
            placeholder="Password"
            required
          />
          <br />
          <button type="submit" @click="authAdmin()">Sign in</button>
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
    authAdmin: function() {
      console.log(this.name);
      axios
        .post(
          "https://h9ek7b6qff.execute-api.eu-west-2.amazonaws.com/dev",
          {
            name: this.name,
            password: this.password
          }
        )
        .then(response => {
          this.valid = response.data.valid
          if(this.valid) {
            this.$router.push('Services');
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
.admin-body {
  width: 100%;
  height: 750px;
}
.admin-login-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.admin-login-wrapper {
  background-color: rgba(255, 255, 255, 0.5);
  width: 40%;
  margin: 12% auto;
  margin-top: 10%;
}
.admin-form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.admin-form-signin-heading {
  color: black;
}
.admin-form-signin .admin-form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.admin-form-signin input[type="username"] {
  margin-bottom: 0px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.admin-form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>