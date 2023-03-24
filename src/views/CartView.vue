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
                                    <td class="d-flex">
                                        <img :src="booking.imgUrl" alt="">
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
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-4">
                    <div class="box-1">
                        dd
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button @click.prevent="clearCart">Clear Cart</button>
    <div class="mb-5" v-for="booking in cart" :key="booking.cartId">
        <li>{{booking.restaurantName}}</li>
        <li>{{booking.restaurantDescription}}</li>
        <li>{{booking.location}}</li>
        <li>{{booking.bookingDate}}</li>
        <li>{{booking.bookingTime}}</li>
        <li>{{booking.numberGuests}}</li>
        <button class="btn btn-success" @click="deleteItem(booking)">delete</button>
                 
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#editModal' + booking.cartId">
        Launch static backdrop modal
        </button>


        <div class="modal fade" :id="'editModal' + booking.cartId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'editModalLabel' + booking.cartId" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" :id="'editModalLabel' + booking.cartId">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                          
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
    .box-1 img {
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

</style>