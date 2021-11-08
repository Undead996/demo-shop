<template>
    <div class="basket">
        <div class="basket-header">
            <h2>КОРЗИНА</h2>
            <Button :listener="() => {this.$store.dispatch('act_SHOW_BASKET')}" text="&#10006;"/>
        </div>
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
                <div class='single-img'>
                </div>
                <div class='single-data'>
                    <p>Итог: {{this.total}} </p>
                    <Button :listener="this.sendToFrameTest" text='Купить' class='big'/>
                </div>
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
            let context = this.$store;
            let pay_params = this.$store.state.sendData;
            pay_params['comment'] = `Оплата на ${window.location.host}`;
            pay_params['summ'] = this.total;
            openWidget({frame_id: 'test_frame',
                        frame_name: 'to_pay',
                        sign: 'some',
                        onSuccess: function (result) {
                            context.commit('PAY_RESULT', {res:result});
                            console.log(context.state);
                        },
                        onFail: function (why, result) {
                            context.commit('PAY_RESULT', {res:result, why:why});
                            console.log(context.state);
                        }});
            this.$store.commit('SHOW_BASKET');
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/scss_variables/variables";
.basket {
    text-align: left;
    overflow-y: auto;
    width: 50rem;
    padding: 1rem;
    background: $background-light;
    border: 1px solid $btn-color;
    border-radius: 0.25rem;
    @media (max-width: 920px) {
        width: 95%;
    }
    &-header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;
        margin-bottom: 3rem;
    }
    &-products {
        margin-top: 0.5rem;
    }
    .single {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-bottom: 1rem;
        padding: 1rem 0.25rem;
        &-img {
            flex: 1;
            img {
                max-width: 100px;
                @media (max-width: 625px) {
                    max-width: 140px;
                }
            }
        }
        &-data {
            flex: 4; 
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            &-name {
                flex: 2;
            }
            &-price {
                flex: 1;
            }
            &-id {
                flex: 1;
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
    .single:last-child, .single:first-child {
        border-top: 2px solid silver;
    }
    .single:first-child {
        padding-top: 2rem;
    }
    .total {
        justify-content: space-between;
        font-size: 2rem;
        margin-bottom: 0 !important;
        .big {
            font-size: 1.5rem;
            color: white;
            background-color: $btn-color;
        }
        .big:hover {
            color: $btn-color;
            background-color: transparent;
        }
    }
}
</style>