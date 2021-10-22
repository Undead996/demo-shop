<template>
    <div class="basket">
        <div class="basket-header">
            <div>
                <h2>{{this.result.title}}</h2>
                <p>{{this.result.description}}</p>
            </div>
            <Button :listener="() => {this.closeResult()}" text="&#10006;"/>
        </div>
        <div v-if="Object.keys(this.$store.state.inBasket).length > 0" class="basket-products">
            <div :key="item.id" v-for="item in this.$store.state.inBasket" class="single">
                <div class="single-img">
                    <img :src="require(`../assets/products/${item[0].img}`)" alt='cat'>
                </div>
                <div class='single-data'>
                    <p class="single-data-name">{{item[0].name}} </p>
                    <div class='single-data-actions'>
                        <Button class='disabled' v-bind:text="this.result.button"/>
                    </div>
                </div>
            </div>
            <div class="single total">
                <p>И не забудтье: кот сам себя не погладит!</p>
                <Button v-if="this.result.status" :listener="() => {this.repeat()}" text='Повторить' class='big'/>
                <Button :listener="() => {this.closeResult()}" text='Закрыть' class='big'/>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    components: {
        Button
    },
    computed: {
        result() {
            let res = this.$store.state.payResult;
            return {
                status: res.res['0'],
                button: res.res['0'] == '0' ? 'Оплачено' : 'Не оплачено',
                description: res.res['0'] == '0' ? 'Ваш кот будет ждать вас в условленном месте, сами знаете где!' : res.res['1'],
                title: res.res['0'] == '0' ? 'Поздравляем!': 'Ошибка!'
                };
        },
    },
    methods: {
        closeResult() {
            this.$store.commit('CLEAR_BASKET');
            this.$store.commit('PAY_RESULT', false);
            this.$store.commit('SHOW_MODAL');
        },
        repeat() {
            this.$store.commit('PAY_RESULT', false);
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
        div {
            p {
                color: $font-semidark;
            }
        }
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
        font-size: 1rem;
        margin-bottom: 0 !important;
        p {
            font-style: italic;
            color: $font-semidark;
        }
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