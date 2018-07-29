<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myHeader from './components/header.vue'
import myFooter from './components/footer.vue'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    myHeader,
    myFooter
  }
}

</script>
<style>


</style>


