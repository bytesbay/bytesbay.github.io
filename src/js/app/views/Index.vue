<template lang="html">
  <main>
    <div class="preview-author">
      <div class="authoer-wrapper">
        <h1>MIROSLAW SHPAK</h1>
        <h4>Programmer / Designer </h4>
      </div>
    </div>

    <div class="slider-wrapper">

      <div class="interesting-text" ref="interesting" :class="{ fixed: fixed }">
        <div class="title" ref="title"></div>
        <div class="content" ref="content"></div>
      </div>

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
      fixed: false,
      curr_section: -1,
      sections: [
        {
          name: 'EMBED SYSTEMS',
          text: 'C/C++ Embed dev - STM32, AVR, Arduino',
          background: '#fff',
          icon: '<i class="fas fa-microchip"></i>'
        },
        {
          name: 'WEB',
          text: 'Web dev - PHP7, JS, SQL, HTML/CSS',
          background: '#fff',
          icon: '<i class="fas fa-globe"></i>'
        },
        {
          name: 'UNIX',
          text: 'Advanced Linux user - Bash/Python scripting.',
          background: '#fff',
          icon: '<i class="fab fa-linux"></i>'
        },
        {
          name: 'DESIGN',
          text: 'This site is one of many sites I designed and made',
          background: '#fff',
          icon: '<i class="fas fa-paint-brush"></i>'
        },
        {
          name: 'Also ... ',
          text: 'Knowledge of newest technologies like blockchain and deep learning',
          background: '#fff',
          icon: '<i class="fas fa-bolt"></i>'
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

      if(offset >= 100) {
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

        this.$refs.planet.style.backgroundColor = this.sections[section_num].background;

        this.$refs.title.innerHTML = this.sections[section_num].name;
        this.$refs.content.innerHTML = this.sections[section_num].text;

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

.preview-author {
  width: 100%;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  color: #000;
  padding: 10px;
  .authoer-wrapper {
    background: $clr-green;
    padding: 10px;
  }
  h1, h4 {
    margin: 10px 0;
    line-height: 100%;
  }
  h4 {
    font-weight: normal;
  }
  h1 {
    font-weight: 500;
    letter-spacing: 5px;
    font-size: 40px;
  }
}

.slider-wrapper {
  position: relative;
  height: 6000px;
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
  background: $clr-green;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://svs.gsfc.nasa.gov/vis/a010000/a012000/a012021/Hubble_Jupiter_maps_compared_H264_1920x1080_print.jpg);
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
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://cdn.mos.cms.futurecdn.net/noyPQQbBJyozEwVpULzUvM.jpg);
}

.interesting-text {
  position: absolute;
  top: 20px;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 16;
  background: transparent;
  border-radius: 0 0 0 0;
  padding-bottom: 10px;
  color: $clr-green;
  border: 3px solid $clr-green;
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
    font-size: 18px;
  }
  @media (max-width: 600px) {
    width: 300px;
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
