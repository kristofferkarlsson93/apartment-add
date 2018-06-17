<template>
  <div @click="() => this.toggle = !this.toggle">
    <div v-if="this.toggle">
      <h3>Anna-Karin</h3>
      <p>{{valueAk}}</p>
      <h3>Kristoffer</h3>
      <p>{{valueAk}}</p>
    </div>
    <div v-else>
      <md-icon class="md-size-5x icon">{{icon}}</md-icon>
      <h3>{{title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggle: false
    }
  },
  props: {
    icon: String,
    title: String,
    valueAk: String,
    valueKri: String
  }
}
</script>

<style scoped>
.icon {
  color: green;
}
</style>
