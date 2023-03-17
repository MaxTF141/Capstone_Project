<template >
    <div class="container-fluid" v-if="restaurant">
        <div class="row">
            <div class="col-6">
                <img :src="restaurant.imgUrl" alt="">
            </div>
            <div class="col-6">
                <p>{{restaurant.restaurantDescription}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['id'],
    computed: {
        restaurant() {
            console.log(this.$store.state);
            return this.$store.state.restaurant;
        }
    },
    mounted() {
        this.$store.dispatch('fetchRestaurant', this.id);
        console.log(this.id);
    }
}
</script>
<style>
    
</style>