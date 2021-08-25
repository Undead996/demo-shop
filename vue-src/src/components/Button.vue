<template>
    <button v-on:click="this.listener">{{this.text}}</button>
</template>

<script>
export default {
    props: {
        text: String,
        listener: Function,
    }    
}
</script>

<style lang="scss" scoped>
button {
    background-color: #66C05D;
    color: white;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    border-radius: 30px;
    cursor: pointer;
    border: 2px solid white;
}
button:hover {
    color: #66C05D;
    background: white;
    border: 2px solid #66C05D;
}
</style>