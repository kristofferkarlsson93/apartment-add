<template>
  <div class="button md-elevation-6" @click="onClick">
    {{title}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      hovered: false
    }
  },
  props: {
    title: String,
    onClick: Function
  }
}
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  max-width: 200px;
  max-height: 75px;
  padding: 20px;
  margin: 0;
  text-align: center;
  cursor: pointer;
}
.button:hover {
  background-color: #82D4BB;
}
</style>
