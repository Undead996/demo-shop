<template>
<div>
  <div class='wrapper' :class="{'blur': this.$store.state.isBlur}">
    <Header/>
    <div class='main'>
      <Catalog/>
    </div>
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
* {
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 16px;
}
a {
  text-decoration: none;
  color: black;
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
  margin: 0 auto;
  max-width: 80%;
  .main {
    flex: 1,
  }
}
</style>
