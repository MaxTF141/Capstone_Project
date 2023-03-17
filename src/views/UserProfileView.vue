<template lang="">
    <div v-if="user">     
        <h1>{{user.userId}}</h1>
    </div>
</template>
<script>
export default {
    computed: {
        user() {
            console.log(this.$store.state.users)
            return this.$store.state.users;
        }
    }

}
</script>
<style lang="">
    
</style>