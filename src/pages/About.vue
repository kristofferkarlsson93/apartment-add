<template>
  <div class="container">
    <Navigator />
      <h1>OM OSS</h1>
      <div class="text-container">
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare ornare pulvinar. Curabitur in orci euismod, mollis sapien nec, eleifend magna. Etiam nec lorem et erat facilisis placerat. Duis volutpat dolor in sem porttitor sodales. Vestibulum facilisis placerat urna ac condimentum. Vestibulum pharetra nibh et accumsan vulputate. Praesent mollis, risus sollicitudin consequat volutpat, justo libero aliquet lectus, vel hendrerit neque ligula non felis. Etiam tristique orci quis nisi finibus, nec egestas dui fringilla. Phasellus ullamcorper quis lectus sed molestie. Vivamus scelerisque congue lectus maximus consectetur. Sed metus odio, mattis quis mollis sed, auctor quis nunc. Donec facilisis iaculis metus id efficitur. Curabitur diam sapien, elementum eget condimentum sit amet, aliquam quis leo.</p>
      </div>
      <div>
        <h2>Anna-Karin Kindberg</h2>
      </div>
      <div class="person-container">
        <div class="image-container">
          <img class="persson-image" src="../../static/images/anna-karin.jpg">
        </div>
        <div class="text-container" >
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare ornare pulvinar. Curabitur in orci euismod, mollis sapien nec, eleifend magna. Etiam nec lorem et erat facilisis placerat. Duis volutpat dolor in sem porttitor sodales. Vestibulum facilisis placerat urna ac condimentum. Vestibulum pharetra nibh et accumsan vulputate. Praesent mollis, risus sollicitudin consequat volutpat, justo libero aliquet lectus, vel hendrerit neque ligula non felis. Etiam tristique orci quis nisi finibus, nec egestas dui fringilla. Phasellus ullamcorper quis lectus sed molestie. Vivamus scelerisque congue lectus maximus consectetur. Sed metus odio, mattis quis mollis sed, auctor quis nunc. Donec facilisis iaculis metus id efficitur. Curabitur diam sapien, elementum eget condimentum sit amet, aliquam quis leo.</p>
        </div>
      </div>
      <div><h2>Kristoffer Karlsson</h2></div>
      <div class="person-container">
        <div class="text-container" >
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare ornare pulvinar. Curabitur in orci euismod, mollis sapien nec, eleifend magna. Etiam nec lorem et erat facilisis placerat. Duis volutpat dolor in sem porttitor sodales. Vestibulum facilisis placerat urna ac condimentum. Vestibulum pharetra nibh et accumsan vulputate. Praesent mollis, risus sollicitudin consequat volutpat, justo libero aliquet lectus, vel hendrerit neque ligula non felis. Etiam tristique orci quis nisi finibus, nec egestas dui fringilla. Phasellus ullamcorper quis lectus sed molestie. Vivamus scelerisque congue lectus maximus consectetur. Sed metus odio, mattis quis mollis sed, auctor quis nunc. Donec facilisis iaculis metus id efficitur. Curabitur diam sapien, elementum eget condimentum sit amet, aliquam quis leo.</p>
        </div>
        <div class="image-container">
          <img class="persson-image" src="../../static/images/Kristoffer.png">
        </div>
      </div>
  </div>
</template>

<script>
import Navigator from '../components/Navigator';
export default {
  components: {
    Navigator
  }
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .person-container {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
}
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.person-container {
  display: flex;
  flex: 1;
}
.text-container {
  display: flex;
  flex: 1;
  justify-content: center;
}
.image-container {
  flex: 1;
}
.text {
  text-align: left;
  padding: 5%;
}
.persson-image {
  max-width: 300px;
}
</style>
