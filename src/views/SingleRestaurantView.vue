<template >
    <div class="container-fluid" v-if="restaurant">
        <div class="row">
            <div class="col-6">
                <img :src="restaurant.imgUrl" alt="">
            </div>
            <div class="col-6">
                <p>{{ restaurant.restaurantDescription }}</p>
            </div>
        </div>
    </div>
    <form @submit.prevent="bookingRestaurant">
        <div class="mb-3 row">
            <label for="date" class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-10">
                <input type="date" id="staticEmail" v-model="inputDate" @input="updatedDate">
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
            inputDate: '',
        }
    },
    props: ['id'],
    computed: {
        restaurant() {
            console.log(this.$store.state);
            return this.$store.state.restaurant;
        },
        mySqlDate() {
            if(!this.inputDate) return '';
            const dateParts = this.inputDate.split('/');
            return dateParts.join('-');
        },

    },

    mounted() {
        this.$store.dispatch('fetchRestaurant', this.id);
        console.log(this.id);
        
    },
    methods: {
        updatedDate() {
            this.booking.bookingDate = this.mySqlDate;
            console.log(this.booking.bookingDate)
        },
        async bookingRestaurant() {
            const userId = Cookies.get('userId');
            if (userId) {
                this.booking.userId = userId;
                await this.$store.dispatch('addToCart',{id: this.booking.userId, payload: this.booking});
                console.log(this.booking.userId, this.booking);
            } else {
                console.log('error');
            }
            }
    }
    
}
</script>
<style></style>