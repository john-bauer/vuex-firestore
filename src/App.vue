<template>
  <div id="app">

    <header>
      <navbar/>
    </header>

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
  }
}
</script>
