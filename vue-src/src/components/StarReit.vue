<template>
    <div class='reit-container'>
        <div class="reit" :key="i" v-for="i in this.reitArr"></div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
    },
    computed: {
        reitArr() {
            let arr = [];
            for (let i = 0; i < this.product.reit; i++) {
                arr.push(i);
            }
            return arr;
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/scss_variables/variables";
.reit-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: $reit-color;
}
.reit::before {
    content: "\f586";
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
</style>