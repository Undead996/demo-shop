<template>
    <div class='catalog'>
        <Product :product="product" :key='product.id' v-for="product in this.$store.state.products"/>
    </div>
</template>

<script>
import Product from '@/components/Product.vue';
export default {
    components: {
        Product,
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss_variables/variables";
.catalog {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 4rem 0;
    justify-content: space-around;
    background-color: white;
}
</style>