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
            <router-link class="nav-link-left" to="about">Restaurants</router-link>
            <router-link class="nav-link-left" to="about">About Us</router-link>
            <router-link class="nav-link-left" to="about">Contact Us</router-link>
          </ul>
          <ul class="d-flex justify-content-end">
            <div class="signInB p me-3 pt-1">
              <router-link to="">Sign In</router-link>
            </div>
            <button class="buttonB p-1"><router-link to="" class="buttonText">Sign Up</router-link></button>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas dark navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav> -->
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