<template>
  <div class="container">
    <navigator />
    <div class="content">
      <div class="email contact-way">
        <flipcard
          :title="'Maila'"
          :icon="'email'"
          :valueAk="'akkindberg@gmail.com'"
          :valueKri="'karlsson.kristoffer93@gmail.com'"
        />
      </div>
      <div class="phone contact-way">
         <flipcard
          :title="'Ring'"
          :icon="'phone'"
          :valueAk="'070-497 04 98'"
          :valueKri="'070-287 12 36'"
        />
      </div>
      <div class="social-media contact-way">
         <flipcard
          :title="'Connecta'"
          :icon="'public'"
          :value="'Tomt'"
          :valueAk="'Tomt'"
          :valueKri="'Tomt'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navigator from '../components/Navigator';
import Flipcard from '../components/FlipCard';
export default {
  components: {
    Navigator,
    Flipcard
  }
}
</script>

<style>
@media only screen and (max-width: 600px) {
  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
}
.container {
  display: flex;
  flex-direction: column;
}
.content {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-way {
  flex: 1;
  cursor: pointer;
}
.contact-way:hover {
}
</style>
