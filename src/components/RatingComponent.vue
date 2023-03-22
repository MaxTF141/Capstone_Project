<template>
    <div class="rating">
      <span v-for="i in maxStars" :key="i" class="star" :class="{ 'filled': i <= filledStars }">
        <i class="fas fa-star"></i>
      </span>
      <span class="fraction" v-if="fraction !== 0">{{ fraction }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: Number,
        required: true,
      },
      maxStars: {
        type: Number,
        default: 5,
      },
    },
    computed: {
      filledStars() {
        return Math.floor(this.value);
      },
      fraction() {
        return (this.value - this.filledStars).toFixed(1);
      },
    },
  };
  </script>
  
  <style scoped>
  .star {
    font-size: 20px;
    color: #ddd;
  }
  
  .filled {
    color: #ff9900;
  }
  
  .fraction {
    font-size: 16px;
    color: #ddd;
    margin-left: 4px;
  }
  </style>
  