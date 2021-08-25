<template>
    <div class='product' :class="{'product-active': this.$store.state.inBasket[this.product.id]}">
        <h3 class='product-title'>{{this.product.name}}</h3>
        <img class='product-img' :src="require(`../assets/products/${product.img}`)" alt='cat'>
        <p class='product-desc'>{{this.product.desc}}</p>
        <p class='product-price'>Price: {{this.product.price}} {{this.product.t}}</p>
        <div v-if="this.$store.state.inBasket[this.product.id]" class='product-btns'>
            <Button :listener=" () => this.RemoveFromBasket(this.product.id)" text="Cancel"/>
        </div>
        <div v-else class='product-btns'>
            <Button :listener="this.addProduct" text="To Basket"/>
            <Button :listener="this.ByNow" text="Buy Now"/>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    components: {
        Button,
    },
    props: {
        product: Object,
    },
    methods: {
        addProduct() {
            this.$store.commit('ADD_TO_BASKET', this.product);
        },
        RemoveFromBasket:function (id) {
            this.$store.commit('REMOVE_FROM_BASKET', id);
        },
        ByNow() {
            this.$store.commit('ADD_TO_BASKET', this.product);
            this.$store.dispatch('act_SHOW_BASKET');
        }
    }
}
</script>

<style lang="scss">
.product {
    width: 20rem;
    padding: 1rem;
    margin-bottom: 2rem;
    text-align: center;
    &-active {
        background: rgb(210, 248, 210);
    }
    &-title {
        color: black;
        font-size: 2rem;
        text-transform: uppercase;
    }
    &-img {
        width: 15rem;
    }
    &-desc {
        max-width: 15rem;
        margin: auto;
        padding: 1rem;
        color: black;
    }
    &-price {
        color: black;
    }
    &-btns {
        padding-top: 1rem;
        max-width: 15rem;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
}
</style>