<template lang="">
  <section id="nav-bar" class="">
    <nav class="navbar navbar-expand-lg  fixed-top mx-auto">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <img src="" alt="logo">
          <ul class="d-flex gap-5">
            <router-link class="nav-link-left" to="/">Home</router-link>
            <router-link class="nav-link-left" to="/restaurants">Restaurants</router-link>
            <router-link class="nav-link-left" to="/about">About Us</router-link>
            <router-link class="nav-link-left" to="/about">Contact Us</router-link>
          </ul>
          <ul class="d-flex justify-content-end">
            <div class="signInB p me-3 pt-1">
              <router-link v-if="$route.path !== '/signin'" to="/signin">Sign In</router-link>
            </div>
            <button class="buttonB p-1" v-if="$route.path !== '/signup'"><router-link to="/signup" class="buttonText">Sign Up</router-link></button>
            <div class="profile">
              <router-link :to="{name: 'profile', params:{id: $store.state.userId.userId }}"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA70lEQVR4nO3UQUrDQBSH8R8umqVdWrrWK+hJxEPYHsNuRPFAurR1ZfEAuinVlUUUXVYGJiCCdNJObCn54A8heeGbl8wbGjaUAn2M8BETrnvxWS10Mcb8j9zHmqwUC6Q/5Vk77ydIy5zmFN9VEA9zit8riENtNuYVs5aO37biH/fWtauLOKMpc9ySme4CeS0nV0krfsph3HAht/Fe9k4b/pUdHGGAGzzjK2aKa5zhMNauTAcXeKkwx2FR59hbRtjGFT6XOKfLhHcvsZsqPcDTCsLfecR+ivgho7TMOEU8rUE8SRGfYJZR+orjFHHDdvENyZP0ibBvoI8AAAAASUVORK5CYII="></router-link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
</section>
  
</template>
<script>

import Cookies from 'js-cookie'

export default {
  computed: {
    cookieExists() {
      return !!Cookies.get('authorization_token');
    }
  }
}
</script>
<style>
.navbar {
  width: 80vw;
  /* -webkit-backdrop-filter: blur(8px); */
  backdrop-filter: transparent(5px);
}
.nav-link-left {
  font-family: TeX Gyre Bonum;
  color: white;
  text-decoration: none;
  font-size: larger;
}
nav a.router-link-exact-active {
  color:#d9a068;
}

.buttonB {
    background-color: #d9a068;
    border-color: #d9a068;
    border-radius: 10px;
}
button a {
  text-decoration: none ;
  color: #1f2b21;
  font-family: TeX Gyre Bonum;
}
.signInB a  {
  text-decoration: none ;
  color: #d9a068;
  font-family: TeX Gyre Bonum;
  font-size: large;
}
</style>