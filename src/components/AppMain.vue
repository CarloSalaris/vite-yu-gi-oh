<script>
import CardsList from './CardsList.vue';
import DropDown from './DropDown.vue';

export default {
    name: 'AppMain',
    components: {
        CardsList,
        DropDown,
    }
}

</script>

<template>
    <section class="container">
        <div class="container">
            <DropDown />
        </div>
        <CardsList />
    </section>
</template>