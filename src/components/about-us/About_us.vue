<template>
  <div class="about-us">
    <div class="about-us-img">
      <img src="@/assets/images/Lewis.jpg" alt="Lewis" />
      <img src="@/assets/images/Fausta.jpg" alt="Fausta" />
    </div>
    <h1>
      Hi, that's us, Lewis and Fausta!
      <br />We both love golf and thought that it would be pretty cool to have our own golf balls. But of course, to start something like golf balls business you need to have some money, so we started selling used balls first. And we still do that, because we still have quite a few left. So here it comes, our golf balls business! Where you can find anything you want, starting with loads of different brand's used balls and of course, our super sick SIMPLE golf balls!
      <br />So start digging for balls!
    </h1>
  </div>
</template>

<script>
export default {
  name: "About_us"
};
</script>

<style>

.about-us img {
  display: inline-block;
  max-width: 250px;
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 100px;
  margin-bottom: 50px;
  border-radius: 20px;  
}

.about-us h1 {
  font-weight: 500;
  color: white;
  margin-bottom: 150px;
  text-align: center;
  padding-right: 50px;
  padding-left: 50px;
}
</style>