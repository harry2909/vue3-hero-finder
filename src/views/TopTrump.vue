
<template>
  <button @click="selectHeroes">Compare Heroes</button>
  <div class="cards" v-if="superHero !== null">
    <div class="card">
      <div class="card-image">
<!--        <img-->
<!--            :src="`${superHero.image.url ? superHero.image.url : ''}`"-->
<!--            class="hero-image"-->
<!--        />-->
      </div>
      <div class="card-hero-name">
<!--        <h3 class="hero-name-header">{{ superHero.name }}</h3>-->
      </div>
      <div class="card-intro">
        <div class="hero-info-header">
<!--          <accordion>-->
<!--            <accordion-item>-->
<!--              <template v-slot:accordion-trigger>-->
<!--                <h3>Appearance</h3>-->
<!--              </template>-->
<!--              <template v-slot:accordion-content>-->
<!--                Eye Colour: <span class="accordion-text">{{ superHero.appearance["eye-color"] }}</span><br><br>-->
<!--                Gender: <span class="accordion-text">{{ superHero.appearance.gender }}</span><br><br>-->
<!--                Hair Colour: <span class="accordion-text">{{ superHero.appearance["hair-color"] }}</span><br><br>-->
<!--                Height: <span class="accordion-text">{{ superHero.appearance.height[0] }} / {{ superHero.appearance.height[1] }}</span><br><br>-->
<!--                Race: <span class="accordion-text">{{ superHero.appearance.race }}</span><br><br>-->
<!--                Weight: <span class="accordion-text">{{ superHero.appearance.weight[0] }} / {{ superHero.appearance.weight[1] }}</span>-->
<!--              </template>-->
<!--            </accordion-item>-->
<!--            <accordion-item>-->
<!--              <template v-slot:accordion-trigger>-->
<!--                <h3>Biography</h3>-->
<!--              </template>-->
<!--              <template v-slot:accordion-content>-->
<!--                Aliases: <span class="accordion-text" v-for="alias in superHero.biography.aliases" :key="alias">{{ alias }}, </span><br><br>-->
<!--                Alignment: <span class="accordion-text">{{ superHero.biography.alignment }}</span><br><br>-->
<!--                Alter Egos: <span class="accordion-text">{{ superHero.biography["alter-egos"] }}</span><br><br>-->
<!--                First Appearance: <span class="accordion-text">{{ superHero.biography["first-appearance"] }}</span><br><br>-->
<!--                Full Name: <span class="accordion-text">{{ superHero.biography["full-name"] }}</span><br><br>-->
<!--                Place of Birth: <span class="accordion-text">{{ superHero.biography["place-of-birth"] }}</span><br><br>-->
<!--                Publisher: <span class="accordion-text">{{ superHero.biography.publisher }}</span>-->
<!--              </template>-->
<!--            </accordion-item>-->
<!--            <accordion-item>-->
<!--              <template v-slot:accordion-trigger>-->
<!--                <h3>Connections</h3>-->
<!--              </template>-->
<!--              <template v-slot:accordion-content>-->
<!--                Group Affiliation: <span class="accordion-text">{{ superHero.connections["group-affiliation"] }}</span><br><br>-->
<!--                Relatives: <span class="accordion-text">{{ superHero.connections.relatives }}</span>-->
<!--              </template>-->
<!--            </accordion-item>-->
<!--            <accordion-item>-->
<!--              <template v-slot:accordion-trigger>-->
<!--                <h3>Work</h3>-->
<!--              </template>-->
<!--              <template v-slot:accordion-content>-->
<!--                Base: <span class="accordion-text">{{ superHero.work.base }}</span><br><br>-->
<!--                Occupation: <span class="accordion-text">{{ superHero.work.occupation }}</span>-->
<!--              </template>-->
<!--            </accordion-item>-->
<!--          </accordion>-->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      superHeroArray: null,
      firstHero: null,
      secondHero: null,
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
      const min = 0;
      const max = Math.floor(this.superHeroArray.length - 1);
      const firstHero = Math.floor(Math.random() * (max - min + 1)) + min;
      const secondHero = Math.floor(Math.random() * (max - min + 1)) + min;
      this.getSelectedHeroes(firstHero, secondHero);
      console.log(this.firstHero + this.secondHero);
    },
    async getSelectedHeroes(first, second) {
      try {
        let firstRes = await axios({
          url: `${
              "https://superheroapi.com/api.php/" + this.accessToken + "/" + first
          }`,
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
          this.firstHero = firstRes.data;
          console.log(this.firstHero);
        }

        let secondRes = await axios({
          url: `${
              "https://superheroapi.com/api.php/" + this.accessToken + "/" + second
          }`,
          method: "get",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (secondRes.data == null) {
          console.log("no results");
          return (this.secondHero = null);
        } else {
          this.secondHero = secondRes.data;
        }
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

