<template>
  <nav class="top-nav">
    <router-link to="/top-trump" class="nav-item">Top Trump Game</router-link>
    <router-link to="/" class="nav-item">Home</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
body {
  margin: 0 auto;
  background: #2f2f2f;
}

h1 {
  font-family: "Roboto", sans-serif;
  color: white;
}

h2 {
  font-family: "Roboto", sans-serif;
}

h3 {
  font-family: "Roboto", sans-serif;
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
  max-width: 300px;
  border-radius: 5px;
  margin: 1rem;
  height: 100%;
}

.card-intro {
  text-align: left;
  padding: 1rem 1rem;
  margin-top: -25px;
}

.card-hero-name {
  width: 100%;
  margin-top: -6px;
}

.hero-name-header {
  background: #6a6a6a;
  color: white;
  margin: 0;
  padding: 14px;
  letter-spacing: 2px;
  font-size: 20px;
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
  height: auto;
  object-fit: contain;
}

.searchButton {
  padding: 10px 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  background: black;
  color: #42b983;
  font-weight: bold;
  transition: all .2s ease-in;
  cursor: pointer;
}

.searchButton:hover {
  background-color: #42b983;
  color: black;
  border-radius: 1px solid black;
}

.accordion-text {
  color: #7cadac;
  font-weight: bold;
  text-transform: capitalize;
}

@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
    max-width: 400px;
  }
}

.top-nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
}

.nav-item {
  background: black;
  font-weight: bold;
  margin: 1rem;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: all .2s ease-in;
}

.nav-item:hover {
  background-color: #42b983;
  color: black;
  border-radius: 1px solid black;
}
</style>