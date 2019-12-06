<template>
  <div class="home">
    <div class="welcome">
        <img src="@/assets/images/paper.png" alt="paper">
        <div class="message">
        <p>Ahoy me hearties, welcome to the all new Treasure Hunt Quiz Hub!
Grab yourselves some beverages, take a pew and have a go at the quizzes.
One quiz per pub and to launch them you will need to have found the Password as indicated in the clues sheet. There are 10 points on offer here,
so good luck.
        </p>
        </div>
    </div>
        <div class="parrot">
          <img src="@/assets/images/parrot.png" alt="parrot">
        </div>
  </div>
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');

.home {
  background-image: url('~@/assets/images/treasurehunt.gif');
  width: 100%;
  height: 938px;
  background-size: 100%;
}
.welcome {
  position: absolute;
}
.welcome img {
    margin-top: 80px;
    position: relative;
    left: 50px;
    width: 500px;
    height: 700px
}
.message {
    position: absolute;
    top: 200px;
    left: 170px;
    right: 30px;
    color: white;
    font-family: 'Satisfy', cursive;
    font-size: 27px
}
.parrot img {
    position: absolute;
    width: 350px;
    top: 550px;
    right: 780px;
    transform: scaleX(-1);
}
</style>