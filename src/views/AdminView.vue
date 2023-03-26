<template>
    <div class="container-fluid pt-5">
        <div class="row">
            <div class="col-md-12">
                <h2 class="text-white">Users</h2>
                <div class="table-responsive">
                <table class="table table-dark table-borderless mx-auto">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Role</th>
                        <th scope="col" class="text-center">Edit User</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.userId" class="bg-dark">
                            <th scope="row">{{ user.userId }}</th>
                            <td>{{ user.firstName}}</td>
                            <td>{{ user.lastName }}</td>
                            <td>{{ user.userEmail }}</td>
                            <td>{{ user.cellphoneNumber }}</td>
                            <td>{{ user.userRole }}</td>
                            <td class="d-flex justify-content-center gap-3">
                                <i class="fa-solid fa-pen-to-square"  data-bs-toggle="modal" :data-bs-target="'#editModal1' + user.userId
                                "></i>

                                <!-- Modal -->
                                <div class="modal fade" :id="'editModal1' + user.userId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'editModalLabel1' + user.userId" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" :id="'editModalLabel1' + user.userId">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <!--            -->
                                            <form @submit.prevent="updateUser(user)">
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">First Name</label>
                                                    <div class="col-sm-8">
                                                        <input type="text"  class="form-control" v-model="user.firstName" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">Last Name</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" id="inputPassword" v-model="user.lastName" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="email" class="col-sm-4 col-form-label text-dark">Email</label>
                                                    <div class="col-sm-8">
                                                        <input type="email" class="form-control" id="inputPassword" v-model="user.userEmail" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="tel" class="col-sm-4 col-form-label text-dark">Cellphone Number</label>
                                                    <div class="col-sm-8">
                                                        <input type="tel" class="form-control" id="inputPassword" maxlength="12" v-model="user.cellphoneNumber" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="password" class="col-sm-4 col-form-label text-dark">Password</label>
                                                    <div class="col-sm-8">
                                                        <input type="password" class="form-control" id="inputPassword" v-model="user.userPass" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="test" class="col-sm-4 col-form-label text-dark">User Role</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" id="inputPassword" v-model="user.userRole" required>
                                                    </div>
                                                </div>
                                                <button type="submit">Save Changes</button>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <i class="fa-sharp fa-solid fa-trash" @click="deleteUser(user)"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h2 class="text-white">Restaurants</h2>
                <div class="table-responsive">
                <table class="table table-dark table-borderless table-responsive mx-auto">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Restaurant Main Image</th>
                        <th scope="col">Restaurant Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col" class="text-center">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="res in restaurants" :key="res.restId" class="bg-dark">
                            <th scope="row">{{ res.restId }}</th>
                            <td class="image"><img :src="res.imgUrl" alt=""> </td>
                            <td>{{ res.restaurantName }}</td>
                            <td>{{ res.restaurantDescription }}</td>
                            <td>R {{ res.bookingPrice }}</td>
                            <td class="d-flex justify-content-center gap-5">
                                <i class="fa-solid fa-pen-to-square"  data-bs-toggle="modal" :data-bs-target="'#editModal' + res.restId"></i>

                                <!-- Modal -->
                                <div class="modal fade" :id="'editModal' + res.restId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'editModalLabel' + res.restId" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-scrollable modal-xl">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" :id="'editModalLabel' + res.restId">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <!--            -->
                                            <form @submit.prevent="updateRestaurant(res)">
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">Restaurant Name</label>
                                                    <div class="col-sm-8">
                                                        <input type="text"  class="form-control" v-model="res.restaurantName" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="message" class="col-sm-4 col-form-label text-dark">Description</label>
                                                    <div class="col-sm-8">
                                                        <input type="message" class="form-control message" v-model="res.restaurantDescription" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">Price</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control text" v-model="res.bookingPrice" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">Location</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" v-model="res.location" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="tel" class="col-sm-4 col-form-label text-dark">Address</label>
                                                    <div class="col-sm-8">
                                                        <input type="tel" class="form-control" v-model="res.address" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">Restaurant Main Image</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" v-model="res.imgUrl" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">Gallery Image #1</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" v-model="res.galleryImgUrl" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">Gallery Image #2</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" v-model="res.galleryImgUrl2" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">Gallery Image #3</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" v-model="res.galleryImgUrl3" required>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">Rating</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" v-model="res.rating" required>
                                                    </div>
                                                </div>
                                                <button type="submit">Save Changes</button>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <i class="fa-sharp fa-solid fa-trash" @click="restaurantDelete(res)"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {    
    computed: {
        users() {
            return this.$store.state.users
        },
        restaurants() {
            return this.$store.state.restaurants
        }
    },
    mounted() {
        this.$store.dispatch('fetchUsers');
        this.$store.dispatch('fetchRestaurants')
    },

    methods: {
        updateUser(user) {
            this.$store.dispatch('updateUser', { 
                userId: user.userId,
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    userEmail: user.userEmail,
                    cellphoneNumber: user.cellphoneNumber,
                    userRole: user.userRole,
                    userPass: user.userPass
                }
            })
        },
        deleteUser(user) {
            this.$store.dispatch('deleteUser', user.userId)
            alert(`user with id: ${user.userId} successfully`);
        },

        updateRestaurant(res) {
            this.$store.dispatch('updateRestaurant', {
                restId: res.restId,
                restaurant: {
                    restaurantName: res.restaurantName,
                    restaurantDescription: res.restaurantDescription, 
                    bookingPrice: res.bookingPrice,
                    location: res.location, 
                    address: res.address,
                    imgUrl: res.imgUrl,
                    galleryImgUrl: res.galleryImgUrl, 
                    galleryImgUrl2: res.galleryImgUrl2, 
                    galleryImgUrl3: res.galleryImgUrl3,
                    rating: res.rating
                    // hoursOfOperation: res.hoursOfOperation 
                }
            })
        },
            
        restaurantDelete(res) {
            this.$store.dispatch('deleteRestaurant', res.restId)
            alert(`restaurant with id: ${res.restId} successfully removed`)
        },
    }
}
</script>
<style scoped>
.container-fluid {
    background-color: white;
    min-height: 100vh;
    min-width: 100vw;
}
table {
    max-width: 95vw;
}
.message {
    height: 100px;
}
.image {
    width: 200px;
    height: 200px;
}
.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

</style>