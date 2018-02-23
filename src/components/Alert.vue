<template>
    <div>
      <b-alert dismissible :variant="variant" :show="text !== ''">{{ text }}</b-alert>
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      text: {
        type: String,
        default: 'There should have been a text passed to this alert box ... bummer ...'
      },
      variant: {
        type: String,
        default: 'danger'
      }
    },
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script>
