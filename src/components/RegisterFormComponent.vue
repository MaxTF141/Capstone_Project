<template>
    <div class="container-fluid">
        <div class="row">
            <div class="form col-6 mx-auto d-flex align-items-center">
                <form class="mx-auto my-auto p-5">
                    <h2 class="signInHeader text-center">Register</h2>
                    <div class="row">
                        <div class="col">
                            <div class="form-outline mb-2 mx-auto">
                                <input type="name" id="form2Example1" class="form-control" required/>
                                <label class="form-label" for="form2Example1">Name</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline mb-2 mx-auto">
                                <input type="surname" id="form2Example2" class="form-control" required/>
                                <label class="form-label" for="form2Example2">Surname</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-outline mb-2 mx-auto">
                                <input type="email" id="form2Example1" class="form-control" required/>
                                <label class="form-label" for="form2Example1">Email</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline mb-2 mx-auto">
                                <input type="tel" id="form2Example2" class="form-control" required/>
                                <label class="form-label" for="form2Example2">Mobile Number</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-outline mb-2 mx-auto">
                                <input type="password" id="form2Example1" class="form-control" required/>
                                <label class="form-label" for="form2Example1">Password</label>
                            </div>
                        </div>
                    </div>
                    <!-- Submit button -->
                    <div class="signB d-flex justify-content-center">
                        <button type="submit" class="btn-block mb-4">Sign in</button>
                    </div>
                    <div class="text-center">
                        <p>Already have an account? <router-link to="signin">Register</router-link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
form {
    width: 1000px;
    border: 0px solid #d9a068;
    border-radius: 30px;
    box-shadow: 0 0 2px inset black;
}

.form-outline,
.forgetP {
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
    text-decoration: none;
    color: #1f2b21;
    font-family: TeX Gyre Bonum;
}</style>