<template>
    <div class="basket">
        <h2>Basket</h2>
        <div v-if="Object.keys(this.$store.state.inBasket).length > 0" class="basket-products">
            <div :key="item.id" v-for="item in this.$store.state.inBasket" class="single">
                <div class="single-img">
                    <img :src="require(`../assets/products/${item[0].img}`)" alt='cat'>
                </div>
                <p class="single-name"> Name: {{item[0].name}} </p>
                <p class="single-price"> Price: {{item[0].price}} {{item[0].t}} </p>
                <p class="single-id"> ID: {{item[0].id}}</p>
                <div class='single-actions'>
                    <Button :listener="() => this.RemoveFromBasket(item[0].id)" text='Remove'/>
                </div>
            </div>
            <div class="single total">
                <p> Total: {{this.total}} </p>
                <Button :listener="this.sendToFrameTest" text='Buy' class='big'/>
            </div>
        </div>
        <div v-else class="basket-products">
            <div class='single'>
                <h2>Basket is empty</h2>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import openWidget from '@/widget/widget.class.js';

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
.basket {
    background: antiquewhite;
    text-align: center;
    padding: 1rem;
    border: solid #66C05D 1px;
    border-radius: 10%;
    background: white;
    overflow-y: auto;
    &-products {
        margin-top: 0.5rem;
    }
    .single {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        &-img {
            flex: 1;
            img {
                max-width: 70px;
                border-radius: 50%;
            }
        }
        &-name {
            flex: 1;
        }
        &-price {
            flex: 1;
        }
        &-actions {
            flex: 1,
        }
        align-items: center;
    }
    .total {
        padding: 1rem;
        justify-content: space-around;
        font-size: 2rem;
        .big {
            font-size: 2rem;
        }
    }
}
</style>