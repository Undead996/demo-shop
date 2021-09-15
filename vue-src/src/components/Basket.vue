<template>
    <div class="basket">
        <h2>КОРЗИНА</h2>
        <div v-if="Object.keys(this.$store.state.inBasket).length > 0" class="basket-products">
            <div :key="item.id" v-for="item in this.$store.state.inBasket" class="single">
                <div class="single-img">
                    <img :src="require(`../assets/products/${item[0].img}`)" alt='cat'>
                </div>
                <div class='single-data'>
                    <p class="single-data-name">{{item[0].name}} </p>
                    <p class="single-data-price">{{item[0].price}} {{item[0].t}} </p>
                    <p class="single-data-id"> ID: {{item[0].id}}</p>
                    <div class='single-data-actions'>
                        <Button :listener="() => this.RemoveFromBasket(item[0].id)" text='Убрать'/>
                    </div>
                </div>
            </div>
            <div class="single total">
                <p>Итог: {{this.total}} </p>
                <Button :listener="this.sendToFrameTest" text='Купить' class='big'/>
            </div>
        </div>
        <div v-else class="basket-products">
            <div class='single'>
                <h2>Корзина пуста</h2>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import {openWidget} from '@/widget/widget.class.js';

export default {
    components: {
        Button
    },
    computed: {
        total() {
            return this.$store.getters.get_TOTAL_SUMM;
        }
    },
    methods: {
        RemoveFromBasket(id) {
            this.$store.commit('REMOVE_FROM_BASKET', id);
        },
        sendToFrameTest() {
            openWidget({frame_id: 'test_frame',
                        frame_name: 'to_pay',
                        pay_params: {shopId: '00000001',
                                    shop: `Оплата на ${window.location.host}`,
                                    summ: this.total,
                                    prop: {
                                        param:'value',
                                    }},
                        onSuccess: function (result) {
                            console.log('success', result);
                        },
                        onFail: function (why, result) {
                            console.log('fail', why, result);
                        }})
            this.$store.dispatch('act_SHOW_BASKET');
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/scss_variables/variables";
.basket {
    text-align: left;
    overflow-y: auto;
    &-products {
        margin-top: 0.5rem;
    }
    .single {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-bottom: 1rem;
        padding: 1rem 0.25rem;
        border-top: 1px solid $background-dark;
        border-bottom: 1px solid $background-dark;
        &-img {
            flex: 1;
            img {
                border-radius: 50%;
                max-width: 90px;
                @media (max-width: 625px) {
                    max-width: 140px;
                }
            }
        }
        &-data {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            flex: 4;
            align-items: center;
            &-name {
                flex: 2;
            }
            &-price {
                flex: 1;
            }
            &-id {
                flex: 1
            }
            &-actions {
                flex: 2,
            }
            @media (max-width: 625px) {
                flex-direction: column;
            }
        }
        @media (max-width: 350px) {
            flex-direction: column;
        }
        align-items: center;
    }
    .single:last-child {
        border: none;
    }
    .total {
        justify-content: space-around;
        font-size: 2rem;
        .big {
            font-size: 1.5rem;
        }
    }
}
</style>