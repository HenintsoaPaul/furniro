<script setup lang="ts">

import type {BrowseCard} from "~/types";
import type {PropType} from "vue";

const props = defineProps({
  bcData: {
    required: true,
    type: Object as PropType<BrowseCard>
  },
  isRight: {
    type: Boolean,
    default: false
  }
});

</script>

<template>
  <article class="browse-card">
    <nuxt-img :src="props.bcData.imgData.src"
              :alt="props.bcData.imgData.alt"
              class="card-img br-radius"
              :class="{'card-img-right' : props.isRight}"
              lazy/>
    <h5 class="card-title">
      {{ props.bcData.title }}
    </h5>
  </article>
</template>

<style scoped lang="scss">
.browse-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  position: relative;

  .card-img {
    width: 24rem;
    height: 30rem;
    object-fit: cover;
    object-position: bottom left;
  }

  .card-img-right {
    object-position: bottom right !important;
  }

  .card-title {
    color: #333;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
  }
}
</style>