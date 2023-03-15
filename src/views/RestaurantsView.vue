<template lang="">
    <h2 class="display-2">Products</h2>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 d-flex flex-wrap gap-5">
                <div class="card" style="width: 25rem;" v-for="res in restaurants" :key="res.userId">
                    <img :src="res.imgUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{res.restaurantName}}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <router-link :to="{ name: 'restaurant', params:{id: res.restId} }" class="btn btn-primary">Go somewhere</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
mounted() {
    this.$store.dispatch('fetchRestaurants')
},
computed: {
    restaurants() {
        return this.$store.state.restaurants;
    }
}
}
</script>
<style lang="">
    
</style>