import { createStore } from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'

const api = 'http://localhost:2222/'

export default createStore({
  state: {
    user: null,
    users: null,
    // userId: null,
    restaurant: null,
    restaurants: null,
    message: null,
    spinner: true
  },

  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setUsers(state, users) {
      state.users = users
    },
    // setUserId(state, userId){
    //   state.userId = userId
    // },
    setRestaurant(state, restaurant) {
      state.restaurant = restaurant
    },
    setRestaurants(state, restaurants) {
      state.restaurants = restaurants
    },
    setMessage(state, message) {
      state.message = message
    }
  },
  getters: {
    loggedInUserId(state) {
    return state.userId ? state.userId.userId : null;
    }
  },
  actions: {
    async loginUser(context, payload) {
      const res = await axios.post(`${api}users`, payload, { withCredentials: true });
      const { result, err} = await res.data;
      if(result){
        // context.commit('setUserId', result.userId)
        context.commit('setUser', result);
        Cookies.set('userId', result.userId, {expires: 1, path: '/'})
        console.log(result.userId)
      } else {
        context.commit('setMessage', err);
      }
 
    },
    async registerUser(context, payload) {
      const res = await axios.post(`${api}register`, payload, { withCredentials: true });
      const { result, err } = await res.data;
        if(err) {
          context.commit('setMessage', err);
      } else {
        context.commit('setUser', result);
      }
    },
    async fetchUsers(context, payload) {
      const res = await axios.get(`${api}users`, payload);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit('setUsers', msg);
      } else {
        context.commit('setUsers', err);
      }
    },
    async fetchUser(context, userId) {
      const res = await axios.get(`${api}users/${userId}`);
      const {message} = await res.data;
      console.log(await res.data);
      if(message) {
        context.commit('setMessage', message);
      } else{
        context.commit('setUser', await res.data);
      }
    },
    async updateUser(context, payload) {
      const res = await axios.post(`${api}user`, payload);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit('setUser', msg);
      } else {
        context.commit('setUser', err);
      }
    },
    async fetchRestaurants(context) {
      const res = await axios.get(`${api}items`);
      console.log(await res.data)
      context.commit('setRestaurants',await res.data)
    },
    async fetchRestaurant(context, id) {
      const res = await axios.get(`${api}items/${id}`, { withCredentials: true });
      console.log(await res.data)
      context.commit('setRestaurant', await res.data)
    }
  },
  modules:{
  }
})
