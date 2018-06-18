<template>
  <div>
    <navigator />
    <div class="home-page-content">
      <div class="hero-image" >
      </div>
      <div class="hero-text">
        <h1>Två umebor flyttar till Göteborg</h1>
        <h3>Vi söker nu boende och hoppas att du kan hjälpa oss!</h3>
      </div>
      <div class="text-section">
        <div class="header">
          <h1>Snabböversikt</h1>
        </div>
        <div class="content-container">
          <div class="content md-elevation-3">
            <h2>Vår situation</h2>
            <div class="text">
              <p>Vi, Anna-Karin och Kristoffer, söker boende i Göteborg till hösten. Efter fyra år uppe i Umeå med studier och jobb har vi nu fått jobb i Göteborg. För att underlätta kvällar och helger skulle tak över huvudet göra oss evigt tacksamma.</p>
            </div>
            <div class="button-wrapper">
              <custom-button :title="'Mer om oss'" :onClick="() => this.$router.push('/om-oss')" />
            </div>
          </div>
          <div class="content md-elevation-3">
            <h2>Vi letar efter</h2>
            <div class="text">
              <p>Vi önskar hyra en tvåa, gärna med cykelavstånd till stan då vi båda kommer jobba nära centrum.</p>
            </div>
            <div class="button-wrapper">
              <custom-button :title="'Mer om vad vi söker'" :onClick="() => this.$router.push('/vi-soker')" />
            </div>
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

<style scoped>
@media only screen and (max-width: 600px) {
  .hero-image h1 {
  font-size: 3em!important;
  }
  h1 {
    font-size: 2em!important;
  }
  h3 {
    font-size: 1.5em!important;
  }
  .hero-text {
    width: 75%;
  }
  .content-container {
    flex-direction: column;
  }
  .content {
    margin: 7%;
  }
}
home-page-content {
  display: flex;
}
h1 {
  font-size: 4em;
}
h3 {
  font-size: 2em;
  line-height: 1.5;
}
.hero-image h1 {
  font-size: 5em;
}
/* The hero image */
.hero-image {
    background-image: url('../../static/images/oss.jpg');
    height: 60vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    filter: brightness(75%) contrast(75%);
}
.hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    /*text-shadow: 0 1px 0 black;*/
    /*background-color: #FFE7C2CC!important;
    border-radius: 10px;
    padding: 5%;
    padding-top: 1%;
    padding-bottom: 3%;
    color: black!important;*/
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
.content-container {
  display: flex;
}
.content {
  flex: 1;
  margin: 5%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 3%;
}
.content:hover {
  background-color: #82D4BB11;
  cursor: pointer;
}
.button-wrapper {
}
</style>
