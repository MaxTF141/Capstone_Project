<template>
  <section id="home" class="home h-100 d-flex justify-content-center align-items-center">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-7 col-12 mx-auto ">

          </div>
          <div class="col-md-5 col-12 hero-section d-flex pt-5">
              <div class="hero-text pt-5 mt-5">
                  <h1>Book a Table at Your Favorite Restaurant</h1>
                  <hr class="mx-auto"/>
                  <h2 class="text-end pt-5 pe-3">Hassle-free reservations with our online booking system</h2>
                  <div class="bttn d-flex justify-content-end pe-3 pt-5">
                    <router-link to="/restaurants"><button class="button">BOOK NOW</button></router-link>
                  </div>
              </div>
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
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200;300&family=Open+Sans:wght@600&family=Titillium+Web:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200;300&family=Open+Sans:wght@600&family=Titillium+Web:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;300&family=Open+Sans:wght@600&family=Sacramento&family=Titillium+Web:wght@900&display=swap');
  #home {
    background-image: url(https://i.postimg.cc/G3FqDgh9/TOO-restaurant-Panoramique-vue-Paris-nuit-v2-scaled.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    max-height: 100vh; 
  }
  .row {
    min-height: 100vh;
  }
  .hero-section {
    background-color: #ffaf38e9;

  }
  /* h1 {
    font-family: 'Sacramento', sans-serif;
    color: #0066FF;
  } */
  h1 {
    font-family: 'Kanit', sans-serif;
    color: white;
    font-size: 80px;
    letter-spacing: 2px;
  }
  h2 {
    font-family: 'Kanit', sans-serif;
    color: white;
    font-size: 50px;
  }
  hr {
    width: 75%;
    color: #bbbbbb;
    border-top: 2px solid #000000!important;
    margin-bottom: 0px;
  }
  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #e98c00;
    color: #fff;
    border: none;
    border-radius: 0;
  }

  /* h3 {
    font-family: 'Titillium Web', sans-serif;
    color: #0066FF;
  } */
  
</style>