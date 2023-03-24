<template>
  <section id="home" class="home h-100 d-flex justify-content-center align-items-center">
      <div class="container-fluid">
        <div class="row">
          <div class="col-7 mx-auto ">

          </div>
          <div class="col-5 hero-section d-flex pt-5">
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
  <!-- <section id="home" class="home h-100 d-flex justify-content-center align-items-center">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 mx-auto">
            <h1 class="hero text-center mb-0">Book a Table at Your Favorite Restaurant</h1>
            <hr class="mx-auto"/>
            <h2 class="heroSmallText text-end pt-5">Hassle-free reservations with our online booking system</h2>
            <div class="button d-flex justify-content-end mt-5">
              <button class="buttonB p-2"><router-link to="restaurants" class="buttonText">Book Now</router-link></button>
            </div>
          </div>
        </div>
      </div>
  </section> -->
  <!-- <section id="information">
    <div class="container-fluid h-100">
      <div class="row">
        <div class="col-md-6 col-12">
          <h2 class="heading text-center pt-5 mt-5">Hello! We easy to use.</h2>
        </div>
        <div class="infoParagraph col-md-6 col-12 text-white p-5 mt-5">
          <p>Welcome to our online booking system for restaurants! With our user-friendly platform, you can easily reserve a table at your favorite restaurant in just a few clicks. No more waiting on hold or struggling to find available tables. Our system makes it easy to secure a spot at the best restaurants in town</p>
          <p>Our system is intuitive and easy to use. Simply pick a restaurant. Select the date, time, and number of people in your party. You can filter by cuisine, price range, and location to find the perfect spot for your next meal.</p>
          <p>Dine along.</p>
        </div>
      </div>
    </div>
  </section>
<section id="moreInformation">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 co-12 p-5">
        <h2 class="headingTwo">Book A Table now</h2>
        <p class="infoParagraphTwo">Looking for a delicious dinner spot for your evening meal? Our restaurant booking system has a wide range of options available. Here's a sneak peek at some of the types of food you can enjoy for your evening meal:</p>
        <ul class="list">
          <li>Classic American dishes, such as steak, grilled chicken, and roasted vegetables, served at a variety of restaurants.</li>
          <li>International cuisine, including Italian pasta dishes, Indian curries, and Japanese sushi, found at select locations.</li>
          <li>Seafood specialties, like fresh-caught fish, crab cakes, and lobster, available at certain restaurants.</li>
          <li>Vegetarian and vegan options, such as veggie burgers, plant-based protein bowls, and tofu stir-fry, served at specific locations.</li>
          <li>Fine dining options with creative flavor combinations, seasonal ingredients, and artful presentations, available at upscale restaurants.</li>
        </ul>
        <div class="buttonR d-flex justify-content-center">
          <button>View The Restaurants</button>
        </div>
      </div>
      <div class="bg col-md-6 col-12 p-4">
        <img class="img-fluid" src="https://i.postimg.cc/Y2XFVw1G/cape-town-restaurants-waterfront-baia.jpg" alt="">
      </div>
    </div>
  </div>
</section> -->
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
    min-width: 100vh; 
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