<template>
  <NavBar /> 
  <router-view />
</template>

<script>
import NavBar from './components/NavBarComponent.vue'

export default {
  components: {
    NavBar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Alkalami&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alkalami&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alkalami&family=Montserrat:wght@300&family=Sono:wght@400&display=swap');
:root {
  --primary-colors: #d9a068;
  --secondary-colors: #1f2b21;
}
/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
