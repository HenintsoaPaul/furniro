<script setup lang="ts">

const props = defineProps({
  imgPath: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String,
    required: true
  },
});

</script>

<template>
<div id="desc-card">
  <nuxt-img :src="props.imgPath" :alt="props.imgAlt"/>
</div>
</template>

<style scoped lang="scss">
#desc-card {
  background: #F9F1E7;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 605px;
    height: 348px;
  }
}
</style>