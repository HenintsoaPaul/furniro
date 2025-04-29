<script setup lang="ts">

import type {BrowseCard} from "~/types";

const cards: BrowseCard[] = [
  {
    imgData: {
      src: "/images/browse/b1.png",
      alt: "Browse dinning category",
    },
    title: "Dining"
  },
  {
    imgData: {
      src: "/images/browse/b2.png",
      alt: "Browse living category"
    },
    title: "Living"
  },
  {
    imgData: {
      src: "/images/browse/b3.png",
      alt: "Browse bedroom category"
    },
    title: "Bedroom"
  },
]
</script>

<template>
  <section id="browse" aria-label="Browse furniture categories">
    <header id="browse-title">
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <div id="browse-cards-container">
      <BrowseCard v-for="(bc, index) in cards"
                  :key="index"
                  :bc-data="bc"
                  :is-right="index === 1"
      />
    </div>
  </section>
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

    h2 {
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

  #browse-cards-container {
    display: flex;
    gap: 1rem;
  }
}
</style>