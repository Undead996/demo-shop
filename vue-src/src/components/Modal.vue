<template>
    <transition appear name="show-anim">
    <div class='modal'>
        <div class='modal-content'>
            <Basket v-if="this.$store.state.showBasket" />
            <ProductLightbox v-else-if="this.$store.state.showLightbox" />
            <Result v-else-if="this.$store.state.payResult" />
        </div>
    </div>
    </transition>
</template>

<script>
import Basket from '@/components/Basket.vue'
import ProductLightbox from '@/components/ProductLightbox.vue'
import Result from '@/components/Result.vue'

export default {
    components: {
        Basket,
        ProductLightbox,
        Result,
    }    
}
</script>

<style lang="scss" scoped>
@import "@/scss_variables/variables";
.modal {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 3000;
    overflow-y: scroll;
    background-color: $font-semidark;
    &-content {
        margin: 3rem auto;
        width: max-content;
        text-align: right;
        button {
            margin-bottom: 1rem;
            position: absolute;
            font-size: 1.2rem;
        }
    }
}
</style>