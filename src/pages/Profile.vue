<template>
  <div class="home">
    <h1>Profile</h1>
    <h2 class="headline mb-0">{{ user.email }}</h2>
  </div>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      }
    }
  }
</script>
