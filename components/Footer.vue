<script setup lang="ts">

import NewsletterForm from "~/components/Newsletter/NewsletterForm.vue";

interface MyLink {
  name: string;
  path: string;
}

const links: MyLink[] = [
  {name: "Home", path: "/Home"},
  {name: "Shop", path: "/Shop"},
  {name: "About", path: "/About"},
  {name: "Contact", path: "/Contact"},
]

const helps: MyLink[] = [
  {name: "Payment Options", path: "/Payment Options"},
  {name: "Returns", path: "/Returns"},
  {name: "Privacy Policies", path: "/Privacy Policies"},
]

</script>

<template>
  <footer id="footer">
    <div id="footer-container">
      <div id="footer-left">
        <h2>Furniro.</h2>
        <p>
          400 University Drive Suite 200 Coral Gables,
          <br>
          FL 33134 USA
        </p>
      </div>

      <nav id="footer-links" aria-label="Footer main navigation">
        <p class="link-title">Links</p>
        <ul>
          <li v-for="(li, idx) in links" :key="idx">
            <nuxt-link :to="li.path">
              {{ li.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <nav id="footer-helps" aria-label="Footer help links">
        <p class="link-title">Help</p>
        <ul>
          <li v-for="(li, idx) in helps" :key="idx">
            <nuxt-link :to="li.path">
              {{ li.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <div id="newsletter">
        <p class="link-title">Newsletter</p>
        <NewsletterForm/>
      </div>
    </div>
    <hr>
    <div id="copyright">
      <p>2023 furniro. All rights reserved</p>
    </div>
  </footer>

</template>

<style scoped lang="scss">
footer {
  font-family: 'Poppins', sans-serif;
  line-height: 100%;
  letter-spacing: 0;
  padding: 0 5rem;

  #footer-container {
    display: grid;
    grid-template-columns: 32rem 10rem 10rem 1fr;
    grid-gap: 5rem;

    p {
      color: #9F9F9F;
      margin-bottom: 0;
      margin-top: 0.5rem;
    }

    #footer-left {
      h2 {
        font-weight: 700;
        font-size: 24px;
        margin-top: 0;
        margin-bottom: 4rem;
      }
    }

    ul {
      padding: 0;

      li {
        list-style: none;
        margin-bottom: 3rem;

        a {
          text-decoration: none;
          color: #000;
        }
      }
    }

    .link-title {
      margin-bottom: 4rem;
    }
  }

  hr {
    border: none;
    background-color: #D9D9D9;
    width: 100%;
    height: 1px;
    margin: 3rem 0;
  }

  #copyright {
    p {
      font-weight: 400;
      font-size: 16px
    }

    margin-bottom: 3rem;
  }
}
</style>