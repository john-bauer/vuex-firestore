<template>

  <div class="home">

    <h1 v-if="userIsAuthenticated">Logout</h1>

    <b-form v-if="!userIsAuthenticated">

      <h1>Login</h1>

      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>

    </b-form>


    <b-button v-if="!userIsAuthenticated" @click="onSignin" variant="primary">Login</b-button>
    <b-button v-if="userIsAuthenticated" @click="onLogout" variant="primary">Logout</b-button>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        passwordCheck: ''
      }
    },
    props: {
      showLogin: {
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
