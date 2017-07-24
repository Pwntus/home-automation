<template lang="pug">
#login
  .outer
    .middle
      card(
        :loading="loading"
        :hidden="false"
      )
        md-card-header
          .md-title Login
          .md-subhead v0.1

        md-card-content
          md-input-container
            label Username
            md-input(
              v-model="username"
              :disabled="loading"
              @keyup.enter.native="login"
            )
          md-input-container(md-has-password)
            label Password
            md-input(
              type="password"
              v-model="password"
              :disabled="loading"
              @keyup.enter.native="login"
            )
        md-card-actions
          md-button(
            :disabled="loading"
            @click.native="login"
          ) Login
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'Login',
  components: { Card },
  data () {
    return {
      username: '',
      password: '',
      loading: false
    }
  },
  methods: {
    login () {
      if (this.username == '' || this.password == '') return
        
      this.loading = true
      let payload = {username: this.username, password: this.password }
      this.$store.dispatch('App/login', payload)
        .then(() => {
          this.$router.push('/dashboard')
        })
        .catch(err => {
          this.showSnackbar(err)
          this.loading = false
        })
    }
  },
  mounted () {
    if (this.AppUser !== null)
      this.$router.push('/dashboard')
  }
}
</script>

<style lang="scss">
#login {
  .outer {
    width: 100%;
    height: 100%;
    display: table;
    position: absolute;

    .middle {
      padding: 10px;
      display: table-cell;
      vertical-align: middle;

      .card {
        max-width: 350px;
        margin: 0 auto;
      }
    }
  }
}
</style>
