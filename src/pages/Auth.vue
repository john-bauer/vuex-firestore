<template>

  <div class="home">

    <b-card no-body>
      <b-tabs card>
        <b-tab v-if="!userIsAuthenticated" title="Login">
          <b-form-group id="loginEmailGroup"
                        label="Email address:"
                        label-for="loginEmail">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="email"
                          required
                          placeholder="Enter email">
            </b-form-input>
          </b-form-group>

          <b-form-group id="loginPasswordGroup"
                        label="Your Password:"
                        label-for="loginPassword">
            <b-form-input id="loginPassword"
                          type="password"
                          v-model="password"
                          required
                          placeholder="Enter password">
            </b-form-input>
          </b-form-group>
          <b-button @click="onSignin" variant="primary">Login</b-button>
        </b-tab>

        <b-tab v-if="!userIsAuthenticated" title="Register">
          <b-form-group id="registerEmailGroup"
                        label="Email address:"
                        label-for="registerEmail">
            <b-form-input id="registerEmail"
                          type="email"
                          v-model="newEmail"
                          required
                          placeholder="Enter email">
            </b-form-input>
          </b-form-group>

          <b-form-group id="registerPasswordGroup"
                        label="Your Password:"
                        label-for="registerPassword">
            <b-form-input id="registerPassword"
                          type="password"
                          v-model="newPassword"
                          required
                          placeholder="Enter password">
            </b-form-input>
          </b-form-group>

                    <b-form-group id="registerRepeatPasswordGroup"
                        label="Repeat Password:"
                        label-for="registerRepeatPassword">
            <b-form-input id="registerRepeatPassword"
                          type="password"
                          v-model="repeatPassword"
                          required
                          placeholder="Repeat password">
            </b-form-input>
          </b-form-group>


          <b-button @click="onSignUserUp" variant="primary">Register</b-button>
        </b-tab>

        <b-tab v-if="userIsAuthenticated" title="Logout">
          <b-button v-if="userIsAuthenticated" @click="onLogout" variant="primary">Logout</b-button>
        </b-tab>

      </b-tabs>
    </b-card>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        newEmail: '',
        newPassword: '',
        repeatPassword: ''
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
      onSignUserUp () {
        alert('Registration is currently disabled')
        // this.$store.dispatch('signUserUp', {email: this.newEmail, password: this.newPassword})
      },
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
