<template lang="html">
  <div id="app">
    <router-view id="content"></router-view>
    <transition name="retro-wave">
      <pre-loader v-if="preloader"/>
    </transition>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import PreLoader from './components/PreLoader.vue'

export default {
  data() {
    return {
      preloader: true,
    };
  },
  components: {
    AppFooter,
    PreLoader,
  },
  mounted() {
    setTimeout(() => {
      this.preloader = false;
    }, 2000);
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

.pre-loader {
  transition: height 0.5s ease, transform 0.5s ease, opacity 0.5s ease;
}
.retro-wave-leave-active {

}
.retro-wave-leave {
  opacity: 1;
}
.retro-wave-leave-to {
  opacity: 0;
  height: 0 !important;
  transform: scale(1.2) translateY(50px);
  border-top: 3px solid $clr-green;
}

</style>
