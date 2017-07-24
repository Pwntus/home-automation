import Vue from 'vue'
import { mapGetters } from 'vuex'

const bus = new Vue()

Vue.mixin({
  data () {
    return {
      bus
    }
  },
  computed: {
    ...mapGetters({
      AppInited:      'App/inited',
      AppUser:        'App/user'
    })
  },
  methods: {
    showSnackbar (message = null) {
      this.bus.$emit('ha:snackbar', message)
    },
    toggleSidenav () {
      this.bus.$emit('ha:sidenav')
    }
  }
})
