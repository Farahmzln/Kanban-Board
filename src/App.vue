<template>
  <div id="app">
    <home-page></home-page>
  </div>
</template>


<script>
  import HomePage from "./components/Home.vue";

  export default {
    name: "App",
   components: {
      HomePage,
    },
    data() {
      return {};
    },
};
</script>

<style>
</style>
