<script setup lang="ts">

const props = defineProps({
  bcData: {
    required: true,
    type: {
      imgTitle: {
        type: String,
        required: true,
      },
      imgPath: {
        type: String,
        required: true
      }
    }
  }
});

</script>

<template>
  <div id="browse-card">
    <img :src="props.bcData.imgPath" :alt="props.bcData.imgTitle">

    <h5>{{ props.bcData.imgTitle }}</h5>
  </div>
</template>

<style scoped lang="scss">
#browse-card {
  width: 381px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  img {
    border-radius: 6px;

    width: inherit;
    height: 480px;
  }

  h5 {
    color: #333;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
  }
}
</style>