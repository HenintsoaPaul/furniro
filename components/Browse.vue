<script setup lang="ts">
const elmts = [
  {
    imgPath: "/images/browse/b1.png",
    imgTitle: "Dining"
  },
  {
    imgPath: "/images/browse/b1.png",
    imgTitle: "Living"
  },
  {
    imgPath: "/images/browse/b1.png",
    imgTitle: "Bedroom"
  },
]
</script>

<template>
  <div id="browse-title">
    <h3>Browse The Range</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

  <div id="browse-cards">
    <BrowseCard v-for="(bc, index) in elmts" :key="index" :bc-data="bc"></BrowseCard>
  </div>
</template>

<style scoped lang="scss">

</style>