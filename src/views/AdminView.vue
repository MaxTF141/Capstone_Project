<template>
    <div class="container-fluid pt-5">
        <div class="row">
            <div class="col-12">
                <table class="table table-dark table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Role</th>
                        <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.userId">
                            <th scope="row">{{ user.userId }}</th>
                            <td>{{ user.firstName}}</td>
                            <td>{{ user.lastName }}</td>
                            <td>{{ user.userEmail }}</td>
                            <td>{{ user.cellphoneNumber }}</td>
                            <td>{{ user.userRole }}</td>
                            <td>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#editModal' + user.userId">
                                Edit User
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" :id="'editModal' + user.userId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :aria-labelledby="'editModalLabel' + user.userId" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" :id="'editModalLabel' + user.userId">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <!--            -->
                                            <form @submit.prevent="updateUser(user)">
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">First Name</label>
                                                    <div class="col-sm-8">
                                                        <input type="text"  class="form-control" v-model="user.firstName">
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="text" class="col-sm-4 col-form-label text-dark">Last Name</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" id="inputPassword" v-model="user.lastName">
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="email" class="col-sm-4 col-form-label text-dark">Email</label>
                                                    <div class="col-sm-8">
                                                        <input type="email" class="form-control" id="inputPassword" v-model="user.userEmail">
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="tel" class="col-sm-4 col-form-label text-dark">Cellphone Number</label>
                                                    <div class="col-sm-8">
                                                        <input type="tel" class="form-control" id="inputPassword" maxlength="12" v-model="user.cellphoneNumber">
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="password" class="col-sm-4 col-form-label text-dark">Password</label>
                                                    <div class="col-sm-8">
                                                        <input type="password" class="form-control" id="inputPassword" v-model="user.userPass">
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label for="test" class="col-sm-4 col-form-label text-dark">User Role</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" id="inputPassword" v-model="user.userRole">
                                                    </div>
                                                </div>
                                                <button type="submit">Save Changes</button>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {    
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch('fetchUsers');
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
        }
    }
}
</script>
<style scoped>
.container-fluid {
    background-color: #1f2b21;
    min-height: 100vh;
}
</style>