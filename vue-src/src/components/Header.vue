<template>
    <div class='header'>
        <div class='main'>
            <div class='header-nav'>
                <TopNav/>
                <div>
                    <Button class='bask' :listener="this.openBasket" text="Корзина">
                        <span class='icon'>Корзина<span class='bask-counter'>{{Object.keys(this.$store.state.inBasket).length}}</span></span>
                    </Button>
                </div>
            </div>
        </div>
        <div class='header-dark'>
            <div class='main'>
                <h1>Магазин по продаже котов</h1>
                <p>Ну не настоящих, конечно. Хотя они такие милые ))</p>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import Button from '@/components/Button.vue'

export default {
    components: {
        TopNav,
        Button,
    },
    methods: {
        openBasket() {
            this.$store.dispatch('act_SHOW_BASKET');
        }
    },
}
</script>

<style lang="scss">
@import "@/scss_variables/variables";
.header {
    color: rgba(0, 0, 0, 0.9);
    background-color: $background-light;
    a {
        font-size: 1rem;
        margin-right: 1rem;
    }
    &-title {
        font-size: 2rem;
        border-bottom: solid #66C05D 2px;
    }
    &-nav {
        height: 3.5rem;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
    }
    &-dark {
        background-color: $background-dark;
        color: $font-light;
        text-align: center;
        min-height: 19rem;
        display: flex;
        align-items: center;
        h1 {
            font-size: 3.5rem;
        }
        p {
            font-size: 1.5rem;
            color: $font-semilight;
        }
        @media (max-width: 885px) {
            h1 {
                font-size: 2.5rem;
            }
            p {
                font-size: 1.2rem;
            }
        }
        @media (max-width: 630px) {
            h1 {
                font-size: 2rem;
            }
            p {
                font-size: 1rem;
            }
        }
    }
    .bask {
        .icon::before {
            margin-right: 0.25rem;
            content: "\f23d";
            display: inline-block;
            font-family: bootstrap-icons !important;
            font-style: normal;
            font-weight: normal !important;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            vertical-align: -.125em;
            -webkit-font-smoothing: antialiased;
        }
        &-counter {
            margin-left: 0.25rem;
            border-radius: 35%;
            padding: 0.1rem 0.25rem;
            background-color: $background-dark;
            color: $font-light;
        }
    }
}
</style>
