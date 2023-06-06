<script>
import { store } from "../store.js";
import SingleCard from './SingleCard.vue';

export default {
    name: 'CardsList',
    components: {
        SingleCard,
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <section class="container bg-white p-5">

        <div class="row justify-content-between">
            <div class="cardCounter px-1 py-2 mx-1 text-white">Found {{ store.cardsList.length }} cards </div>
            <!-- Card esempio statica -->
            <SingleCard v-for="singleCard in store.cardsList" :key="singleCard.id" :details="singleCard" />
        </div>

    </section>
</template>

<style lang="scss" scoped>
.cardCounter {
    background-color: #212529;
}
</style>
