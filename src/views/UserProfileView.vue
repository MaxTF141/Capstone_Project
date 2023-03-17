<template lang="">
    <div v-if="user">     
        <h1>{{user.userId}}</h1>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    // props: ['id'],
    // data() {
    //     return {
    //         userId: this.id,
    //     }
    // }
    computed: {
    ...mapGetters(['loggedInUserId'])
  }
}
</script>
<style lang="">
    
</style>