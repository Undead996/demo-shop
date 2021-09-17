<template>
    <div class='product' :class="{'product-active': this.$store.state.inBasket[this.product.id]}">
        <div class='product-wrapper'>
            <div class='product-img'>
                <img v-on:click="this.ShowDetails(this.product.id)" :src="require(`../assets/products/${product.img}`)" alt='cat'>
            </div>
            <div class='product-description'>
                <h3 class='product-description-title'>{{this.product.name}}</h3>
                    <StarReit v-if="this.product.reit" :product="this.product"/>
                <p class='product-description-price'>{{this.product.price}} {{this.product.t}}</p>
            </div>
            <div v-if="this.$store.state.inBasket[this.product.id]" class='product-btns'>
                <Button :listener=" () => this.RemoveFromBasket(this.product.id)" text="Убрать"/>
                <div class='product-btns-spot'>
                    <span v-on:click="this.ByNow">Оформить заказ</span>
                </div>
            </div>
            <div v-else class='product-btns'>
                <Button :listener="this.addProduct" text="В корзину"/>
                <div class='product-btns-spot'>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import StarReit from '@/components/StarReit.vue'

export default {
    components: {
        Button,
        StarReit,
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
        ShowDetails:function (id) {
            this.$store.dispatch('act_SHOW_LIGHTBOX', id);
        },
        ByNow() {
            this.$store.dispatch('act_SHOW_BASKET');
        }
    }
}
</script>

<style lang="scss">
@import "@/scss_variables/variables";
.product {
    width: 15rem;
    margin-bottom: 2rem;
    text-align: center;
    padding: 1rem;
    position: relative;
    @media (max-width: 1200px) {
        width: 17rem;
    }
    @media (max-width: 1020px) {
        width: 20rem;
    }
    @media (max-width: 755px) {
        width: 16rem;
    }
    @media (max-width: 605px) {
        width: 20rem;
    }
    &-wrapper {
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        height: 100%;
    }
    &-description {
        padding: 1.5rem;
        flex: 1 1 auto;
        &-title {
            color: black;
            font-size: 1rem;
            text-transform: uppercase;
        }
        &-price {
            margin-top: 0.5rem;
            line-height: 1.2;
            color: black;
        }
    }
    &-img {
        overflow: hidden;
        img {
            width: 100%;
            display: block;
            border-top-left-radius: calc(0.25rem - 1px);
            border-top-right-radius: calc(0.25rem - 1px);
            transition: $def-transition;
        }
        img:hover {
            transform:scale(1.2, 1.2);
            cursor: pointer;
        }
    }
    &-btns {
        padding: 0 1.5rem 1.5rem;
        max-width: 15rem;
        margin: auto;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 6rem;
        &-spot {
            font-size: 1rem;
            cursor: pointer;
            color: $prod-href;
        }
        button {
            width: 8rem;
        }
    }
}
</style>