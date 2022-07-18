import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import router from './router/'

const store = createStore({
    state() {
        return {
            superHeroes: null
        }
    },
    mutations: {
        storeHeroes(state, value) {
            state.superHeroes = value;
        }
    }
})

createApp(App).use(store).use(router).mount('#app')
