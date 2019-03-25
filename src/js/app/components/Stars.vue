<template lang="html">
  <div class="stars">
    <div id="stars1"></div>
    <div id="stars2"></div>
    <!-- <div id="stars3"></div> -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>

// n is number of stars required
@function multiple-box-shadow ($n, $color)
  $value: '#{random(2000)}px #{random(2000)}px #{$color}'
  @for $i from 2 through $n
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #{$color}'

  @return unquote($value)

$shadows-small:  multiple-box-shadow(200, #fff)
$shadows-medium: multiple-box-shadow(50, #ff0)
// $shadows-big:    multiple-box-shadow(100, #ff0)

@keyframes animStar
  from
    transform: translateY(0px)
  to
    transform: translateY(-2000px)

.stars > div
  position: absolute

#stars1
  width: 1px
  height: 1px
  background: transparent
  box-shadow: $shadows-small
  animation			: animStar 50s linear infinite

  &:after
    content: " "
    position: absolute
    top: 2000px
    width: 1px
    height: 1px
    background: transparent
    box-shadow: $shadows-small

#stars2
  width: 2px
  height: 2px
  background: transparent
  box-shadow: $shadows-medium
  animation			: animStar 100s linear infinite

  &:after
    content: " "
    position: absolute
    top: 2000px
    width: 2px
    height: 2px
    background: transparent
    box-shadow: $shadows-medium

// #stars3
//   width: 3px
//   height: 3px
//   background: transparent
//   box-shadow: $shadows-big
//   animation			: animStar 150s linear infinite
//
//   &:after
//     content: " "
//     position: absolute
//     top: 2000px
//     width: 3px
//     height: 3px
//     background: transparent
//     box-shadow: $shadows-big


</style>
