<template>
    <button @click.prevent="clearCart">Clear Cart</button>
    <div class="mb-5" v-for="booking in cart" :key="booking.cartId">
        <li>{{booking.restaurantName}}</li>
        <li>{{booking.restaurantDescription}}</li>
        <li>{{booking.location}}</li>
        <li>{{booking.bookingDate}}</li>
        <li>{{booking.bookingTime}}</li>
        <li>{{booking.numberGuests}}</li>
        <button class="btn btn-success" @click="deleteItem(booking)">delete</button>
                <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#editModal' + booking.cartId">
        Launch static backdrop modal
        </button>

        <!-- Modal -->
        <div class="modal fade" :id="'editModal' + booking.cartId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'editModalLabel' + booking.cartId" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" :id="'editModalLabel' + booking.cartId">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!--            -->
                <form @submit.prevent="updateItem(booking)">
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
                    <button type="submit">Save Changes</button>
                </form>
            <!--                 -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
            </div>
            </div>
        </div>
        </div>

    </div>
</template>
<script>
export default {
    props: ['id'],
    computed: {
        cart() {
            return this.$store.state.cart; 
        },
    },
    mounted() {
        console.log(this.id)
        this.$store.dispatch('fetchCart', this.id)
    },
    created() {
        console.log(this.id)
    },
    methods: {
        deleteItem(booking) {
            this.$store.dispatch('deleteCartItem', {  
                userId: booking.userId, 
                id: booking.cartId 
            })
            console.log(booking.cartId, booking.userId);
        },
        updateItem(booking) {
            console.log(booking.cartId, booking.userId)
            this.$store.dispatch('updateCartItem', { 
                userId: booking.userId,
                id: booking.cartId,
                changes: {
                    bookingDate: booking.bookingDate,
                    bookingTime: booking.bookingTime,
                    numberGuests: booking.numberGuests
                }

            })
        },
        clearCart() {
            this.$store.dispatch('clearCart', this.id)
        }
    }
}
    
</script>
<style>
    
</style>