<template>
  <div class="container">
    <SuperHeroSearch />
  </div>
</template>

<script>
import SuperHeroSearch from "./components/SuperHeroSearch.vue";

export default {
  name: "App",
  components: {
    SuperHeroSearch,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  display: flex;
  margin: 50px 5%;
  flex-direction: column;
}
body {
  margin: 0;
  background: #2f2f2f;
}
</style>
