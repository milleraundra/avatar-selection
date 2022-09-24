<template>
  <div class="m-5">
    <h1 class="text-3xl pb-5">Choose your avatar</h1>
    <ChooseAvatars msg="Welcome to Your Vue.js App" />

  </div>
</template>

<script>
import ChooseAvatars from './components/ChooseAvatars.vue'

export default {
  name: 'App',
  components: {
    ChooseAvatars
  }
}
</script>

<style>

</style>
