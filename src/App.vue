<template>
  <nav class="top-nav">
    <router-link to="/" class="nav-item">Home</router-link>
    <router-link to="/top-trump" class="nav-item">Hero Battle</router-link>
  </nav>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
  font-family: "Roboto", sans-serif;
}

p {
  font-family: "Roboto", sans-serif;
}

.searchInput {
  padding: 10px 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
}

.search-message {
  color: white;
  font-weight: bold;
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
  max-width: 350px;
  border-radius: 10px;
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
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.button {
  background: black;
  font-weight: bold;
  margin: 1rem;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: all .2s ease-in;
  color: #42b983;
  border: 1px solid transparent;
}

.button:hover {
  background-color: #42b983;
  color: black;
  border: 1px solid black;
}

.searchButton {
  padding: 10px 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid transparent;
  background: black;
  color: #42b983;
  font-weight: bold;
  transition: all .2s ease-in;
  cursor: pointer;
}

.searchButton:hover {
  background-color: #42b983;
  color: black;
  border: 1px black solid;
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
  border: 1px solid transparent;
}

.nav-item:hover {
  background-color: #42b983;
  color: black;
  border: 1px solid black;
}

.loader-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.loader {
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #42b983; /* Blue */
  border-radius: 50%;
  width: 15px;
  height: 15px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(25px);
  opacity: 0;
}

.hidden {
  visibility: hidden;
}


.show {
  visibility: visible;
}

</style>
