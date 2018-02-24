<template>

  <b-navbar toggleable="md" type="dark" variant="primary" sticky>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">vuex-firestore</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>

        <b-nav-item to="#">link</b-nav-item>
        <b-nav-item v-if="userIsAuthenticated" to="/profile">profile</b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->

      <b-navbar-nav v-if="showLoginInline" class="ml-auto">
        <b-form v-if="!userIsAuthenticated" inline>
          <label class="sr-only" for="email">Name</label>
          <b-form-input autocomplete="email" v-model="email" size="sm" class="mr-sm-2" type="email" placeholder="Email" id="email"/>
          <label class="sr-only" for="password">Passwird</label>
          <b-form-input autocomplete="current-password" v-model="password" size="sm" class="mr-sm-2" type="password" placeholder="Password" id="password"/>
          <b-button @click="onSignin" size="sm" class="my-2 my-sm-0">login</b-button>
        </b-form>
        <b-button v-else @click="onLogout" size="sm" class="my-2 my-sm-0">logout</b-button>
      </b-navbar-nav>

    </b-collapse>

    <b-navbar-nav  v-if="!showLoginInline" class="ml-auto">
      <b-nav-item to="/auth"><icon name="user"/></b-nav-item>
    </b-navbar-nav>

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
    props: {
      showLoginInline: {
        type: Boolean,
        default: false
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
