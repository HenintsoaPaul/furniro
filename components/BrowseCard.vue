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
  height: 480px;
}
</style>