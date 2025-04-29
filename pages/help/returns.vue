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
  <div id="returns">
    <Header></Header>

    <div>
      <h1 class="jumbotron">Returns</h1>
    </div>

    <Footer></Footer>
  </div>
</template>

<style scoped lang="scss">
#landing {
  //padding: 0 12.125rem;

  hr {
    margin: 2.5rem 0;
    background-color: var(--furniro-hr-bg);
    border: none;
    width: 100%;
    height: 1px;
  }
}
</style>