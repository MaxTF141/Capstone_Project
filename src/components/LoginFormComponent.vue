<template>
    <div class="container-fluid">
        <div class="row">
            <div class="form col-6 mx-auto d-flex align-items-center">
                <form class="mx-auto my-auto p-5" @submit.prevent="signInCredentials">
                    <!-- Email input -->
                    <h2 class="signInHeader text-center">Sign In</h2>
                    <div class="form-outline mb-2 mx-auto">
                        <input type="email" id="form2Example1" class="form-control" required v-model="signIn.userEmail"/>
                        <label class="form-label" for="form2Example1">Email address</label>
                    </div>
            
                    <!-- Password input -->
                    <div class="form-outline mb-2 mx-auto">
                        <input type="password" id="form2Example2" class="form-control" required v-model="signIn.userPass"/>
                        <label class="form-label" for="form2Example2">Password</label>
                    </div>
            
                    <!-- 2 column grid layout for inline styling -->
                    <div class="row mb-4">
                        <div class="forgetP col-6 mx-auto">
                        <!-- Simple link -->
                        <a href="#!">Forgot password?</a>
                        </div>
                    </div>
            
                    <!-- Submit button -->
                    <div class="signB d-flex justify-content-center">
                        <button type="submit" class="btn-block mb-4">Sign in</button>
                    </div>
            
                    <!-- Register buttons -->
                    <div class="text-center">
                        <p>Do not have an account? <router-link to="signup">Sign Up</router-link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    data() {
        return{
            signIn: {
                userEmail: '',
                userPass: ''
            }
        }
    },
    methods: {
        async signInCredentials() {
            if(this.signIn !== null){
                await this.$store.dispatch('loginUser', this.signIn);
                console.log('logged in');
                this.signIn.userEmail = '',
                this.signIn.userPass = ''
            } else{
                console.log('error')
            }

            }
    }
}
</script>
<style scoped>
    form {
        width: 400px;
        border: 0px solid #d9a068;
        border-radius: 30px;
        box-shadow: 0 0 2px inset black;
    }
    .form-outline, .forgetP {
        width: 80%;
    }
    .form {
        min-height: 100vh;
    }
    .signInHeader {
        font-family: Migra Extrabold;
        color: #1f2b21;
    }
    form label {
        font-family: 'Montserrat', sans-serif;
    }
    button {
        background-color: #d9a068;
        border-color: #d9a068;
        border-radius: 10px;
    }
    button a {
        text-decoration: none ;
        color: #1f2b21;
        font-family: TeX Gyre Bonum;
    }
</style>