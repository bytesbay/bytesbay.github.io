<template lang="html">
  <footer>
    <div class="footer">
      <a href="https://github.com/bytesbay">GITHUB</a>
      <a href="https://t.me/bytesbay">TELEGRAM</a>
      <a href="mailto:bytesbay@icloud.com">E-MAIL</a>
      <a href="tel:380932502176">PHONE</a>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

@import "~@/vars.scss";

footer {
  display: flex;
  align-items: stretch;
  justify-content: center;
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 300px;
    border-top: 3px solid $clr-green;
    font-size: 22px;
    a {
      flex-grow: 1;
      padding: 10px 0;
      color: $clr-green;
      &:hover {
        background: $clr-green;
        color: #000;
      }
    }
  }
}

</style>
