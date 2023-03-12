<template>
  <section id="home" class="home h-100">
      <img class="image" src="https://i.postimg.cc/qBNVZ1gF/image.jpg" alt="">
      <div class="container-fluid my-auto">
        <div class="row">
          <div class="col-6 mx-auto">
            <h1>Book a Table at Your Favorite Restaurant</h1>
            <h2>Hassle-free reservations with our online booking system</h2>
            <button btn btn-primary>Book Now</button>
          </div>
        </div>
      </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  #home {
    min-width: 100vw;
    min-height: 100vh;
    position: relative;
    background-color: #1f2b21;
  }
  .image {
    position: absolute;
    left: 0;
    top: 0;
    min-width: 100vw;
    /* min-height: 100vh; */
    opacity: 0.2;
  }
  .col {
    margin: auto;
  }
</style>