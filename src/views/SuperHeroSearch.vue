<template>
  <h1 class="searchHeading">Super Hero Search</h1>
  <form class="searchForm" @submit.prevent="searchHero">
    <input
      type="text"
      class="searchInput"
      placeholder="Search Hero"
      v-model="searchTerm"
    />
    <button class="searchButton">Search</button>
  </form>
  <h2 class="search-message" v-if="resultMessage !== null">
    {{ resultMessage }}
  </h2>
  <div class="cards" v-if="superHeroes !== null">
    <div class="card" v-for="(hero, index) in this.superHeroes" :key="index">
      <router-link :to="{ name: `hero`, params: { id: hero.id} }">
        <div class="card-image">
          <img
            :src="`${hero.image.url ? hero.image.url : ''}`"
            class="hero-image"
          />
        </div>
        <div class="card-hero-name">
          <h3 class="hero-name-header">{{ hero.name }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      superHeroes: null,
      searchTerm: "",
      searchTermResultID: {},
      accessToken: "121270947174101",
      resultMessage: null,
    };
  },
  methods: {
    async searchHero() {
      if (this.searchTerm !== "") {
        try {
          let res = await axios({
            url: `${
              "https://superheroapi.com/api.php/" +
              this.accessToken +
              "/search/" +
              this.searchTerm
            }`,
            method: "get",
            timeout: 8000,
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.data.results == null) {
            this.resultMessage = "No Results Found!";
            return (this.superHeroes = null);
          } else {
            this.resultMessage = null;
            console.log(JSON.parse(JSON.stringify(res.data.results)));
            return (this.superHeroes = res.data.results);
          }
        } catch (err) {
          console.error(err);
        }
      } else {
        this.resultMessage = "No Data Entered!";
      }
    },
  },
};
</script>

