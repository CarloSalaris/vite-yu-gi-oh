<script>

export default {
    name: 'DropDown',
}

</script>

<template>
    <div class="dropdown">
        <button class="btn btn-secondary btn-sm dropdown-toggle my-3 bg-white text-black" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            Alien
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>
</template>