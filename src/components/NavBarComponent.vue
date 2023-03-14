<template lang="">
  <section id="nav-bar" class="">
    <nav class="navbar navbar-expand-lg fixed-top mx-auto">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <img src="" alt="logo">
          <ul class="d-flex gap-5">
            <router-link class="nav-link-left" to="/">Home</router-link>
            <router-link class="nav-link-left" to="restaurants">Restaurants</router-link>
            <router-link class="nav-link-left" to="about">About Us</router-link>
            <router-link class="nav-link-left" to="about">Contact Us</router-link>
          </ul>
          <ul class="d-flex justify-content-end">
            <div class="signInB p me-3 pt-1">
              <router-link to="signin">Sign In</router-link>
            </div>
            <button class="buttonB p-1"><router-link to="signup" class="buttonText">Sign Up</router-link></button>
          </ul>
        </div>
      </div>
    </nav>
</section>
  
</template>
<script>
export default {

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