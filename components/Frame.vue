<script setup lang="ts">

import SupportIcon from "~/components/icons/SupportIcon.vue";
import ShippingIcon from "~/components/icons/ShippingIcon.vue";
import WarrantyIcon from "~/components/icons/WarrantyIcon.vue";
import TrophyIcon from "~/components/icons/TrophyIcon.vue";

interface MyFrameIcon {
  icon: string;
  title: string;
  para: string;
}

const frameIcons: MyFrameIcon[] = [
  {icon: TrophyIcon, title: 'High Quality', para: 'crafted from top materials'},
  {icon: WarrantyIcon, title: 'Warranty Protection', para: 'Over 2 years'},
  {icon: ShippingIcon, title: 'Free Shipping', para: 'Order over 150 $'},
  {icon: SupportIcon, title: '24 / 7 Support', para: 'Dedicated support'},
];

</script>

<template>
  <div id="frame">
    <ul>
      <li v-for="(fi, idx) in frameIcons" :key="idx">
        <component :is="fi.icon"/>
        <div class="icon-info">
          <h5>{{ fi.title }}</h5>
          <p>{{ fi.para }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
#frame {
  background-color: var(--furniro-frame-color);
  padding: 5rem 1rem;
  margin: 3rem 0;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    justify-content: space-around;

    li {
      list-style: none;
      font-family: 'Poppins', sans-serif;
      letter-spacing: 0;

      display: flex;
      flex-direction: row;
      align-items: center;

      .icon-info {
        display: flex;
        flex-direction: column;
        margin-left: 0.75rem;
      }

      h5 {
        font-weight: 600;
        font-size: 25px;
        line-height: 150%;
        color: var(--furniro-text-frame-black);
        margin: 0;
      }

      p {
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        color: var(--furniro-text-frame-grey);
        margin: 0;
      }
    }
  }
}
</style>