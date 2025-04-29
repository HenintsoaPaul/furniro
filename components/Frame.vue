<script setup lang="ts">

import SupportIcon from "~/components/icons/SupportIcon.vue";
import ShippingIcon from "~/components/icons/ShippingIcon.vue";
import WarrantyIcon from "~/components/icons/WarrantyIcon.vue";
import TrophyIcon from "~/components/icons/TrophyIcon.vue";

import type {IconLink} from "~/types";

interface FrameIcon {
  iconLink: IconLink;
  para: string;
}

const frameIcons: FrameIcon[] = [
  {
    iconLink: {
      icon: TrophyIcon, label: 'High Quality'
    },
    para: 'crafted from top materials'
  },
  {
    iconLink: {
      icon: WarrantyIcon, label: 'Warranty Protection'
    },
    para: 'Over 2 years'
  },
  {
    iconLink: {
      icon: ShippingIcon, label: 'Free Shipping'
    },
    para: 'Order over 150 $'
  },
  {
    iconLink: {
      icon: SupportIcon, label: '24 / 7 Support'
    },
    para: 'Dedicated support'
  },
];

</script>

<template>
  <div id="frame">
    <ul class="ul-config">
      <li v-for="(fi, idx) in frameIcons" :key="idx">
        <component :is="fi.iconLink.icon"/>
        <div class="icon-info">
          <h5>{{ fi.iconLink.label }}</h5>
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
    align-items: center;
    justify-content: space-around;

    li {
      font-family: 'Poppins', sans-serif;
      letter-spacing: 0;

      display: flex;
      flex-direction: row;
      align-items: center;

      .icon-info {
        display: flex;
        flex-direction: column;
        margin-left: 0.75rem;

        h5, p {
          line-height: 150%;
          margin: 0;
        }

        h5 {
          font-weight: 600;
          font-size: 25px;
          color: var(--furniro-text-frame-black);
        }

        p {
          font-weight: 500;
          font-size: 20px;
          color: var(--furniro-text-frame-grey);
        }
      }
    }
  }
}
</style>