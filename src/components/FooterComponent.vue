<template>
    <footer class="d-flex">
        <div class="links justify-content-center align items-center sticky bottom p-3">
            <ul class="d-flex justify-content-center gap-3">
                <router-link to="/" class="list-unstyled text-decoration-none">Home</router-link>
                <router-link to="/restaurants" class="list-unstyled text-decoration-none">Restaurants</router-link>
                <router-link to="/about" class="list-unstyled text-decoration-none">About Us</router-link>
                <router-link to="/contact" class="list-unstyled text-decoration-none">Contact Us</router-link>
            </ul>
            <hr class="mx-auto"/>
            <p class="text-center pt-4">&copy; Copyright 2021 Booking Secure</p>
        </div>
    </footer>
</template>
<script>
export default {
 
}
</script>
<style>
hr {
    width: 75%;
    color: #bbbbbb;
    border-top: 2px solid #000000!important;
    margin-bottom: 0px;
}
.links {
    background-color: #e98c00;
    min-width: 100vw;
}
</style>