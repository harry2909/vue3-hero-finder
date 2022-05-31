<template>
  <button @click="selectHeroes">Compare Heroes</button>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      superHeroArray: null,
      selectedHeroes: null,
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
          return (this.superHeroArray = JSON.stringify(res.data.results));
        }
      } catch (err) {
        console.error(err);
      }
    },
    selectHeroes() {
      const min = Math.ceil(1);
      const max = Math.floor(this.superHeroArray.length - 1);
      const firstHero = Math.floor(Math.random() * (max - min + 1)) + min;
      const secondHero = Math.floor(Math.random() * (max - min + 1)) + min;
      return this.compareHeroes(firstHero, secondHero);
    },
    compareHeroes(first, second) {
      if (first && second) {
        const firstHero = this.superHeroArray.find(e => e.id === first);
        console.log(firstHero);
        console.log(this.superHeroArray);
      }
      console.log(this.selectedHeroes);
    },
  },
  mounted() {
    this.getHeroes();
  },
};
</script>

