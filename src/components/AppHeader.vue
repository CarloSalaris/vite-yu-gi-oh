<script>
export default {
    name: 'AppHeader',
    props: [
        'message'
    ]
}
</script>

<template>
    <header class="bg-white p-3 d-flex align-items-center">
        <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" alt="Logo">
        </a>
        <h1>{{ message }}</h1>
    </header>
</template>

<style lang="scss" scoped>
header a img {
    width: 70px;
}

h1 {
    display: inline-block;
    margin: 0 10px;
}
</style> 