<template >
    <div class="users col-12">
        <div class= "btn-group">
            <h1 class="font-weight-bold pt-3 text-md">Logins</h1>
        </div>
            <table class="table mt-4">
                <thead class="thead-dark col-14">
                    <tr>
                    <th scope="col" class="col-md-">Username</th>
                    <th scope="col" class="col-md-">Login</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="User in Users" v-bind:key="User.Username">
                    <td class="text-white"> {{ User.Username }} </td>
                    <td class="text-white"> {{ User.Date }} </td>
                    </tr>
                </tbody>
            </table>
        <div class="btn-group">
            <form @click="$router.push('Users')">
                <button type="submit" class="btn btn-inline btn-dark mt-3 btn-md">Back</button>
            </form>
            
            
        </div>
    </div>
</template>

<script >
import axios from 'axios'

export default{
  data(){
    return{
        Users: []
    }
  },
  methods:{
    GetUsers: function(){
        axios.get(" https://qhwdqbjutb.execute-api.eu-west-2.amazonaws.com/Dev/")
        .then(response=>{
          this.Users = response.data.body;//sets this.questions as the data from the link       
      })},
    },
    mounted(){
      this.GetUsers()
    }
}     
</script>

<style>
 
body {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/questionmark.svg');
  background-size: 50%;
  margin: 0px;
}
.table {
    background-color: rgba(43, 41, 41, 0.8);
}
</style>