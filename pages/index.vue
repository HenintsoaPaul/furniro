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
  <div id="landing">
    <Header></Header>

    <Banner></Banner>

    <Browse></Browse>

    <hr>

    <Desc></Desc>

    <hr>

    <Frame></Frame>

    <hr>

    <Footer></Footer>
  </div>
</template>

<style scoped lang="scss">
//#landing {
//  padding: 0 12.125rem;
//}
</style>