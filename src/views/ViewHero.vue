<template>
  <div class="cards" v-if="superHero !== null">
    <div class="card">
      <div class="card-image">
        <img
          :src="`${superHero.image.url ? superHero.image.url : ''}`"
          class="hero-image"
        />
      </div>
      <div class="card-hero-name">
        <h3 class="hero-name-header">{{ superHero.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      superHero: null,
      accessToken: "121270947174101",
    };
  },
  methods: {
    async getHero() {
      if (this.id !== "") {
        try {
          let res = await axios({
            url: `${
              "https://superheroapi.com/api.php/" +
              this.accessToken +
              "/" +
              this.id
            }`,
            method: "get",
            timeout: 8000,
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.data == null) {
              console.log('no results')
            return (this.superHero = null);
          } else {
            this.resultMessage = null;
            return (this.superHero = res.data);
          }
        } catch (err) {
          console.error(err);
        }
      }
    },
  },
  mounted() {
      this.getHero()
  }
};
</script>

