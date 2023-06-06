<script>

export default {
    name: 'SingleCard',
    props: {
        details: Object,
    }
}

</script>

<template>
    <!-- Single Card -->
    <div class="text-center p-2 col-lg-2 col-md-3 col-sm-5">
        <div class="singleCard">
            <a href="#">
                <img :src="details.card_images[0].image_url" alt="Immagine card">
                <div class="p-2">
                    <h6 class="text-white">{{ details.name.toUpperCase() }}</h6>
                    <div>{{ details.archetype }}</div>
                </div>
            </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.singleCard {
    background-color: #d48f38;
    height: 100%;
}
</style>