
<template>
  <!-- TODO sort out the button changing to regenerate -->
  <button @click="selectHeroes" class="button">Compare Heroes</button>
  <div v-if="loading" class="loader-container"><div class="loader"></div></div>
  <transition name="slide-fade">
  <div class="cards" v-if="selectedHeroes.firstHero !== null && selectedHeroes.secondHero !== null">
    <div class="card" v-for="(heroes, index) in this.selectedHeroes" :key="index">
        <div class="card-image">
          <img
              :src="`${heroes.image.url}`"
              @error='$event.target.src=require("@/assets/placeholder.jpg")'
              class="hero-image"
          />
        </div>
        <div class="card-hero-name">
          <h3 class="hero-name-header">{{ heroes.name }}</h3>
        </div>
      <div class="card-intro">
        <div class="hero-info-header">
        </div>
      </div>
      <div v-if="index === Object.keys(this.selectedHeroes).length - 1">{{ this.finished = true }}</div>
      </div>
    </div>
  </transition>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      superHeroArray: null,
      selectedHeroes: {
        firstHero: null,
        secondHero: null,
      },
      loading: false,
      accessToken: "121270947174101",
    };
  },
  methods: {
    async getHeroes() {
      await axios.get(`${"https://superheroapi.com/api.php/" + this.accessToken + "/search/a"}`)
          .then(response => {
            if (response.data == null) {
              console.log("no results");
              return (this.superHeroArray = null);
            } else {
              return this.superHeroArray = response.data.results;
            }
          }).catch(error => {
            console.log(error);
          })
    },
    async selectHeroes() {
      this.selectedHeroes.firstHero = null;
      this.selectedHeroes.secondHero = null;
      const min = 0;
      const max = Math.floor(this.superHeroArray.length - 1);
      const firstHero = Math.floor(Math.random() * (max - min + 1)) + min;
      const secondHero = Math.floor(Math.random() * (max - min + 1)) + min;
      await this.getSelectedHeroes(firstHero, secondHero);
      console.log(this.selectedHeroes.firstHero + this.selectedHeroes.secondHero);
    },
    // TODO refactor to use axios all with multiple requests
    async getSelectedHeroes(first, second) {
      this.loading = true;
      let endpoints = [
        `${"https://superheroapi.com/api.php/" + this.accessToken + "/" + first}`,
        `${"https://superheroapi.com/api.php/" + this.accessToken + "/" + second}`
      ];

      axios.all(endpoints.map((promise) => axios.get(promise))).then(
          axios.spread(async (firstHero, secondHero) => {
            if (firstHero.data == null) {
              console.log("no firstHero");
              return (this.firstHero = null);
            } else {
              if (firstHero.data.powerstats.combat == null) {
                await this.selectHeroes();
              } else {
                this.selectedHeroes.firstHero = firstHero.data;
                console.log(this.selectedHeroes.firstHero);
              }
            }
            if (secondHero.data == null) {
              console.log("no firstHero");
              return (this.firstHero = null);
            } else {
              if (secondHero.data.powerstats.combat == null) {
                await this.selectHeroes();
              } else {
                this.selectedHeroes.secondHero = secondHero.data;
                console.log(this.selectedHeroes.secondHero);
              }
            }
            this.loading = false;
            return 'success';
          })
      );
    },
    compareHeroes(first, second) {
      if (first && second) {
        const firstHero = this.superHeroArray.find(e => e.id === first);
        console.log(firstHero);
        console.log(this.firstHero + this.secondHero);
      }
      console.log(this.selectedHeroes);
    },
  },
  mounted() {
    this.getHeroes();
  },
};
</script>

