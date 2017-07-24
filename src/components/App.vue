<template lang="pug">
#app
  init
  snackbar
  toolbar
  sidenav
  router-view(v-if="AppInited")
</template>

<script>
import Init from '@/components/Init'
import Snackbar from '@/components/Snackbar'
import Toolbar from '@/components/Toolbar'
import Sidenav from '@/components/Sidenav'

export default {
  name: 'App',
  components: {
    Init,
    Snackbar,
    Toolbar,
    Sidenav
  },
  mounted () {
    this.$store.dispatch('App/init')
  }
}
</script>

<style lang="scss" scoped>
#app {
  padding-top: 48px;
}
</style>
