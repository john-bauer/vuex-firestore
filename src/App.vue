<template>
  <div id="app">

    <header>
      <navbar/>
      <br>
    </header>

    <b-container>
      <app-alert v-if="error" @dismissed="onDismissed" :variant="'danger'" :text="error.message"></app-alert>
    </b-container>

    <b-container>
      <router-view></router-view>
    </b-container>

    <footer>
      <b-container>
        <footerbar/>
      </b-container>
    </footer>

  </div>
</template>

<script>
import navbar from './components/NavBar'
import footerbar from './components/FooterBar'

export default {
  name: 'app',
  components: {
    navbar,
    footerbar
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
