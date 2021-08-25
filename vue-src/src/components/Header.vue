<template>
    <div class='header'>
        <h2 href='#' class='header-title'>CAT-SHOP</h2>
        <div class='header-nav'>
            <TopNav/>
            <div>
                <a v-on:click.prevent="this.$store.dispatch('act_SHOW_BASKET')" href='#'><img class='bask-img' src='@/assets/img/shopping-cart.svg'></a>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'

export default {
    components: {
        TopNav
    }
}
</script>

<style lang="scss">
.header {
    padding: 1.5rem;
    background-color: white;
    color: #66C05D;
    a {
        font-size: 1rem;
        margin-right: 1rem;
    }
    &-title {
        font-size: 2rem;
        border-bottom: solid #66C05D 2px;
    }
    &-nav {
        padding-top: 1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        .top-nav {
            padding-top: 0.5rem;
        }
    }
    .bask-img {
        width: 2.2rem;
    }
}
</style>
