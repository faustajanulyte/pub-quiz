<template>
  <div class="services">
    <div class="border">
    <router-link class="router-link" to="/Quizes">
      <div class="img-block">
        <h1>Quizzes</h1>
          <a class="services-icon">
            <img src="@/assets/images/pen.png" alt="quizes" />
          </a>
      </div>
    </router-link>
    <router-link class="router-link" to="/Results">
      <div class="img-block">
        <h1>Results</h1>
          <a class="services-icon">
            <img src="@/assets/images/results.png" alt="results" />
          </a>
          <div class="line"></div>
      </div>
    </router-link>
    <router-link class="router-link" to="/AddUser">
      <div class="img-block">
        <h1>Add user</h1>
          <a class="services-icon">
            <img src="@/assets/images/plus.png" alt="adduser" />
          </a>
          <div class="line"></div>
      </div>
    </router-link>
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
          text: 'Add user',
          page:'/adduser'
        },
      ]
    }
  }
}
</script>

<style>
.services {
  width: 100%;
  height: 1000px;
  background-image: url('~@/assets/images/questionmark.jpeg');
  background-size: 100%;
  margin: 0px;
}
.router-link {
  filter: invert(0.0);
}
.img-block {
  display: inline-block;
  position: relative;
  text-align: right;
  width:350px;
  padding-left: 60px;
  padding-right: 100px;
  padding-top: 20px;
}
.router-link:hover {
  opacity: 0.7;
}
.img-block h1 {
  color: black;
  text-align: center;
  padding-left: 0px;
}
.border {
  position: absolute;
  top: 130px;
  bottom: 150px;
  left: 100px;
  right:100px;
  background-color: white;
  border-radius: 25px;
}
.line {
  border-left: 1px solid rgb(218, 215, 215);
  position: absolute;
  top: 20px;
  bottom: -30px;
  left: 10px;
  right:100px;
}
</style>
