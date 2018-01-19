<template>
  <div class="error">
    <h1 class="caution"> {{ errorMessage }} </h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'error',
  computed: mapState({
    errorMessage: state => state.errorMessage
  })
}
</script>

<style>
  .error {
    color: red
  }
</style>
