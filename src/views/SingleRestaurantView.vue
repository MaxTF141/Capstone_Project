<template>
  <section id="singleProduct" v-if="restaurant">
    <div class="container-fluid">
      <h2 class="res-name">{{ restaurant.restaurantName }}</h2>
      <div class="row">
          <div class="col-8">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img :src="restaurant.galleryImgUrl" class="">
                  </div>
                  <div class="carousel-item">
                    <img :src="restaurant.galleryImgUrl2" class="d">
                  </div>
                  <div class="carousel-item">
                    <img :src="restaurant.galleryImgUrl3" class="d">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
               <div class="restaurant-info pt-3 d-flex justify-content-between">
                <rating :value="restaurant.rating"></rating>
                <div class="d-flex gap-2">
                  <img class="my-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE3klEQVR4nM2aa4hVVRTHf3dyJktJLUjToJysGJJKCssYsYeUYyWVlL3JbxGR0wMsLcz80IcoCoLoYR96isVYqSlWkJY29cmyMtJeRqFjjyHNrjPqjRX/HbvTedx7z+PeP2y456y111pn77XXWnvvC9ljPHAn0AP0Aj+q9epdt3iaFhcCHwGVQBtQC77fBFxAE2E0sNoz8DNgMXCOaCU1+30u8BCwxeNfBRzb6I84HfhOBm0FrpbR1WA68Kn6muudRYNwJrBHhjwNtNYhow14VjL+AM6gYJib/CAD7s1A3n2S9X3RbubWxDMZynQz8xYFRidT+EWd7hTnZlsl+3wKgAuxs2J4RgELlDt2qfXKhUbG9LtSsjeSM9q9EBuFmcCvIXnDtV+Arpj+n4vvRHJEt5RYnoj6iAPieRmYLJdpU155VTTjmREhY4l45uX4Hf+UGBUltjB3cjNxW4yM28WzGxgRQj9P9NfJER9LSViIXODNRBKWxYTu0aLZmsoNO1Q3tcQEAXOhJEyJWdQt0mG6csNOoBxBM1c5VGVIbhNvXwS9DPxMjvhKIzk0hNYn48zIJBwuXgvLQRwpHV+SIz6UkvE5utbJoq0nR7gy4vKYeslCbBKWi3d+CO0q0Z4iR8yTkvtDaCOV7CoKsVG4IyH8LqkihKfGZCl5L4Le5SXEZco3LiFO8WbCeC6JkLFRPLmW9IcB/cBfwBERPDM02lElyu6YjzgKGFQQqHaDljq7XxHDM0L+v0khe6dGen6EOzlcL9kvUACuk7JXcpD9ZkwwyRzDgT+1zY0b3VphZU9Zrmt5phA8n0OF+oBkPk6BmCil2yLqrlrRqpOUQ8ApFIz1+hjbg6TFtZK1kgZgtpSvybD0uZgGYIiOhMwdJqWQM807zCjRINzqHXvWi/clYw4NRKsWfEUjWytmeocZWQSNVHDZ+IMa+5kbfaK+l9IEaAE21xHB5qiPLfSmQZeM+jpi9xhWHbi80UnBKAEdwFzgMWCdTjrGBeqkRVXIekS8L+n5eJ3QrAMelY6OLKOYbZZuBF7TnjxYkh/w7jVs+7tPJf6EhKpgQNcIY/XubOBgiPw+6b4h4ag1dgP1ooq4oOAVGnVLiCcE+i0S39oIuSWvIrgnQDNZsyVjRcjAlWWT2ZaIkyTEdbZR2gDcpalOwlAvHF8TQr9ZtC1VHht1SPeGwIz1yNbInV2/GPfKj+3QulZMk9KfgKMDZfouuWM1Jy1BtMumvbKxP+z8eKJ8232t89168aRk2R7dwc20LeY0GOftUs3m03ziu95dYBaRYrh3SXoTcItX9tsBXFqUZKvJfMcn7NNL3xXSolNu1K82GHGKXy+Okc1m+79wo3cR2WKxt0AfzFj2dMn91n+5UC9/zzjTDlFlvFK/s0KnbK3oOuM/Ct1NrUWcpcBxNB/GyjYXileHDZDF9YeB/WIaUHS4LOPb21rRKht6vP+0lGVrrF0TVBYMev69R19/tzLrsBwNHyYdlvnf9v5dUZFNyxNKoP9hjIS5Et1vNrXbgTeUpLp1gDAVOFXJa5Sag3tuF89UHfZ1S4bJ2h5Rc22WLWZTKozRBmqpdnNhf1vKqu2Xjuek0+4Uc4P5pmVU2xzZvcgTmnLbJdqe5BvgNzVnoHs2mvEYr/WxvnYparJMZl3r8W8q57Krse7F0AAAAABJRU5ErkJggg==" style="width: 1.5rem; height: 1.5rem;">            
                  <p class="my-auto">{{ restaurant.address}}</p>
                </div>
               </div>
               <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Description</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Where to find us</button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active description" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">{{ restaurant.restaurantDescription }}</div>
                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                  <iframe :src="restaurant.location" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
              </div>
          </div>
          <div class="col offset-1">
            <div>
              <h2>Opening Hours:</h2>
              <table class="table table-striped table-hover w-75 " >
                <thead>
                </thead>
                <tbody>
                  <tr v-for="(hours, day) in JSON.parse(restaurant.hoursOfOperation)" :key="day">
                    <td>{{ day }}</td>
                    <td>{{hours}}</td>
                  </tr>
                </tbody>
            </table>
            </div>

          </div>

      </div>
      <div class="booking-table p-3 m-4">
        <h2>Book A Table Now</h2>
        <form @submit.prevent="bookingRestaurant()" class="d-flex flex-column">
          <div class="row">
            <label for="date">Date:</label>
            <div class="col">
              <input type="date" name="text" class="input" v-model="booking.bookingDate">
            </div>
          </div>
          <div class="row">
            <label for="time">Time:</label>
            <div class="col">
              <input type="time" name="text" class="input" v-model="booking.bookingTime">
            </div>
          </div>
            <div class="row">
              <label for="number">Number of guests:</label>
            <div class="col">
              <input placeholder="" min="1" max="6" type="number" name="text" class="input" v-model="booking.numberGuests">
            </div>
          </div>
          <button class="p-2 m-3 d-flex justify-content-center" type="submit">ADD TO CART</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import Cookies from 'js-cookie'
