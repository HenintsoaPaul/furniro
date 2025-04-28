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
  <div id="browse">
    <div id="browse-title">
      <h3>Browse The Range</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div id="browse-cards">
      <BrowseCard v-for="(bc, index) in elmts" :key="index" :bc-data="bc"></BrowseCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
#browse {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0;

  margin-top: 54px;

  padding: 0 131px;
  display: flex;
  flex-direction: column;
  align-items: center;

  #browse-title {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-weight: 700;
      font-size: 32px;
      line-height: 100%;
      margin: 0;
    }

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      color: #666;
      margin-top: .75rem;
    }
  }

  #browse-cards {
    display: flex;
    gap: 1rem;
  }
}
</style>