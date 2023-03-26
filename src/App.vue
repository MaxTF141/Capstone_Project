<template>
  <NavBar /> 
  <SpinnerC v-if="isLoading" class="min-vh-100" />
  <div v-else>
    <router-view class="min-vh-100" />
  </div>
  <FooterC />
</template>

<script>
import NavBar from './components/NavBarComponent.vue'
import SpinnerC from './components/SpinnerComponent.vue'
import FooterC from './components/FooterComponent.vue'
export default {
  components: {
    NavBar,
    SpinnerC,
    FooterC
  },
  data() {
    return{
      isLoading: true,
    }
  },
  created() {
    setTimeout(()=>{
      this.isLoading = false;
    }, 2000);
  }

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&family=Nunito:ital,wght@1,200&family=Playfair+Display:ital@1&family=Roboto+Slab:wght@200&display=swap');
router-view {
  min-height: 100vh;
}
</style>
