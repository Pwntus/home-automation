<template lang="pug">
md-snackbar(
  md-position="bottom center"
  ref="snackbar"
)
  span {{ message }}
</template>

<script>
export default {
  name: 'Snackbar',
  data () {
    return {
      message: null
    }
  },
  created () {
    this.bus.$on('ha:snackbar', (message) => {
      this.message = message
      this.$refs.snackbar.open()
    })
  },
  beforeDestroy () {
    this.bus.$off('ha:snackbar')
  }
}
</script>
