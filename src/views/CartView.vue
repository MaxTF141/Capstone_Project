<template>
    <div id="cart">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="box-1 p-4">
                        <div class="cart d-flex justify-content-between">
                            <h2 class="ms-3">Cart</h2>
                            <button class="btn btn-warning mt-2 me-2" @click.prevent="clearCart">Clear</button>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col-2" class="text-muted">PRODUCT</th>
                                <th scope="col-2" class="text-muted">EDIT BOOKING</th>
                                <th scope="col-2" class="text-muted">PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  v-for="booking in cart" :key="booking.cartId">
                                    <td class="d-flex justify-content-between">
                                        <img class="cart-img" :src="booking.imgUrl" alt="">
                                        <div class="product-content ps-2">
                                            <h4>{{booking.restaurantName}}</h4>
                                            <h5>{{ booking.address }}</h5>
                                        </div>
                                    </td>
                                    <td>
                                        <form @submit.prevent="updateItem(booking)">
                                            <input type="date"  class="form-control" v-model="booking.bookingDate">
                                            <input type="time"  class="form-control" v-model="booking.bookingTime">
                                            <input type="number"  class="form-control" v-model="booking.numberGuests">
                                            <button class="button" type="submit">Save changes</button>
                                        </form>
                                    </td>
                                    <td><h4>R {{ booking.bookingPrice }}</h4></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-3">
                    <div class="box-1">
                        <div class="checkout">
                            <h2 class="p-3">Checkout</h2>
                            <hr class="mx-auto"/>
                            <div class="checkout-items" v-for="booking in cart" :key="booking.cartId">
                                <div class="m-3 d-flex justify-content-between pb-3">
                                    <img class="checkout-img me-1" :src="booking.imgUrl" alt="">
                                    <div class="checkout-info">
                                        <p class="mb-0">{{ booking.restaurantName }}</p>
                                        <p>{{ booking.address}}</p>
                                    </div>
                                    <p class="">R{{ booking.bookingPrice }}.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-1">
                        <div class="checkout-total d-flex justify-content-between p-3">
                            <p>Your bookings total:</p>
                            <p>R199.00</p>
                        </div>
                        <div class="checkout-amount p-3 d-flex justify-content-between">
                            <p>R 199.00</p>
                             <button class="button2">Checkout</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button @click.prevent="clearCart()">Clear Cart</button>
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
        this.$store.dispatch('fetchCart', this.id)
    },
    methods: {
        deleteItem(booking) {
            this.$store.dispatch('deleteCartItem', {  
                userId: booking.userId, 
                id: booking.cartId 
            })
        },
        updateItem(booking) {
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
<style scoped>
    .container-fluid {
        background-color: #dedede;
        min-height: 100vh;
        padding-top: 160px;
    }
    .box-1 {
        /* width: 400px; */
        /* border: 0px solid #ff9900; */
        border-radius: 10px;
        box-shadow: 3px 3px 7px #bbbbbb;
        background-color: white;
    }
    .cart-img {
        object-fit: cover;
        width: 150px;
        height: 150px;
        border-radius: 10%;
    }
    button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #e98c00;
        color: #fff;
        border: none;
        border-radius: 0;
        }
        hr {
        width: 100%;
        color: #bbbbbb;
        border-top: 2px solid #000000!important;
        margin-bottom: 0px;
    }
    .checkout-img {
        object-fit: cover;
        width: 60px;
        height: 60px;
        border-radius: 10%;
    }
   .checkout-amount {
        background-color: #e98c00;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .button2 {
        display: inline-block;
        padding: 10px 20px;
        background-color: #fff;
        color: #e98c00;
        border: none;
        border-radius: 0;
        }
    .checkout p{
        font-size: small;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
    }
    h2 {
    font-family: 'Roboto Slab', serif;
    letter-spacing: 4px;
    }
    h4, h4 {
        font-family: 'Nunito', sans-serif;
    }
 
</style>