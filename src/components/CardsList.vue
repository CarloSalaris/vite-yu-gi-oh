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
    },
    computed: {
    }
}

</script>

<template>
    <section class="container bg-white p-5">

        <div class="row justify-center">
            <div class="cardCounter p-2 text-white">Found {{ store.cardsList.length }} cards </div>
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
