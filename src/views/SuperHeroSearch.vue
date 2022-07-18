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
  <div v-if="loading" class="loader-container">
    <div class="loader"></div>
  </div>
  <h2 class="search-message" v-if="resultMessage !== null">
    {{ resultMessage }}
  </h2>
  <transition name="slide-fade">
    <div
        class="cards"
        v-if="this.superHeroes !== null">
      <div
          class="card"
          v-for="(hero, index) in this.superHeroes"
          :key="index">
        <router-link :to="{ name: `hero`, params: { id: hero.id} }">
          <div class="card-image">
            <img
                :src="`${hero.image.url}`"
                @error='$event.target.src=require("@/assets/placeholder.jpg")'
                class="hero-image"
            />
          </div>
          <div class="card-hero-name">
            <h3 class="hero-name-header">{{ hero.name }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </transition>
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
      loading: false,
    };
  },
  methods: {
    async searchHero() {
      this.$store.commit('storeHeroes', null);
      this.superHeroes = null;
      if (this.searchTerm !== "") {
        this.loading = true;
        await axios.get(`${"https://superheroapi.com/api.php/" + this.accessToken + "/search/" + this.searchTerm}`)
            .then(response => {
              if (response.data.results == null) {
                this.resultMessage = "No Results Found!";
                this.loading = false;
                return null;
              } else {
                this.resultMessage = null;
                this.superHeroes = response.data.results;
                console.log(this.$store.state.superHeroes);
              }
            }).catch(error => {
              this.resultMessage = error
            }).finally(() => {
              this.loading = false
            })
        this.$store.commit('storeHeroes', this.superHeroes);
      } else {
        this.resultMessage = "No Data Entered!";
      }
    },
  },
  mounted() {
    return this.superHeroes = this.$store.state.superHeroes;
  }
};
</script>

