<template lang="">
    <div v-for="booking in bookings" :key="booking.userId">
        <li>{{booking.restaurantName}}</li>
        <li>{{booking.restaurantDescription}}</li>
        <li>{{booking.location}}</li>
        <li>{{booking.bookingDate}}</li>
        <li>{{booking.bookingTime}}</li>
        <li>{{booking.userGuests}}</li>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userId: this.id,
            bookings: []

        }
    },
    props:['id'],
    computed: {
        booking() {
            console.log(this.$store.state.cart[0])
            return this.$store.state.cart
        }
    },
    mounted() {
        console.log(this.id)
        this.$store.dispatch('fetchCart', this.id);
    },
    methods: {
        book() {
            this.bookings = this.booking
        }
    }
}
</script>
<style lang="">
    
</style>