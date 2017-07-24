<template lang="pug">
#toolbar
  md-toolbar.md-dense.md-transparent(:class="{ scrolled }")
    md-button.md-icon-button(@click="toggleSidenav()")
      md-icon menu
    h2.md-title(
      @click="$router.push('/')"
    ) Home Automation
    .flex
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      scrolled: false
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
#toolbar {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  .md-toolbar {

    &.scrolled {
      -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
    }

    .md-title {
      cursor: pointer;
    }
  }
}
</style>
