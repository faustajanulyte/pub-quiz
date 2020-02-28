<template>
  <div class="addusers">
    <h1 class="py-4 font-weight-bold">Add new user or team</h1>
    <div class="container bg-dark py-4 col-9">
        <form class="form-login py-4">
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
          <br>
          <div class="form-check form-check-inline mt-3">
            <input class="form-check-input" type="radio" value="true" v-model="Admin">
              <label class="form-check-label text-white">Admin</label>
          </div>
          <div class="form-check form-check-inline mt-3">
            <input class="form-check-input" type="radio" value="false" v-model="Admin">
            <label class="form-check-label text-white">User</label>
          </div>
        </form>
        </div>
        <div class="btn-group">
          <button id="addUser" type="submit" class="btn btn-dark btn-md my-4 mr-4 rounded" @click="addUsers()">Add user</button>
        <form @click="$router.push('Users')">
          <button id="back" type="submit" class="btn btn-dark btn-md my-4">Back</button>
        </form>
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
    };
  },
  methods: {
    addUsers: function() {
      axios.post("https://hghjfrvme8.execute-api.eu-west-2.amazonaws.com/dev/", {
            Username: this.Username,
            Password: this.Password,
            Admin: this.Admin,
          });     
      this.Username = '';
      this.Password = '';
      this.Admin = '';
    }
  }
};
</script>

<style>
.addusers {
  width: 100%;
  height: 1000px;
  background-image: url('~@/assets/images/questionmark.jpeg');
  background-size: 100%;
  margin: 0px;
}
.form-login {
  max-width: 330px;
  padding: 1% 5px;
  margin: 0 auto;
}
</style>

