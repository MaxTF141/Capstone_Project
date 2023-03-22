<template lang="">
  <section id="nav-bar" class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <img src="" alt="logo">
          <ul class="d-flex gap-5">
            <router-link class="nav-link-left" to="/">Home</router-link>
            <router-link class="nav-link-left" to="/restaurants">Restaurants</router-link>
            <router-link class="nav-link-left" to="/about">About Us</router-link>
            <router-link class="nav-link-left" to="/about">Contact Us</router-link>
          </ul>
          <ul class="d-flex justify-content-end">
            <div class="sign d-flex" v-if="!user">
              <div class="signInB p me-3 pt-1">
                <router-link v-if="$route.path !== '/signin'" to="/signin">Sign In</router-link>
              </div>
              <button class="buttonB p-1" v-if="$route.path !== '/signup'"><router-link to="/signup" class="buttonText">Sign Up</router-link></button>
            </div>
            <div class="profile d-flex gap-2  align-items-center" v-if="user">
              <router-link :to="`/user/${user.userId}/cart`"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABT0lEQVR4nN2Vv0oDQRDGVwsR0ULETrDyARQfwhiw0loQuZlELK3TBt9AOG/mCGns0wna26nxZiNBiApiYaWohZ5svGBQzvsroj/Y7pv5Zndmd5X6F2hGv7eEkXI3EMLXDwN4au1uTuZuYhDGRv9uUq4DFYamUjGzAcFJqIFfqQwKQ7srdGAxVPgJz14bE8YbE+cxLn0r1oRbQbMbcQ00QbUbQ3AYKT6ul8aF8cE0vunATJS+VVuf6uk915qPVZEQcDBR25Fahnpw9jUVl3PHmguC7q53rJHQ6l2cFYYXYXxs2uVplQRNeJRgcqqJkp+5GxPCcBuV2FRujuiCVoeTVc9oB0n2fV8NqDw53SuPmudCEz7HmaIUBitDmvA+zS1WcfEYluP0QKc1+HE0lYpCeCWEl8JYyKr7ggno+x86WXW/YMBYeN82dISshay6v80bA4XWq878rO4AAAAASUVORK5CYII="></router-link>

              <div class="dropstart">
                <a href="#" class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5UlEQVR4nO1Z3YscRRAf5VD8AvH7xY/EFxMVP1HwUeKfkDOCL+bOqZrVMyaCmhjdJ7+fjCJIsls9C4ocfpwxJhclriEhCclLHjY33XuJguCbLz4IuUvOk+rdve29nZnumZ3bE0nBwNDT3fWr6qrqqhrPu0T/I/rjM//q2ar/sCLcpMifkCJ4jR9+5zH+xnO8/xI1hX+3JHxTCTyqBM4rgYuWZ14RHlECd6pKsHb1gFfhKUXwsyT8xwF07CP1WjikwmDD0IDPitK9kuCXWEACFpTASBJ+Iwk/VgTv8cPvPKa/tebECVRvVmD9igFfLJcvVwK2x5gJm8SUpGDjTPjCjbZ95Of+TTL0n1YE38XtJQlfX1z0LisUfGOydK0i2N/HTOCu2Wpwe959z4X+HUrAJ8sFkQL2Mc9CwLPGFOGpHvDshGGwrjB/qsD6dhAwFAQnmfdAG0d7Nl9ngmenkwRv1+vlEa9gqtfLI0rAu71BAU7mPglt84bZSMKLkmDMZW2DSrdx3Jehv00K2MrvPOayVhE8z7y6fOH7XD7RdlhT81bwkQgekQQH4yKNHiOYbob4kIsQqifcwquZQ6XpWGw2tjWS8GVTc4kPwQVF+JJVCIHvGz43l8nnJOFh02FtNs/gM19kFiHq9fKIJDxm+MMh9xs2g+Qts3HQfOxJlB5M23umhvf1WEIVn7QKoK/2JbvFXdb5BNN5UwlFsN9h/08NU/7JJTHrhLF52yXFkSUlNbDnQgIWzu0euzWNx5k9pTs7p8DYIoK7EidLgrcM85myawc35dZ+V4hRGx8pcK+xZkcyIOM2dNlYEb4ysAChv83KR8AzRkg/HDuJC42loxKw4JKYDUuAZmXi5iXTJpz7fXLrVX2TdCXVdZYZ26bDNCEmJUB2zTsmevWCgW89ByrCic/W8BYXXu30O1loXbdmCJ9L6wQeyC8A/uDOR6fdHQW/aMt93nHdmHMbfSllFYDXVOABVz6MyRBge78ABG8YR/SBl4EiAVuyn0CMFlNIEn6YGkrNfEYSCC8jcW7jdBJ6TjbwTJIwTM2jdJ2awzZN4ujA6UFSOs37ZjGbJF/j+ttbTlHoP2r4wFlvAOL0gBXCxUz7GXWNNkmkCH/t4OOQ3zeh+dHElVLA+c6k1JxjyHSmlQ91TvI8Y42daObfTRE8l7e12Gqb9LYWeYy/xd6iFoqquNmw/yOJE81QymmybWO9phKsbUewo7p+sDqxnsM51w5ZG1/jwoPLVKfyks2mE0k49+DSMhF4GGzQ9e+grUWC6bRCJar693fzILjA5pSuUcIvjVhdiQG+Tgr8MS/olPA6Lcm/p0/7AskQ+ItU8H3RSMBCVA2e4HFubSgR+FLg34WDF10HZZ/hlo5WVs1/vLdchcesArROwewHQeM32nK9FPj1SgFX/YJ8pXkSNIyxfV6WnqUk+Ms43j+HBV7F8GQsmXuwbC5DBy2STgTHvaykbZ5warXBK8Kp3O12vpgk4YlV0zzhiYH/qTV2j90gBRwfvtnAcebtFUGna89es6y1sdI2v5d5ekUS2yF3EJzShfz2Psc8Cv/F1HcTG7lJcfYOB4v862Mlzl+4yBj8NysecGrarpggtfE1Om3mlrxjNspz9ZqaWzY6NGpMbryCS0auwCLysVMPtN5hlL/xnNXGeYm8AulfJKgHczjPD+IAAAAASUVORK5CYII=">
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><router-link :to="`/profile/${user.userId}`" class="dropdown-item" >See your Profile</router-link></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#" @click="signOutUser">Sign Out</a></li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
</section>
  
