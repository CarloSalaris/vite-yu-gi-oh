<script>
export default {
    name: 'AppHeader',
    props: [
        'message'
    ]
}
</script>

<template>
    <header class="bg-white p-3">
        <a href="#">
            LOGO
            <img src="" alt="">
        </a>
        <h1>{{ message }}</h1>
    </header>
</template>

<style lang="scss" scoped>
h1 {
    display: inline-block;
    margin: 0 10px;
}
</style> 