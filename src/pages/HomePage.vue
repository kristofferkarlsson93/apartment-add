<template>
  <div>
    <navigator />
    <div class="home-page-content">
      <div class="hero-image" >
        <div class="hero-text">
          <h1>Två umebor flyttar till Göteborg</h1>
          <h3>En systemutvecklare och en personalvetare flyttar söderut</h3>
          <strong>Vi söker nu boende och hoppas att du kan hjälpa oss!</strong>
          <div class="button-wrapper">
            <custom-button class="custom-button" :title="'Lär känna oss'" :onClick="() => this.$router.push('/om-oss')" />
            <custom-button :title="'Vi söker'" :onClick="() => this.$router.push('/vi-soker')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigator from '../components/Navigator';
import CustomButton from '../components/CustomButton';
export default {
  components: {
    Navigator,
    CustomButton
  }
}
</script>

<style>
@media only screen and (max-width: 600px) {
  .hero-text {
    width: 75%;
  }
}
strong {
  margin-bottom: 5%;
}
/* The hero image */
.hero-image {
    background-image: url('../../static/images/oss.jpg');
    /* Set a specific height */
    height: 75vh;

    /* Position and center the image to scale nicely on all screens */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*text-shadow: 0 1px 0 black;*/
    background-color: #FFE7C2CC;
    border-radius: 10px;
    padding: 5%;
    color: black;
}
.button-wrapper {
  display: flex;
  flex-direction: row;
  align-items: space-between;
}
.custom-button {
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>
