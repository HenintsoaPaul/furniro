<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins&family=Montserrat&display=swap'
    }
  ]
})
</script>

<template>
  <div>
    <Header />

    <slot />

    <Footer />
  </div>
</template>

<style scoped lang="scss">

</style>