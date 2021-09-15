<template>
    <div class='top-nav'>
        <a href="#">Демо-магазин</a>
        <a class='no-mobile' href="#">Магазин</a>
        <a class='no-mobile' href="#">Интеграция</a>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "@/scss_variables/variables";
    .top-nav {
        a {
            color: $font-semidark;
        }
        a:first-child {
            color: $font-dark;
            font-size: 1.2rem;
        }
        a:hover {
            color: $font-dark;
        }
    }
</style>