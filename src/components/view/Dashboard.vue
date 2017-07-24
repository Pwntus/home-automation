<template lang="pug">
#dashboard
  b [dashboard]
</template>

<script>
export default {
  name: 'Dashboard',
  mounted () {
    if (this.AppUser == null) {
      this.$router.push('/')
      return
    }

    this.$store.dispatch('MIC/init')
      .catch(err => {
        console.log(err)
        this.$router.push('/logout')
      })
  }
}
</script>

<style lang="scss">
#dashboard {
  height: 100%;
  position: relative;
  z-index: 1;
}
</style>
