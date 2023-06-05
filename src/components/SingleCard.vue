<script>

export default {
    name: 'SingleCard',
    props: {
        details: Object,
    }
}

</script>

<template>
    <!-- Card esempio statica -->
    <div class="text-center p-0 m-2 col-lg-2 col-md-3 col-sm-5">
        <img :src="details.card_images[0].image_url" alt="Immagine card">
        <div class="p-2">
            <h6 class="text-white">{{ details.name.toUpperCase() }}</h6>
            <div>{{ details.archetype }}</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
div {
    background-color: #d48f38;
}
</style>