<template>

  <b-navbar toggleable="md" type="dark" variant="info" sticky>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">vuex-firestore</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>

        <b-nav-item to="#1">link 1</b-nav-item>
        <b-nav-item to="#2">link 2</b-nav-item>
        <b-nav-item to="#3">link 3</b-nav-item>
        <b-nav-item v-if="userIsAuthenticated" to="/profile">profile</b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-form-input v-if="!userIsAuthenticated"  v-model="email" size="sm" class="mr-sm-2" type="email" placeholder="Email"/>
        <b-form-input v-if="!userIsAuthenticated" v-model="password" size="sm" class="mr-sm-2" type="password" placeholder="Password"/>
        <b-button v-if="!userIsAuthenticated" @click="onSignin" size="sm" class="my-2 my-sm-0">login</b-button>
        <b-button v-else @click="onLogout" size="sm" class="my-2 my-sm-0">logout</b-button>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/profile')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onSigninGoogle () {
        this.$store.dispatch('signUserInGoogle')
      },
      onSigninFacebook () {
        this.$store.dispatch('signUserInFacebook')
      },
      onSigninGithub () {
        this.$store.dispatch('signUserInGithub')
      },
      onSigninTwitter () {
        this.$store.dispatch('signUserInTwitter')
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      },
      onLogout () {
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    }
  }
</script>
