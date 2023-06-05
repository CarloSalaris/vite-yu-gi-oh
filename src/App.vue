<script>
import { store } from "./store.js";
import axios from 'axios';
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
