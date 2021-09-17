<template>
    <div class='product' :class="{'product-active': this.$store.state.inBasket[this.product.id]}">
        <div class='product-lb'>
            <p v-on:click="this.ShowEnother(false)">&#10148;</p>
        </div>
        <div class='product-wrapper'>
            <div class='product-img'>
                <transition appear name="show-anim">
                    <img :key="this.product.id" :src="require(`@/assets/products/${this.product.img}`)" alt='cat'>
                </transition>
            </div>
            <div class='product-detail'>
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
        <div class='product-lb'>
            <div class='product-close'>
                <Button :listener="() => this.ShowDetails('')" text="&#10006;"/>
            </div>
            <p v-on:click="this.ShowEnother(true)">&#10148;</p>
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
    computed: {
        product(){
            let product = null;
            this.$store.state.products.forEach(e => {
                if (e.id == this.$store.state.prodDetail) {
                    product = e;
                }
            });
            return product;
        }
    },
    methods: {
        addProduct() {
            this.$store.commit('ADD_TO_BASKET', this.product);
        },
        RemoveFromBasket:function (id) {
            this.$store.commit('REMOVE_FROM_BASKET', id);
        },
        ByNow() {
            this.$store.dispatch('act_SHOW_LIGHTBOX', this.product.id);
            this.$store.dispatch('act_SHOW_BASKET');
        },
        ShowDetails:function (id) {
            this.$store.dispatch('act_SHOW_LIGHTBOX', id);
        },
        FindNext:function (to) {
            let id = null;
            let length = Object.keys(this.$store.state.products).length -1;
            this.$store.state.products.forEach((e, key, arr) => {
                if (e.id == this.product.id) {
                    if (to && length == key) {
                        id = arr['0'].id;
                    } else if (to && length > key) {
                        id = arr[key+1].id;
                    } else if (!to && key == 0) {
                        id = arr[length].id;
                    } else if (!to) {
                        id = arr[key-1].id;
                    }
                }
            });
            return id;
        },
        ShowEnother:function(to) {
            this.$store.commit('SHOW_PRODUCT_DETAIL', this.FindNext(to));
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss_variables/variables";
.product {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 63rem;
    height: 27rem;
    margin: 0;
    text-align: center;
    border: none;
    padding: 0;
    background: transparent;
    &-lb {
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
        color: $background-light;
        position: relative;
        p { 
            font-size: 3rem;
            transition: $def-transition;
        }
        p:hover {
            color: $background-dark;
        }
    }
    &-lb:first-child {
        transform: rotate(180deg);
    }
    &-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 100%;
        border: none;
        justify-content: space-between;
        flex: 13;
        padding: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.125);
        box-shadow: 6px 6px 6px $font-semidark;
        background: $background-light;
        border: 1px solid $btn-color;
        border-radius: 0.25rem;
    }
    &-description {
        flex: 0;
    }
    &-detail {
        flex: 4;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    &-close {
        position: absolute;
        top: 0;
        button {
            background: $background-light;
        }
        button:hover {
            background: $background-dark;
        }
    }
    &-img {
        flex: 10;
        position: relative;
        img {
            position: absolute;
        }
        img:hover {
            transform: none;
        }
    }
    &-btns {
        margin: 0 auto;
    }
    @media (max-width: 1200px) {
        width: 62rem;
    }
    @media (max-width: 1020px) {
        width: 46rem;
        height: 20rem;
    }
    @media (max-width: 755px) {
        width: 30rem;
        height: max-content;
        &-wrapper {
            flex-direction: column;
        }
    }
    @media (max-width: 520px) {
        width: 20rem;
    }
}
</style>