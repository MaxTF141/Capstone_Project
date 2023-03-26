<template>
    <div class="container-fluid" v-if="user">
        <hr class="mx-auto"/>
        <div class="row justify-content-center gap-5">
            <div class="col-10">
                <h2 class="heading">Profile</h2>
                <div class="profile-info d-flex p-3 gap-2">
                    <div class="profile-image">
                        <img :src="user.userProfile" alt="">
                    </div>
                    <div class="name-info">
                        <h4 class="p-0">{{ user.firstName + ' ' + user.lastName }} </h4>
                        <h4>{{user.userRole}}</h4>
                        <h4>{{ user.userEmail }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-10">
                <div class="profile-info p-3">
                    <div class="wrapper d-flex justify-content-between pb-3">
                        <h2 class="heading pt-1">Personal Information</h2>
                    </div>
                    <form @submit.prevent="updateUser(user)">
                        <div class="row">
                            <div class="col-5 d-flex flex-column gap-4">
                                <div class="name">
                                    <h5 class="text-muted">First Name</h5>
                                    <input type="text"  class="form-control" v-model="user.firstName">
                                </div>
                                <div class="email">
                                    <h5 class="text-muted">Email Address</h5>
                                    <input type="email" class="form-control" id="inputPassword" v-model="user.userEmail">
                                </div>
                                <div class="password">
                                    <h5 class="text-muted">Password</h5>
                                    <input type="password" class="form-control" id="inputPassword" v-model="user.userPass">
                                    <p class="text-muted ms-5">Please clear existing password to create a new one</p>
                                </div>
                            </div>
                            <div class="col-5 d-flex flex-column gap-4">
                                <div class="name">
                                    <h5 class="text-muted">Last Name</h5>
                                    <input type="text" class="form-control" id="inputPassword" v-model="user.lastName">
                                </div>
                                <div class="email">
                                    <h5 class="text-muted">Phone</h5>
                                    <input type="tel" class="form-control" id="inputPassword" maxlength="12" v-model="user.cellphoneNumber">
                                </div>
                            </div>
                        </div>
                        <button type="submit">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>

export default {
    props: ['id'],
    computed:{
        user(){
            return this.$store.state.user
        }
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
                    userPass: user.userPass
                }
            })
        }
    },
    mutations() {
        this.$store.dispatch('fetchUser', this.id)
    }
}

</script>
<style scoped>
    .container-fluid {
        padding-top: 100px;
        background-color: #dedede;
        min-height: 100vh;
    }
    .heading {
        font-family: 'Roboto Slab', serif;
    }
    .profile-info {
        /* height: 100px; */
        border: 1px solid #dedede;
        border-radius: 10px;
        box-shadow: 3px 3px 7px #bbbbbb;
        background-color: white;

    }

    /* .profile-image {
        /* object-fit: cover;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    } */
    .profile-image img {
        object-fit: cover;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    hr {
        width: 75%;
        /* height: 10px; */
        color: #bbbbbb;
        border-top: 2px solid #000000!important;
        margin-bottom: 50px;
    }
    button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #e98c00;
        color: #ffff;
        border: none;
        border-radius: 0;
    }
    h4 {
    font-family: 'Roboto Slab', serif;
    letter-spacing: 1px;
  }

</style>