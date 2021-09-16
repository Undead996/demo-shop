<template>
    <div class='product' :class="{'product-active': this.$store.state.inBasket[this.product.id]}">
        <div class='product-wrapper'>
            <div class='product-img'>
                <img :src="require(`../assets/products/${this.product.img}`)" alt='cat'>
            </div>
            <div class='product-detail'>
                <div class='product-close'>
                    <Button :listener="() => this.ShowDetails('')" text="&#10006;"/>
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
        ByNow() {
            this.$store.commit('ADD_TO_BASKET', this.product);
            this.$store.dispatch('act_SHOW_BASKET');
        },
        ShowDetails:function (id) {
            this.$store.commit('SHOW_PRODUCT_DETAIL', id);
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss_variables/variables";
.product {
    z-index: 2000;
    position: absolute;
    background: white;
    width: 44rem;
    height: 21rem;
    margin-bottom: 2rem;
    text-align: center;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    box-shadow: 6px 6px 6px $font-semidark;
    @media (max-width: 1200px) {
        width: 30rem;
    }
    @media (max-width: 1020px) {
        width: 30rem;
    }
    @media (max-width: 755px) {
        width: 30rem;
    }
    @media (max-width: 605px) {
        width: 30rem;
    }
    &-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 100%;
        border: none;
        justify-content: space-between;
    }
    &-description {
        flex: 0;
    }
    &-detail {
        flex: 2;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    &-close {
        text-align: right;
    }
    &-img {
        flex: 5;
    }
    &-btns {
        margin: 0 auto;
        height: 5rem;
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