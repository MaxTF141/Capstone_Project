import { createStore } from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'

const api = 'https://bookingsecure-3tqe.onrender.com/'

export default createStore({
  state: {
    user: null,
    users: null,
    isAuthenticated: false,
    restaurant: null,
    restaurants: null,
    message: null,
    cart: null,
    spinner: true
  },

  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setUsers(state, users) {
      state.users = users
    },
    setAuthentication(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
      },
    setRestaurant(state, restaurant) {
      state.restaurant = restaurant
    },
    setRestaurants(state, restaurants) {
      state.restaurants = restaurants
    },
    setMessage(state, message) {
      state.message = message
    },
    setCart(state, item) {
      state.cart = item
    }
  },

  actions: {
// LOGIN ACTION
    async loginUser(context, payload) {
      const res = await axios.post(`${api}users`, payload, { withCredentials: true });
      const { result, err} = await res.data;
      if(result){
        context.commit('setUser', result);
        Cookies.set('userId', result.userId, {expires: 1, path: '/'})
        alert( `Welcome back. have a nice browse`)
      } else {
        context.commit('setMessage', err);
      }
 
    },
// SIGN OUT A USER
    async signOut(context) {
      await axios.post(`${api}logout`);
      context.commit('isAuthenticated', false)
      context.commit('setUser', null);
    },
// REGISTER USER ACTION    
    async registerUser(context, payload) {
      const res = await axios.post(`${api}register`, payload, { withCredentials: true });
      const { result, err } = await res.data;
        if(err) {
          context.commit('setMessage', err);
          alert("You've been registered")
      } else {
        context.commit('setUser', result);
      }
    },
// FETCHING ALL USERS ACTION 
    async fetchUsers(context) {
      const res = await axios.get(`${api}users`);
      const result = await res.data;
      if (result) {
        context.commit('setUsers', await result.data);
      }
    },
// FETCHING ONE USER BY THEIR ID ACTION    
    async fetchUser(context, userId) {
      const res = await axios.get(`${api}users/${userId}`);
      const {message} = await res.data;
      if(message) {
        context.commit('setMessage', message);
      } else{
        context.commit('setUser', await res.data);
      }
    },
// UPDATING ONE USER BY THEIR ID ACTION     
    async updateUser(context,  {commit, userId, user}) {
      const { res, message } = await axios.put(`${api}users/${userId}`, user);
      if (res) {
        context.commit('setUser', res.data);
        commit('fetchUser')
        alert('User has been updated')
      } else {
        context.commit('setMessage', message);
      }
    },
// DELETE A USER 
    async deleteUser(context, userId) {
      const res = await axios.delete(`${api}users/${userId}`)
      context.commit('setUser', res.data)
    },
// FETCH ALL THE RESTAURANTS 
    async fetchRestaurants(context) {
      const res = await axios.get(`${api}items`);
    
      const restaurants = await res.data.map((restaurant) => {
        restaurant.hoursOfOperation = JSON.parse(restaurant.hoursOfOperation);
        return restaurant;
      });
    
      context.commit('setRestaurants', restaurants);
    },
// FETCH A SINGLE RESTAURANT
    async fetchRestaurant(context, id) {
      const res = await axios.get(`${api}items/${id}`, { withCredentials: true });
      context.commit('setRestaurant', await res.data)
    },
// UPDATE RESTAURANTS 
    async updateRestaurant(context, {restId, restaurant}){
      const res = await axios.put(`${api}items/${restId}`, restaurant)
      context.commit('setRestaurant', res.data);
    },
// DELETE A RESTAURANT 
    async deleteRestaurant(context, id ) {
      const {res, message} = await axios.delete(`${api}items/${id}`)
      if(res) {
        context.commit('setRestaurant', await res.data);
      } else {
        context.commit('setMessage', message)
      }
    },

// DISPLAY THE CART ITEMS 
    async fetchCart(context, id) {
      const res = await axios.get(`${api}user/${id}/carts`);
      context.commit('setCart', await res.data);
    },
// ADD AN ITEM TO THE CART     
    async addToCart(context, {id, payload}) {
      const {message, res} = await axios.post(`${api}user/${id}/cart`, payload);
      if(res){
        context.commit('setCart', await res.data);
      } else {
        context.commit('setMessage', message)
      }
    },
// DELETE AN ITEM FROM THE CART
    async deleteCartItem(context, dispatch,   { userId, id }) {
      const {res, message} = await axios.delete(`${api}user/${userId}/cart/${id}`)
      if(res) {
        context.commit('setCart', await res.data);
        dispatch('fetchCart')
      } else {
        context.commit('setMessage', message)
      }
    },
// CLEAR THE WHOLE CART 
    async clearCart(context, dispatch, userId) {
      const {res, message} = await axios.delete(`${api}user/${userId}/cart`);
      if(res) {
        context.commit('setCart', await res.data)
        dispatch('fetchCart')
      } else {
        context.commit('setMessage', message)
      }
    },

// UPDATE AN ITEM BY ID
    async updateCartItem(context, dispatch,   { userId, id, changes }) {
      const {res, message} = await axios.put(`${api}user/${userId}/cart/${id}`, changes)
      if(res) {
        context.commit('setCart', await res.data)
        dispatch('fetchCart')
      } else {
        context.commit('setMessage', message)
      }
    },
  },

  modules:{
  }
})
