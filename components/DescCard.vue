<script setup lang="ts">

const props = defineProps({
  imgPath: {
    type: String,
    required: true
  }
});

</script>

<template>
<div id="desc-card">
  <img :src="props.imgPath" alt="sofa">
</div>
</template>

<style scoped lang="scss">
#desc-card {
  background: #F9F1E7;

  img {
    width: 605px;
    height: 348px;
  }
}
</style>