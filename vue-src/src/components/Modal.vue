<template>
    <div class='modal'>
        <div class='modal-content'>
            <Button :listener="() => {this.$store.dispatch('act_SHOW_BASKET')}" text="Close"/>
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
.modal {
    position: fixed;
    left: 0;
    width: 100%;
    top: 0;
    z-index: 3000;
    &-content {
        margin: 3rem auto;
        width: 50rem;
        text-align: right;
        button {
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }
    }
}
</style>