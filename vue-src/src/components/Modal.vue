<template>
    <div class='modal'>
        <div class='modal-content'>
            <Button :listener="() => {this.$store.dispatch('act_SHOW_BASKET')}" text="&#10006;"/>
            <Basket/>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Basket from '@/components/Basket.vue'

export default {
    components: {
        Basket,
        Button
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
    &-content {
        margin: 3rem auto;
        width: 50rem;
        text-align: right;
        background: $background-light;
        border: 1px solid $btn-color;
        border-radius: 0.25rem;
        padding: 1rem;
        @media (max-width: 920px) {
            width: 95%;
        }
        button {
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }
    }
}
</style>