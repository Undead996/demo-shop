<template>
    <button v-on:click="this.listener"><slot>{{this.text}}</slot></button>
</template>

<script>
export default {
    props: {
        text: String,
        listener: Function,
    },
}
</script>

<style lang="scss" scoped>
@import "@/scss_variables/variables";
button {
    color: $btn-color;
    background-color: transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    border: 1px solid $btn-color;
    font-weight: 400;
    line-height: 1.5;
    transition: $def-transition;
}
.disabled {
    color: $font-semidark;
    cursor: default;
}
button:not(.disabled):hover {
    background-color: $btn-color;
    color: white;
}
</style>