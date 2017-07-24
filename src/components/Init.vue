<template lang="pug">
#init(v-if="!AppInited")
  md-spinner.md-primary(
    :md-size="100"
    md-indeterminate
  )
</template>

<script>
export default {
  name: 'Init'
}
</script>

<style lang="scss" scoped>
#init {
  position: fixed;
  top: 0 ;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  .md-spinner {
    margin: -50px 0 0 -50px;
    position: fixed;
    top: 50%;
    left: 50%;
  }
}
</style>
