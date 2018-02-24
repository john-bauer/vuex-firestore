<template>
  <div id="app">

    <header>
      <app-navbar :showLoginInline='false'/>
      <br>
    </header>

    <b-container>
      <app-alert v-if="error" @dismissed="onDismissed" :variant="'danger'" :text="error.message"></app-alert>
      <h1 v-if="loading">Loading ...</h1>
    </b-container>

    <b-container>
      <router-view></router-view>
    </b-container>

    <footer>
      <b-container>
        <app-footer/>
      </b-container>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
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
