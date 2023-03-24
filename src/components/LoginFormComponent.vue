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
                        <i :class="{ icon }" @click="toggleIcon" id="togglePassword"></i>
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
                        <button type="submit" class="button mb-4">Sign in</button>
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
            },
            showPassword: false
        }
    },
    computed: {
        icon() {
            return this.showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
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
            this.$router.push('/restaurants');
        },
        toggleIcon(){
            this.showPassword = !this.showPassword;
        }
    },
    

}
</script>
<style scoped>
    .container-fluid {
        background-color: #f8fafb;
    }

    form {
        width: 400px;
        border: 0px solid #ff9900;
        border-radius: 30px;
        box-shadow: 3px 3px 7px #bbbbbb;
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
    .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #e98c00;
        color: #fff;
        border: none;
        border-radius: 0;
    }    
    button a {
        text-decoration: none ;
        color: #1f2b21;
        font-family: TeX Gyre Bonum;
    }

    .form-outline {
        position: relative;
    }
    .form-outline i {
        position: absolute ;
        top: 0;
        right: 0;
        margin-right: 10px;
        margin-top: 12px;

    }   
</style>