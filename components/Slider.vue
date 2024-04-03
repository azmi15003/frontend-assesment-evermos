<template>
  <div class="relative slider-container">
    <span class="left-arrow" @click="prev()">&#10094;</span>
    <div class="slider">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" width="100%" />
      </div>
    </div>
    <span class="right-arrow" @click="next()">&#10095;</span>

    <div class="circle">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    images: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      timer: null,
      currentIndex: 0,
    }
  },
    mounted: function() {
      this.startSlide();
    },

    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 4000);
      },

      next: function() {
        this.currentIndex += 1
      },
      prev: function() {
        this.currentIndex -= 1
      }
    },

    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }

}
</script>

<style lang="scss" scoped>
.slider-container {
  height: 400px;
}
.slider {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  cursor: pointer;
  z-index: 0;
  left: 0px;
  opacity: 0;
}

.slider{
  z-index: 1;
  opacity: 1;
  animation: imageAnimateOpacity 1s ease;
}

.left-arrow, .right-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  background-color: black;

  border-radius: 100%;
  font-weight: bold;
  font-size: 20px;
  color: white;
  top: 45%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
span:hover {
  background-color: #066c6c;
  transition: 0.2s;
}
.left-arrow {
  left: -40px;
  animation: left-arrow 0.5s ease;
}

@keyframes left-arrow {
  from {
    left: 0px;
    opacity: 0;
  }
  to {
    opacity: 1;
    left: -40px;
  }
}

.right-arrow {
  right: -40px;
  animation: right-arrow 0.5s ease;

}

@keyframes right-arrow {
  from {
    opacity: 0;
    right: 0px;
  }
  to {
    opacity: 1;
    right: -40px;
  }
}

.circle {
  margin-top: 20px;
  text-align: center;
}

.circle span {
  display: inline-block;
  margin: 5px;
  padding: 5px;
  border: 2px solid silver;
  box-shadow: 0px 0px 1px silver;
  border-radius: 100%;
  cursor: pointer;
}
.slider > img {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 25px;
  height: 25px;
  z-index: 3;
  cursor: pointer;
  background-color: white;
  opacity: 0.7;
}

@media screen and (max-width: 800px) {
  .slider-container {
    height: 140px;
  }

  .right-arrow, .left-arrow {
    display: none;
  }
}
</style>
