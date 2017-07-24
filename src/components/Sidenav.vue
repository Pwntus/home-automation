<template lang="pug">
#sidenav
  md-sidenav.md-left.md-fixed(ref="sidenav")
    md-toolbar.md-dense.md-transparent
      h2.md-title Home Automation
    md-list.md-dense
      md-list-item(href="/login")
        span Login
</template>

<script>
export default {
  name: 'Sidenav',
  mounted () {
    this.bus.$on('ha:sidenav', () => {
      this.$refs.sidenav.toggle()
    })
  },
  beforeDestroy () {
    this.bus.$off('ha:sidenav')
  }
}
</script>

<style lang="scss">
#sidenav {
  position: fixed;
  z-index: 100;

  .md-sidenav-content {
    width: 250px;
  }

  .md-sidenav-backdrop {
    transition: none;
    background: transparent
  }
}
</style>
