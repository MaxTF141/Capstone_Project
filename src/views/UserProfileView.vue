<template lang="">
    <div v-if="user">     
        <h1 class="pb-5 mb-5">{{ user.firstName }}</h1>
        <h1>{{ user.lastName}}</h1>
        <h2>{{ user.userEmail}}</h2>
        <h2>{{ user.cellphoneNumber}}</h2>
    </div>
</template>
<script>

export default {
    props: ['id'],
    computed:{
        user(){
            console.log(this.$store.state.user)
            return this.$store.state.user
        }
    },
    mutations() {
        this.$store.dispatch('fetchUser', this.id);
        console.log(this.id);
    }
}
</script>
<style lang="">
    
</style>