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
      <div class="card-image">
        <img :src="`${hero.image.url}`" class="hero-image" />
      </div>
      <div class="card-intro">
        {{ hero.name }}
        <br />
        Appearance:
        <br />
        Eye Colour: {{ hero.appearance["eye-color"] }}
        <br />
        Gender: {{ hero.appearance.gender }}
        <br />
        Hair Colour: {{ hero.appearance["hair-color"] }}
        <br />
        Height: {{ hero.appearance.height[0] }} -
        {{ hero.appearance.height[1] }}
        <br />
        Race: {{ hero.appearance.race }}
        <br />
        Weight: {{ hero.appearance.weight[0] }} -
        {{ hero.appearance.weight[1] }}
        <br />
      </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
h1 {
  font-family: "Roboto", sans-serif;
  color: white;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.searchInput {
  padding: 10px 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
}

.search-message {
  color: white;
  font-style: italic;
  margin-bottom: 20px;
}

.cards {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.card {
  background: white;
  max-width: 250px;
  width: 25%;
  border-radius: 5px;
  margin: 1rem;
}

.card-intro {
  text-align: left;
  padding: 0 1rem;
}

.searchInput:focus {
  border: none;
  text-decoration: none;
  outline: none;
}

.card-image {
  width: 100%;
}

.hero-image {
  width: 100%;
  max-width: 250px;
  max-height: 333px;
  height: auto;
}

.searchButton {
  padding: 10px 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  background: black;
  color: white;
}
</style>