</template>
<script>

import Cookies from 'js-cookie'

export default {
  computed: {
    cookieExists() {
      return !!Cookies.get('authorization_token');
    },
    user() {
      return this.$store.state.user
    }
  },
  mounted(){
    const userId = Cookies.get('userId')
      if(userId) {
        this.$store.dispatch('fetchUser', userId)
      }
    },
    methods: {
      async signOutUser() {
        await this.$store.dispatch('signOut').then(() => {
          const userCookie = Cookies.get('userId', { path: '/'})
          if(userCookie) {
            Cookies.remove('userId', { path: '/' })
            console.log('Cookie has been removed')
            this.$router.push('/signin') 
          }
        })
        location.reload()
      }
    }
}
</script>

<style>
/* .navbar {
  position: fixed !important;
  top: 0 !important;
} */
.nav-link-left {
  font-family: TeX Gyre Bonum;
  color: white;
  text-decoration: none;
  font-size: larger;
}
nav a.router-link-exact-active {
  color:#d9a068;
}

.buttonB {
    background-color: #d9a068;
    border-color: #d9a068;
    border-radius: 10px;
}
button a {
  text-decoration: none ;
  color: #1f2b21;
  font-family: TeX Gyre Bonum;
}
.signInB a  {
  text-decoration: none ;
  color: #d9a068;
  font-family: TeX Gyre Bonum;
  font-size: large;
}
.dropdown-menu li, .dropdown-menu li a {
  color: #d9a068;
}
.dropstart .dropdown-toggle::before {
  color: #d9a068;
}
</style>