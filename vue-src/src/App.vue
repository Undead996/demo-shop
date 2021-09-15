<template>
<div>
  <div class='wrapper' :class="{'blur': this.$store.state.isBlur}">
    <Header/>
      <Catalog class='main'/>
    <Footer/>
  </div>
  <Modal v-if="this.$store.state.modalShow"/>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Catalog from '@/components/Catalog.vue'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Header,
    Catalog,
    Footer,
    Modal,
  }
}
</script>

<style lang="scss">
@import "@/scss_variables/variables";
* {
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 16px;
  font-family: $main-font;
}
a {
  text-decoration: none;
  color: $font-dark;
}
#app {
  position: relative;
}
.blur {
  filter: blur(3px);
}
.wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 100vh;
  .main {
    flex: 1;
    max-width: 85%;
    margin: 0 auto;
  }
}
.mobile {
  display: none;
}
@media (max-width: $hide-width) {
  .no-mobile {
    display: none;
  }
}
</style>
