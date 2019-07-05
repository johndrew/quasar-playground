<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <test-menu />
  </q-page>
</template>

<style>
</style>

<script>
export default {
  components: {
    // 'test-menu': () => import('../components/MenuTest')
    'test-menu': () => import('../components/TestMenu')
  },
  name: 'PageIndex'
}
</script>
