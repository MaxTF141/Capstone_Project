<template>
    <section id="about" class=" d-flex align-items-center">
        <div class="container-fluid">

            <!-- Section heading -->
            <h2 class="h1-responsive font-weight-bold text-center mb-4 display-2">Contact us</h2>
            <!-- Section description -->
            <p class="text-center mx-auto mb-5 w-75">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>

            <div class="row">

                <!-- Grid column -->
                <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="https://formspree.io/f/mnqybrzz" method="POST">

                        <!-- Grid row -->
                        <div class="row">

                            <!-- Grid column -->
                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="text" id="name" name="name" class="form-control" required/>
                                    <label class="form-label" for="name">Your name</label>
                                </div>
                            </div>
                            <!-- Grid column -->

                            <!-- Grid column -->
                            <div class="col-md-6 mb-4">
                                <div class="form-outline">
                                    <input type="email" id="email" name="email" class="form-control" required/>
                                    <label class="form-label" for="email">Your email</label>
                                </div>
                            </div>
                            <!-- Grid column -->

                        </div>
                        <!-- Grid row -->

                        <!-- Grid row -->
                        <div class="row mb-4">
                            <div class="col-md-12">
                                <div class="form-outline">
                                    <input type="text" id="subject" name="subject" class="form-control" required/>
                                    <label class="form-label" for="subject">Subject</label>
                                </div>
                            </div>
                        </div>
                        <!-- Grid row -->

                        <!-- Grid row -->
                        <div class="row mb-4">

                            <!-- Grid column -->
                            <div class="col-md-12">

                                <div class="form-outline">
                                    <textarea id="message" name="message" rows="4" class="form-control md-textarea"></textarea>
                                    <label class="form-label" for="message">Your message</label>
                                </div>

                            </div>
                        </div>
                        <!-- Grid row -->

                        <!-- Submit button -->
                        <div class="text-center">
                            <button type="submit" class="btn-md">Send</button>
                        </div>

                    </form>

                    <div class="status"></div>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 text-center">
                    <ul class="list-unstyled mb-0">
                        <li><i class="fas fa-map-marker-alt fa-2x"></i>
                            <p>The Old Biscuit Mill, 375 Albert Rd, Woodstock, Cape Town, 7915</p>
                        </li>

                        <li><i class="fas fa-phone mt-4 fa-2x"></i>
                            <p>+ 27 21 345 6789</p>
                        </li>

                        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                            <p>contact@bookingsecure.com</p>
                        </li>
                    </ul>
                </div>
                <!-- Grid column -->

            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  .container-fluid {
    padding-top: 130px;
    box-shadow: 3px 3px 7px #bbbbbb;
    background-color: white;
    width: 80%;
    min-height: 80vh;
    opacity: 0.9;
    border-radius: 30px;

  }
  #about {
    background-image: url('https://www.planetware.com/wpimages/2022/01/south-africa-cape-town-top-attractions-things-to-do-picnic-llandudno-beach.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    max-height: 100vh; 

  }
button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #e98c00;
    color: #fff;
    border: none;
    border-radius: 0;
}    
h2 {
    font-family: 'Roboto Slab', serif;
    letter-spacing: 4px;
  }
p {
font-family: 'Nunito', sans-serif;
font-size: x-large;
}

</style>