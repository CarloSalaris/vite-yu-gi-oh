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

        <div class="row justify-content-center">
            <!-- Card esempio statica -->
            <SingleCard v-for="singleCard in store.cardsList" :key="singleCard.id" :details="singleCard" />
        </div>

    </section>
</template>
