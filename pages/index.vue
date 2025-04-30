<script setup lang="ts">

</script>

<template>
  <div id="landing">
    <Banner></Banner>

    <Browse></Browse>

    <hr>

    <Desc></Desc>

    <hr>

    <Frame></Frame>

    <hr>
  </div>
</template>

<style scoped lang="scss">
#landing {
  hr {
    margin: 2.5rem 0;
    background-color: var(--furniro-hr-bg);
    border: none;
    width: 100%;
    height: 1px;
  }
}
</style>