<script>
import { store } from "./store.js";
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';



export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {
      axios.get(store.apiURL)
        .then(res => {
          store.cardsList = res.data.data
          console.log(store.cardsList);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getCards();
  }

}
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
