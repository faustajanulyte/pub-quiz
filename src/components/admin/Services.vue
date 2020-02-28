<template>
  <div class="services pt-5">
    <h1 class="font-weight-bold pb-5">Welcome to admin portal</h1>
      <div class="container bg-dark pb-5 col-8">
        <router-link class="router-link" to="/Quizes">
          <div class="img-block mr-3">
            <h1>Quizzes</h1>
              <a class="services-icon">
                <img src="@/assets/images/pen.png"  class="img-fluid" alt="quizes" />
              </a>
          </div>
        </router-link>
        <router-link class="router-link" to="/Results">
          <div class="img-block mx-3">
            <h1>Results</h1>
              <a class="services-icon">
                <img src="@/assets/images/results.png" class="img-fluid" alt="results" />
              </a>
          </div>
        </router-link>
        <router-link class="router-link" to="/Users">
          <div class="img-block ml-3">
            <h1>Users</h1>
              <a class="services-icon">
                <img src="@/assets/images/plus.png" class="img-fluid" alt="users" />
              </a>
          </div>
        </router-link>
    </div>
    <div class="col-15">
    <form @click="$router.push('/')">
      <button type="submit" class="btn btn-dark btn-md mt-4">Log out</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'services',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Quizzes',
          page:'/quizes'
        },
        {
          id: 1,
          text: 'Results',
          page:'/results'
        },
        {
          id: 2,
          text: 'Users',
          page:'/users'
        },
      ]
    }
  }
}
</script>

<style>
.services {
  width: 100%;
  height: 1500px;
  background-image: url('~@/assets/images/questionmark.svg');
  background-size: 100%;
}
.router-link {
  filter: invert(0.0);
}
.img-block {
  display: inline-block;
  position: relative;
  text-align: right;
  padding-top: 20px;
  filter: invert(1);
  
}
.router-link:hover {
  opacity: 0.7;
}
.img-block h1 {
  color: black;
  text-align: center;
}
.container {
  position: absolute;
  border-radius: 25px;
}
.line {
  border-left: 1px solid black;
  position: absolute;
  top: 20px;
  bottom: -30px;
  right: 95%
}
</style>
