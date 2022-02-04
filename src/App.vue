
<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
body {
  display: flex;
  flex: 1;
  height: 100%;
  margin: 0;
}
html {
  --bgColor-default: rgba(var(--product-color), 1);
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
}
</style>
