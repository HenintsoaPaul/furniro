<script setup lang="ts">

import AccountAlertIcon from "~/components/icons/AccountAlertIcon.vue";
import SearchIcon from "~/components/icons/SearchIcon.vue";
import HeartIcon from "~/components/icons/HeartIcon.vue";
import ShoppingCartIcon from "~/components/icons/ShoppingCartIcon.vue";

interface NavLink {
  name: string;
  path: string;
  icon?: string;
}

const centerLinks: NavLink[] = [
  {name: 'Home', path: '/'},
  {name: 'Shop', path: '/shop'},
  {name: 'About', path: '/about'},
  {name: 'Contact', path: '/contact'},
];

const headerIcons = [
  {icon: AccountAlertIcon, label: 'Account alerts'},
  {icon: SearchIcon, label: 'Search'},
  {icon: HeartIcon, label: 'Favorites'},
  {icon: ShoppingCartIcon, label: 'Shopping cart'},
];

</script>

<template>
  <header>
    <div id="header-container">
      <!-- left -->
      <div id="header-left">
        <nuxt-img src="/images/logo.png" alt="Furniro logo" width="50" height="50"/>
        <h3>Furniro</h3>
      </div>

      <!-- center -->
      <nav>
        <ul>
          <li v-for="(link, idx) in centerLinks" :key="idx">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </li>
        </ul>
      </nav>

      <!-- right -->
      <div id="header-right">
        <ul>
          <li v-for="(ic, idx) in headerIcons" :key="idx" :aria-label="ic.label">
            <button :aria-label="ic.label">
              <component :is="ic.icon"/>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>


<style lang="scss">
header {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  #header-container {
    width: 100%;
    height: 41px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    #header-left {
      display: flex;
      height: 41px;
      width: 100%;
      align-items: center;

      padding-left: 54px;

      h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 34px;
        line-height: 100%;
        letter-spacing: 0;
      }
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;

      ul {
        display: flex;
        gap: 75px;

        li {
          list-style: none;

          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0;

          a {
            text-decoration: none;
            color: black;
          }
        }
      }
    }

    #header-right {
      display: flex;
      align-items: center;
      justify-content: center;

      ul {
        display: flex;
        gap: 45px;

        li {
          list-style: none;

          button {
            all: unset;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>