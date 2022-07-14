
<template>
  <!-- TODO sort out the button changing to regenerate -->
  <button @click="selectHeroes" class="button"><span v-if="selectedHeroes.firstHero == null && selectedHeroes.secondHero == null">Compare Heroes</span><span v-else>Regenerate</span></button>
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
      try {
        let res = await axios({
          url: `${
            "https://superheroapi.com/api.php/" + this.accessToken + "/search/a"
          }`,
          method: "get",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.data == null) {
          console.log("no results");
          return (this.superHeroArray = null);
        } else {
          return (this.superHeroArray = res.data.results);
        }
      } catch (err) {
        console.error(err);
      }
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
      try {
        this.loading = true;
        let firstRes = await axios({
          url: `${"https://superheroapi.com/api.php/" + this.accessToken + "/" + first}`,
          method: "get",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (firstRes.data == null) {
          console.log("no results");
          return (this.firstHero = null);
        } else {
          if(firstRes.data.powerstats.combat == null) {
            await this.selectHeroes();
          } else {
            this.selectedHeroes.firstHero = firstRes.data;
            console.log(this.selectedHeroes.firstHero);
          }
        }

        let secondRes = await axios({
          url: `${"https://superheroapi.com/api.php/" + this.accessToken + "/" + second}`,
          method: "get",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (secondRes.data == null) {
          console.log("no results");
          return (this.selectedHeroes.secondHero = null);
        } else {
          if(secondRes.data.powerstats.combat == null) {
            await this.selectHeroes();
          } else {
            this.selectedHeroes.secondHero = secondRes.data;
            console.log(this.selectedHeroes.secondHero);
          }
        }
        this.loading = false;
        return 'success';
      } catch (err) {
        console.error(err);
      }
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

