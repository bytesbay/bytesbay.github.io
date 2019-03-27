<template lang="html">
  <div id="app">
    <stars/>
    <router-view id="content"></router-view>
    <transition name="retro-wave">
      <pre-loader :percent="percent" v-if="preloader"/>
    </transition>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import PreLoader from './components/PreLoader.vue'
import Stars from './components/Stars.vue'

export default {
  data() {
    return {
      preloader: true,
      percent: 0,
      interval: null,
    };
  },
  components: {
    AppFooter,
    PreLoader,
    Stars,
  },
  mounted() {
    this.interval = setInterval(() => {
      this.percent += Math.random() * 20;

      if(this.percent > 100) {
        this.percent = 100;
        clearInterval(this.interval);
        this.$nextTick(() => {
          this.preloader = false;
        });
      }

    }, 100);
  }
}
</script>

<style lang="scss" scoped>

@import "~@/vars.scss";

@keyframes mig {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes mig-bright {
  0% {
    left: 0%;
  }
  100% {
    left: 100%;
  }
}

.retro-wave-leave-active {
  transition: background 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
}
.retro-wave-leave {

}
.retro-wave-leave-to {
  background-color: #fff !important;
  transform-origin: 50%;
  transform: scaleY(0);
}

</style>
