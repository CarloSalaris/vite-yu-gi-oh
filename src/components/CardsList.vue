<script>
import SingleCard from './SingleCard.vue';

export default {
    name: 'CardsList',
    components: {
        SingleCard
    }
}

</script>

<template>
    <section class="container bg-white p-5">

        <div class="container">
            <!-- Card esempio statica -->
            <SingleCard />
        </div>

    </section>
</template>
