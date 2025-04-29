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
    <div class="img-container br-radius">
      <nuxt-img :src="props.bcData.imgData.src"
                :alt="props.bcData.imgData.alt"
                class="card-img br-radius"
                :class="{'card-img-right' : props.isRight}"
                lazy/>
    </div>
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

  .img-container {
    overflow: hidden;

    .card-img {
      width: 24rem;
      height: 30rem;
      object-fit: cover;
      object-position: bottom left;
      cursor: pointer;

      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform-origin: center center;
      will-change: transform; /* Optimizes animations */

      &:hover {
        transform: scale(1.08);
      }
    }

    .card-img-right {
      object-position: bottom right !important;
    }
  }

  .card-title {
    color: var(--furniro-text-dark);
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
  }
}
</style>