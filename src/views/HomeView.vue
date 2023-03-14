<template>
  <section id="home" class="home h-100 d-flex justify-content-center align-items-center">
      <img class="image" src="https://i.postimg.cc/qBNVZ1gF/image.jpg" alt="">
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
  </section>
  <section id="information">
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
</section>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  #home {
    max-width: 100vw;
    min-height: 100vh;
    position: relative;
    background-color: #1f2b21;
    overflow-x: none;
  }
  .image {
    position: absolute;
    left: 0;
    top: 0; 
    min-width: 100vw;
    max-width: 100vw;
    opacity: 0.25;
    z-index: 0;
    overflow-y: none;
  }
  .col {
    margin: auto;
  }
  .hero {
    font-family: Migra Extrabold;
    color: #d9a068;
    font-size:5rem;
    z-index: 1;
  }
  .heroSmallText {
    font-family: Migra Extrabold;
    font-size: 3rem;
    color: #d9a068;
    z-index: 1;
  }
  hr {
    width: 60%;
    /* height: 10px; */
    color: #d9a068;
    border-top: 5px solid #d9a068 !important;
    opacity: 1 !important;
  }
  .buttonB {
    background-color: #d9a068;
    border-color: #d9a068;
    border-radius: 10px;
    z-index: 1;
  }
  .buttonText {
    text-decoration: none !important;
    color: #1f2b21;
  }


  #information {
    position: relative;
    background-color: #d9a068;
    width: 100vw;
    min-height: 100vh;
    z-index: 1;
  }
  .heading {
    font-family: Migra Extrabold;
    font-size: xx-large;
    color: #1f2b21;
  }
  .infoParagraph {
    font-size: xx-large;
    font-family: 'Montserrat', sans-serif;
  }

  
  #moreInformation {
    min-height: 100vh;
  }
  .headingTwo {
    font-family: Migra Extrabold;
    font-size: xx-large;
    color: #1f2b21;
  }
  .infoParagraphTwo, .list {
    font-family: 'Montserrat', 'sans-serif';
    font-size: x-large;
    color: #1f2b21;
  }
  li {
    color: #1f2b21;
  }
  .bg img {
    min-height: 100%;
    min-width: 100%;
    /* background: url("https://i.postimg.cc/Y2XFVw1G/cape-town-restaurants-waterfront-baia.jpg") no-repeat; */
  }
  .buttonR button {
    background-color: #d9a068;
    border-color: #d9a068cb;
  }
</style>