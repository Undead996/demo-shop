<template>
    <div>
        <div><h2 class='page-title'>Cats catalog</h2></div>
        <div class='catalog'>
            <div :key='product.id' v-for="product in this.$store.state.products">
                <Product :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
    components: {
        Product,
    }
}
</script>

<style lang="scss" scoped>
.page-title {
    text-transform: uppercase;
    font-size: 2rem;
    color: white;
    background-color: #66C05D;
    text-align: center;
    padding: 2rem;
}
.catalog {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: space-around;
    background-color: white;
}
</style>