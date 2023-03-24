<template >
    <section id="singleProduct" v-if="restaurant">
        <div class="container-fluid">
            <div class="row">
                <div class="col-11">
                    <div class="mx-auto" style="width: 100%;">
                        <div class="d-flex flex-row ">
                            <img class="image" :src="restaurant.galleryImgUrl" alt="...">
                            <div class="d-flex flex-column justify-content-between" >
                                <div class="heading">
                                    <h5 class="card-title">{{restaurant.restaurantName}}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div class="rating">
                                    <rating :value="restaurant.rating"></rating>
                                <h>{{ restaurant.rating }}</h>
                                </div>
                                <div class="d-flex flex-column justify-content-between ">
                                    <p class="fw-bold my-auto">R 450.00</p>
                                    <div class="d-flex pt-2">
                                        <img class="my-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE3klEQVR4nM2aa4hVVRTHf3dyJktJLUjToJysGJJKCssYsYeUYyWVlL3JbxGR0wMsLcz80IcoCoLoYR96isVYqSlWkJY29cmyMtJeRqFjjyHNrjPqjRX/HbvTedx7z+PeP2y456y111pn77XXWnvvC9ljPHAn0AP0Aj+q9epdt3iaFhcCHwGVQBtQC77fBFxAE2E0sNoz8DNgMXCOaCU1+30u8BCwxeNfBRzb6I84HfhOBm0FrpbR1WA68Kn6muudRYNwJrBHhjwNtNYhow14VjL+AM6gYJib/CAD7s1A3n2S9X3RbubWxDMZynQz8xYFRidT+EWd7hTnZlsl+3wKgAuxs2J4RgELlDt2qfXKhUbG9LtSsjeSM9q9EBuFmcCvIXnDtV+Arpj+n4vvRHJEt5RYnoj6iAPieRmYLJdpU155VTTjmREhY4l45uX4Hf+UGBUltjB3cjNxW4yM28WzGxgRQj9P9NfJER9LSViIXODNRBKWxYTu0aLZmsoNO1Q3tcQEAXOhJEyJWdQt0mG6csNOoBxBM1c5VGVIbhNvXwS9DPxMjvhKIzk0hNYn48zIJBwuXgvLQRwpHV+SIz6UkvE5utbJoq0nR7gy4vKYeslCbBKWi3d+CO0q0Z4iR8yTkvtDaCOV7CoKsVG4IyH8LqkihKfGZCl5L4Le5SXEZco3LiFO8WbCeC6JkLFRPLmW9IcB/cBfwBERPDM02lElyu6YjzgKGFQQqHaDljq7XxHDM0L+v0khe6dGen6EOzlcL9kvUACuk7JXcpD9ZkwwyRzDgT+1zY0b3VphZU9Zrmt5phA8n0OF+oBkPk6BmCil2yLqrlrRqpOUQ8ApFIz1+hjbg6TFtZK1kgZgtpSvybD0uZgGYIiOhMwdJqWQM807zCjRINzqHXvWi/clYw4NRKsWfEUjWytmeocZWQSNVHDZ+IMa+5kbfaK+l9IEaAE21xHB5qiPLfSmQZeM+jpi9xhWHbi80UnBKAEdwFzgMWCdTjrGBeqkRVXIekS8L+n5eJ3QrAMelY6OLKOYbZZuBF7TnjxYkh/w7jVs+7tPJf6EhKpgQNcIY/XubOBgiPw+6b4h4ag1dgP1ooq4oOAVGnVLiCcE+i0S39oIuSWvIrgnQDNZsyVjRcjAlWWT2ZaIkyTEdbZR2gDcpalOwlAvHF8TQr9ZtC1VHht1SPeGwIz1yNbInV2/GPfKj+3QulZMk9KfgKMDZfouuWM1Jy1BtMumvbKxP+z8eKJ8232t89168aRk2R7dwc20LeY0GOftUs3m03ziu95dYBaRYrh3SXoTcItX9tsBXFqUZKvJfMcn7NNL3xXSolNu1K82GHGKXy+Okc1m+79wo3cR2WKxt0AfzFj2dMn91n+5UC9/zzjTDlFlvFK/s0KnbK3oOuM/Ct1NrUWcpcBxNB/GyjYXileHDZDF9YeB/WIaUHS4LOPb21rRKht6vP+0lGVrrF0TVBYMev69R19/tzLrsBwNHyYdlvnf9v5dUZFNyxNKoP9hjIS5Et1vNrXbgTeUpLp1gDAVOFXJa5Sag3tuF89UHfZ1S4bJ2h5Rc22WLWZTKozRBmqpdnNhf1vKqu2Xjuek0+4Uc4P5pmVU2xzZvcgTmnLbJdqe5BvgNzVnoHs2mvEYr/WxvnYparJMZl3r8W8q57Krse7F0AAAAABJRU5ErkJggg==" style="width: 1.5rem; height: 1.5rem;">            
                                    <p class="my-auto">{{ restaurant.address }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <form @submit.prevent="bookingRestaurant">
            <div class="mb-3 row">
                <label for="date" class="col-sm-2 col-form-label">Date</label>
                <div class="col-sm-10">
                    <input type="date" id="staticEmail" v-model="booking.bookingDate">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="time" class="col-sm-2 col-form-label">Time</label>
                <div class="col-sm-10">
                    <input type="time" class="form-control" id="inputPassword" v-model="booking.bookingTime">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="numbers" class="col-sm-2 col-form-label">Guests</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="inputPassword" v-model="booking.numberGuests">
                </div>
            </div>
            <button type="submit">Add to Cart</button>
        </form>
    </section>
</template>
<script>

import Cookies from 'js-cookie'

export default {
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
  }
  .image {
    object-fit: cover;
    width:500px;
    height: 500px;
  }
  .card .card-img-top{
    object-fit: cover;
    width: 250px;
    height: 220px;
}

</style>