<template>
  <transition name="slide-fade">
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
      <div class="card-intro">
        <div class="hero-info-header">
          <accordion>
            <accordion-item>
              <template v-slot:accordion-trigger>
                <h3>Appearance</h3>
              </template>
              <template v-slot:accordion-content>
                Eye Colour: <span class="accordion-text">{{ superHero.appearance["eye-color"] }}</span><br><br>
                Gender: <span class="accordion-text">{{ superHero.appearance.gender }}</span><br><br>
                Hair Colour: <span class="accordion-text">{{ superHero.appearance["hair-color"] }}</span><br><br>
                Height: <span class="accordion-text">{{ superHero.appearance.height[0] }} / {{ superHero.appearance.height[1] }}</span><br><br>
                Race: <span class="accordion-text">{{ superHero.appearance.race }}</span><br><br>
                Weight: <span class="accordion-text">{{ superHero.appearance.weight[0] }} / {{ superHero.appearance.weight[1] }}</span>
              </template>
            </accordion-item>
            <accordion-item>
              <template v-slot:accordion-trigger>
                <h3>Biography</h3>
              </template>
              <template v-slot:accordion-content>
                Aliases: <span class="accordion-text" v-for="alias in superHero.biography.aliases" :key="alias">{{ alias }}, </span><br><br>
                Alignment: <span class="accordion-text">{{ superHero.biography.alignment }}</span><br><br>
                Alter Egos: <span class="accordion-text">{{ superHero.biography["alter-egos"] }}</span><br><br>
                First Appearance: <span class="accordion-text">{{ superHero.biography["first-appearance"] }}</span><br><br>
                Full Name: <span class="accordion-text">{{ superHero.biography["full-name"] }}</span><br><br>
                Place of Birth: <span class="accordion-text">{{ superHero.biography["place-of-birth"] }}</span><br><br>
                Publisher: <span class="accordion-text">{{ superHero.biography.publisher }}</span>
              </template>
            </accordion-item>
            <accordion-item>
              <template v-slot:accordion-trigger>
                <h3>Connections</h3>
              </template>
              <template v-slot:accordion-content>
                Group Affiliation: <span class="accordion-text">{{ superHero.connections["group-affiliation"] }}</span><br><br>
                Relatives: <span class="accordion-text">{{ superHero.connections.relatives }}</span>
              </template>
            </accordion-item>
            <accordion-item>
              <template v-slot:accordion-trigger>
                <h3>Work</h3>
              </template>
              <template v-slot:accordion-content>
                Base: <span class="accordion-text">{{ superHero.work.base }}</span><br><br>
                Occupation: <span class="accordion-text">{{ superHero.work.occupation }}</span>
              </template>
            </accordion-item>
          </accordion>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import axios from "axios";
import Accordion from "../components/accordion-module";
import AccordionItem from "../components/accordion-item";

export default {
  // use composition API
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
            console.log("no results");
            return (this.superHero = null);
          } else {
            return (this.superHero = res.data);
          }
        } catch (err) {
          console.error(err);
        }
      }
    },
  },
  mounted() {
    this.getHero();
  },
  components: {
    Accordion,
    AccordionItem,
  },
};
</script>

