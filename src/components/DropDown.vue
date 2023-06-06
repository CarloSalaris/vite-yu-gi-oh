<script>
import { store } from "../store.js";

export default {
    name: 'DropDown',
    data() {
        return {
            store,
        }

    }
}

</script>

<template>
    <div class="dropdown">
        <button class="btn btn-secondary btn-sm dropdown-toggle my-3 bg-white text-black" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Alien
        </button>
        <ul class="dropdown-menu">
            <li v-for="item in store.archList"><a class="dropdown-item" href="#">{{ item.archetype_name }}</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.dropdown-menu {
    max-height: 250px;
    overflow: scroll;
}
</style>