<template lang="html">
  <main>
    <div class="preview-author">
      <div class="author-wrapper">
        <h1>Miroslaw Shpak</h1>
        <h4>DEVELOPER</h4>
      </div>
    </div>

    <div class="slider-wrapper">

      <!-- <transition>
        <button class="portfolio" @click="" v-if="fixed">
          MENU
        </button>
      </transition> -->

      <div class="interesting-text" ref="interesting" :class="{ fixed: fixed }">
        <div class="title">{{ title }}</div>
        <div class="content" v-html="content"></div>
        <!-- <button class="more" @click="$modal.show('portfolio')">
          MORE
        </button> -->
      </div>

      <modal name="portfolio">
        qweqweqwe
      </modal>

      <div class="grav-anchor" :class="{ fixed: fixed }">
        <div class="sun">
          <div ref="shadow" class="sun-shadow"></div>
        </div>

        <div ref="planet" class="planet">
          <div class="icon"></div>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      fixed: false,
      curr_section: -1,
      sections: [
        {
          name: 'EMBED SYSTEMS',
          text: 'C/C++ Embed dev - STM32, AVR, Arduino, Unreal Engine 4',
          background: 'http://i.imgur.com/ZZBiHOH.jpg',
        },
        {
          name: 'WEB',
          text: 'Web dev - PHP7 (Laravel, Lumen), JS (Vue.js, Node.js, ES6JS, Electron, Cordova)',
          background: 'https://cdn.mos.cms.futurecdn.net/noyPQQbBJyozEwVpULzUvM.jpg',
        },
        {
          name: 'UNIX',
          text: 'Advanced Linux user - Bash/Python scripting',
          background: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Map_of_Ganymede_by_Bj%C3%B6rn_J%C3%B3nsson.jpg',
        }
      ]
    };
  },
  methods: {
    animate() {

      const MAX_SIZE = 2;
      const MIN_SIZE = 0.4;
      const MAX_OFFSET = 300;

      var doc = document.documentElement;
      var screen = doc.clientHeight;
      var offset = ((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0));

      let pi_slashed = Math.PI / 2;
      let side_offset = Math.round(Math.cos(offset.map(0, 600, -pi_slashed, pi_slashed)) * MAX_OFFSET);
      let scale = Math.sin(offset.map(0, 600, -pi_slashed, pi_slashed)).map(-pi_slashed, pi_slashed, MIN_SIZE, MAX_SIZE);
      let z_index = Math.round(scale.map(MIN_SIZE, MAX_SIZE, 5, 15));
      let shadow_offset = Math.round(side_offset / 2) * -1;

      let section_num = parseInt(offset / 1200);

      this.$refs.planet.style.transform = 'scale(' + scale + ') translateX(' + side_offset + '%)';
      this.$refs.planet.style.zIndex = z_index;

      if(z_index < 11) {
        var display = 'none';
      } else {
        var display = 'block';
      }

      if(offset >= 120) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }

      this.$refs.shadow.style.transform = 'scale(' + scale + ') translateX(' + side_offset + '%)';
      this.$refs.shadow.style.zIndex = z_index - 1;
      this.$refs.shadow.style.boxShadow = shadow_offset + 'px 0 10px -10px rgba(10, 10, 10, 0.5)';
      this.$refs.shadow.style.display = display;

      this.$refs.interesting.style.opacity = scale.map(MIN_SIZE, MAX_SIZE, -0.5, 2);

      if(this.curr_section != section_num) {
        this.$refs.planet.style.backgroundImage = 'url(' + this.sections[section_num].background + ')';
        this.title = this.sections[section_num].name;
        this.content = this.sections[section_num].text;
        // $('.planet .icon').html(this.sections[section_num].icon);
        this.curr_section = section_num;
      }

    }
  },
  mounted() {
    this.animate();
    window.addEventListener('scroll', this.animate);
  }
}
</script>

<style lang="scss" scoped>

@import "~@/vars.scss";

@keyframes rotating {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.preview-author {
  width: 100%;
  height: 120px;
  margin: 0 auto;
  text-align: center;
  color: #000;
  .author-wrapper {
    background: #fff;
    padding: 20px 10px;
  }
  h1, h4 {
    margin: 10px 0;
    line-height: 150%;
    margin: 0;
  }
  h4 {
    font-weight: normal;
    font-size: 12px;
  }
  h1 {
    font-weight: 400;
    font-size: 40px;
    letter-spacing: 2px;
  }
}

.slider-wrapper {
  position: relative;
  height: 3600px;
}

.grav-anchor {
  transition: bottom 0.3s ease;
  position: fixed;
  width: 100%;
  bottom: 200px;
  &.fixed {
    position: fixed;
    bottom: 50%;
  }
}

.portfolio {
  position: fixed;
  left: 20px;
  top: 20px;
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  background: #fff;
  color: #000;
}

.sun {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background: #fff;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  background-image: url(http://solarviews.com/raw/jup/jupitercyl2.jpg);
  box-shadow: inset -10px 0 20px rgba(0,0,0,0.8);
  animation: rotating 20s linear infinite;
}
.sun-shadow {
  border-radius: 100%;
  background: transparent;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 120px;
  height: 120px;
}

.planet {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  box-shadow: inset -10px 0 20px rgba(0,0,0,0.8);
  animation: rotating 10s linear infinite;
}

.interesting-text {
  position: absolute;
  top: 20px;
  width: 700px;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 16;
  background: transparent;
  border-radius: 0 0 0 0;
  padding-bottom: 10px;
  color: #fff;
  border-bottom: 3px solid #fff;
  &.fixed {
    position: fixed;
  }
  .title {
    text-align: center;
    margin: 5px 0;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 50px;
    height: 60px;
    line-height: 60px;
  }
  .content {
    text-align: center;
    font-size: 16px;
  }
  .more {
    position: absolute;
    height: 40px;
    padding: 0 10px;
    line-height: 40px;
    background: #fff;
    color: #000;
    top: calc(100% + 10px);
    left: 10px;
  }
  @media (max-width: 600px) {
    width: 300px;
    height: 75px;
    .title {
      font-size: 30px;
      height: 30px;
      line-height: 30px;
    }
    .content {
      text-align: center;
      font-size: 14px;
    }
  }
}

@media (max-width: 600px) {
  .preview-author h1 {
    font-size: 30px;
  }
  .sun {
    width: 200px;
    height: 200px;
  }
  .sun-shadow {
    width: 90px;
    height: 90px;
  }
  .planet {
    width: 90px;
    height: 90px;
  }
}

</style>
