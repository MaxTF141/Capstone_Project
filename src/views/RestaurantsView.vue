<template>
    <div class="wrapper fixed-top">
        <div class="banner">
            <h2 class="display-2">Restaurants</h2>
        </div>
        <div class="searchBar d-flex justify-content-center">
                <div class="container-input">
                    <input type="text" placeholder="Search" name="text" class="input" v-model="searching">
                    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                        <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
            <hr class="mx-auto"/>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex flex-column gap-5" v-if="filtering">
                <div class="card d-flex flex-row mx-auto" style="width: 60rem;"  v-for="res in filtering" :key="res.userId">
                    <img :src="res.imgUrl" class="card-img-top" alt="...">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div class="heading">
                            <h5 class="card-title">{{res.restaurantName}}</h5>
                        </div>
                        <div class="rating">
                            <rating :value="res.rating"></rating>
                        </div>
                        <div class="d-flex flex-column justify-content-between">
                            <p class="fw-bold my-auto">R 450.00</p>
                            <div class="d-flex pt-2 gap-2">
                                <img class="my-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE3klEQVR4nM2aa4hVVRTHf3dyJktJLUjToJysGJJKCssYsYeUYyWVlL3JbxGR0wMsLcz80IcoCoLoYR96isVYqSlWkJY29cmyMtJeRqFjjyHNrjPqjRX/HbvTedx7z+PeP2y456y111pn77XXWnvvC9ljPHAn0AP0Aj+q9epdt3iaFhcCHwGVQBtQC77fBFxAE2E0sNoz8DNgMXCOaCU1+30u8BCwxeNfBRzb6I84HfhOBm0FrpbR1WA68Kn6muudRYNwJrBHhjwNtNYhow14VjL+AM6gYJib/CAD7s1A3n2S9X3RbubWxDMZynQz8xYFRidT+EWd7hTnZlsl+3wKgAuxs2J4RgELlDt2qfXKhUbG9LtSsjeSM9q9EBuFmcCvIXnDtV+Arpj+n4vvRHJEt5RYnoj6iAPieRmYLJdpU155VTTjmREhY4l45uX4Hf+UGBUltjB3cjNxW4yM28WzGxgRQj9P9NfJER9LSViIXODNRBKWxYTu0aLZmsoNO1Q3tcQEAXOhJEyJWdQt0mG6csNOoBxBM1c5VGVIbhNvXwS9DPxMjvhKIzk0hNYn48zIJBwuXgvLQRwpHV+SIz6UkvE5utbJoq0nR7gy4vKYeslCbBKWi3d+CO0q0Z4iR8yTkvtDaCOV7CoKsVG4IyH8LqkihKfGZCl5L4Le5SXEZco3LiFO8WbCeC6JkLFRPLmW9IcB/cBfwBERPDM02lElyu6YjzgKGFQQqHaDljq7XxHDM0L+v0khe6dGen6EOzlcL9kvUACuk7JXcpD9ZkwwyRzDgT+1zY0b3VphZU9Zrmt5phA8n0OF+oBkPk6BmCil2yLqrlrRqpOUQ8ApFIz1+hjbg6TFtZK1kgZgtpSvybD0uZgGYIiOhMwdJqWQM807zCjRINzqHXvWi/clYw4NRKsWfEUjWytmeocZWQSNVHDZ+IMa+5kbfaK+l9IEaAE21xHB5qiPLfSmQZeM+jpi9xhWHbi80UnBKAEdwFzgMWCdTjrGBeqkRVXIekS8L+n5eJ3QrAMelY6OLKOYbZZuBF7TnjxYkh/w7jVs+7tPJf6EhKpgQNcIY/XubOBgiPw+6b4h4ag1dgP1ooq4oOAVGnVLiCcE+i0S39oIuSWvIrgnQDNZsyVjRcjAlWWT2ZaIkyTEdbZR2gDcpalOwlAvHF8TQr9ZtC1VHht1SPeGwIz1yNbInV2/GPfKj+3QulZMk9KfgKMDZfouuWM1Jy1BtMumvbKxP+z8eKJ8232t89168aRk2R7dwc20LeY0GOftUs3m03ziu95dYBaRYrh3SXoTcItX9tsBXFqUZKvJfMcn7NNL3xXSolNu1K82GHGKXy+Okc1m+79wo3cR2WKxt0AfzFj2dMn91n+5UC9/zzjTDlFlvFK/s0KnbK3oOuM/Ct1NrUWcpcBxNB/GyjYXileHDZDF9YeB/WIaUHS4LOPb21rRKht6vP+0lGVrrF0TVBYMev69R19/tzLrsBwNHyYdlvnf9v5dUZFNyxNKoP9hjIS5Et1vNrXbgTeUpLp1gDAVOFXJa5Sag3tuF89UHfZ1S4bJ2h5Rc22WLWZTKozRBmqpdnNhf1vKqu2Xjuek0+4Uc4P5pmVU2xzZvcgTmnLbJdqe5BvgNzVnoHs2mvEYr/WxvnYparJMZl3r8W8q57Krse7F0AAAAABJRU5ErkJggg==" style="width: 1.5rem; height: 1.5rem;">            
                                <p class="my-auto">{{ res.address }}</p>
                            </div>
                        </div>
                        <router-link :to="{ name: 'restaurant', params:{id: res.restId} }" class="btn btn-warning">View More...</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Rating from '../components/RatingComponent.vue'
export default {
    components: {
        Rating
    },
    data() {
        return {
            searching: '',
        }
    },
    mounted() {
        this.$store.dispatch('fetchRestaurants')
    },
    computed: {
        restaurants() {
            return this.$store.state.restaurants;
        },
        filtering() {
            if(this.searching.trim().length > 0){
                return this.restaurants.filter((name)=> name.restaurantName.toLowerCase().includes(this.searching.trim()))
            }
            return this.restaurants
        }
    },
    
}
</script>
<style scoped>
.card {
    box-shadow: 3px 3px 7px #bbbbbb;
}
.card .card-img-top{
    object-fit: cover;
    width: 250px;
    height: 220px;
}
hr {
    width: 75%;
    /* height: 10px; */
    color: #bbbbbb;
    border-top: 2px solid #000000!important;
    margin-bottom: 0px;
  }
  .input-group {
    width: 90vw;
  }
  .banner h2 {
    font-family: 'Roboto Slab', serif;
    letter-spacing: 4px;
  }
  .wrapper {
    background-color: white;
    margin-top: 67.2px;
  }
  .container-fluid {
    margin-top: 230px;
    background-color: #f8fafb;
  }

  h5 {
    font-family: 'Roboto Slab', serif;
    letter-spacing: 1px;
  }

/* Search Bar */
.container-input {
  position: relative;
}

.input {
  width: 150px;
  padding: 10px 0px 10px 40px;
  border-radius: 9999px;
  border: solid 1px #333;
  transition: all .2s ease-in-out;
  outline: none;
  opacity: 0.8;
}

.container-input svg {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
}

.input:focus {
  opacity: 1;
  width: 250px;
}
</style>