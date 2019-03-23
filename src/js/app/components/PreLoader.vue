<template lang="html">
  <div class="pre-loader">
    <div class="abs">
      <div class="stripe">
        <div class="ready"></div>
      </div>
      <div class="copy">
        &copy; <span>PRAVOTE</span> <span>DATA</span> <span>SYSTEMS</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

@import "~@/vars.scss";

.pre-loader {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $clr-dd-green;
  z-index: 100;
  overflow: hidden;
  .abs {
    position: absolute;
    bottom: 50px;
    width: 500px;
    left: 0;
    right: 0;
    margin: 0 auto;
    .stripe {
      width: 100%;
      height: 50px;
      border: 3px solid $clr-green;
      .ready {
        width: 90%;
        height: 100%;
        background: $clr-green;
        float: left;
      }
    }
    .copy {
      padding-top: 50px;
      font-size: 26px;
      text-align: center;
      span {
        padding: 0 5px;
      }
    }
  }
}

</style>
