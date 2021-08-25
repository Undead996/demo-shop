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
            let cont = document.createElement('DIV');
            cont.id = 'testDiv';
            cont.style = 'z-index: 9997; text-align: left; height: 100%; width: 100%; position: fixed; left: 0px; top: 0px; transition: opacity 0.15s ease 0s; overflow: auto; pointer-events: all; opacity: 1;';
            let frame = '<iframe allowpaymentrequest="" name="testFrame" src="http://localhost:80/index.php" class=" with-appled" style="height: 100% !important; width: 100% !important; position: fixed !important; z-index: 9999 !important; border: 0px !important; inset: 0px !important; max-height: 100% !important;"></iframe>'
            cont.innerHTML = frame; 
            document.querySelector('body').append(cont);  
            let form = document.createElement('FORM');
            form.target = 'testFrame';
            form.action = 'http://localhost:80/index.php';
            form.method = 'post';
            form.innerHTML = '<input type="hidden" name="params" value="Some JSON"/><input type="submit">';
            document.querySelector('body').append(form); 
            form.style.display = 'none';
            form.submit(); 
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