import Rating from '../components/RatingComponent.vue'
export default {
  components: {
    Rating
  },
    data() {
        return {
            booking: {
                bookingDate: '',
                bookingTime: '',
                numberGuests: '',
                userId: '',
                restId: this.id

            },
            // inputDate: '',
        }
    },
    props: ['id'],
    computed: {
        restaurant() {
            console.log(this.$store.state);
            return this.$store.state.restaurant;
        },
        // mySqlDate() {
        //     if(!this.inputDate) return '';
        //     const dateParts = this.inputDate.split('/');
        //     return dateParts.join('-');
        // },

    },

    mounted() {
        this.$store.dispatch('fetchRestaurant', this.id);
        console.log(this.id);
        
    },
    methods: {
        // updatedDate() {
        //     this.booking.bookingDate = this.mySqlDate;
        //     console.log(this.booking.bookingDate)
        // },
        async bookingRestaurant() {
            const userId = Cookies.get('userId');
            if (userId) {
                console.log(this.booking.userId, this.booking, this.booking.bookingDate);
                this.booking.userId = userId;
                await this.$store.dispatch('addToCart',{
                    id: this.booking.userId, 
                    payload: this.booking
                });
            } else {
                console.log('error');
            }
        }
    }
    
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200;300&family=Open+Sans:wght@600&family=Titillium+Web:wght@900&display=swap');

  .container-fluid {
    padding-top: 130px;
    box-shadow: 3px 3px 7px #bbbbbb;
    background-color: white;
    width: 80%;
    min-height: 100vh

  }
  #singleProduct {
    background-color: #dedede;

  }
  .carousel-item {
    width: 100%;
    height: 300px;
    /* display: flex; */

  }
  .carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 50%;
  margin-bottom: 50px;
  }
  h2 {
    font-family: 'Roboto Slab', serif;
    letter-spacing: 4px;
  }
  .description {
    font-family: 'Nunito', sans-serif;
    font-size: x-large;
  }
  /* .table {
    width: 60%;
  } */
  .input {
  width: 100%;
  max-width: 300px;
  height: 40px;
  padding: 12px;
  border-radius: 12px;
  border: 1.5px solid lightgrey;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
}

.input:hover {
  border: 2px solid lightgrey;
  box-shadow: 0px 0px 20px -17px;
}

.input:active {
  transform: scale(0.95);
}

.input:focus {
  border: 2px solid grey;
}
.booking-table {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 230px;
  height: 330px;
  background-color: #e98c00;
  border-radius: 20px;
}
.booking-table h2 {
  font-size: medium;
}
button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #fff;
  color: #e98c00;
  border: none;
  border-radius: 0;
  }

</style>