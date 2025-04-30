<script setup lang="ts">
import NewsletterForm from "~/components/Newsletter/NewsletterForm.vue";

interface MyLink {
  name: string;
  path: string;
}

const links: MyLink[] = [
  {name: "Home", path: "/"},
  {name: "Shop", path: "/shop"},
  {name: "About", path: "/about"},
  {name: "Contact", path: "/contact"},
]

const helps: MyLink[] = [
  {name: "Payment Options", path: "/help/payment-options"},
  {name: "Returns", path: "/help/returns"},
  {name: "Privacy Policies", path: "/help/privacy-policies"},
]

const goHome = () => {
  const router = useRouter()
  router.push("/")
}
</script>

<template>
  <footer id="footer" class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <h2 class="logo" @click="goHome">Furniro.</h2>
        <p class="address">
          400 University Drive Suite 200 Coral Gables,
          <br/>
          FL 33134 USA
        </p>
      </div>

      <nav class="footer-links" aria-label="Footer main navigation">
        <p class="link-title">Links</p>
        <ul class="links-list">
          <li v-for="(li, idx) in links" :key="idx" class="link-item">
            <NuxtLink :to="li.path" class="link">
              {{ li.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <nav class="footer-helps" aria-label="Footer help links">
        <p class="link-title">Help</p>
        <ul class="links-list">
          <li v-for="(li, idx) in helps" :key="idx" class="link-item">
            <NuxtLink :to="li.path" class="link">
              {{ li.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="newsletter">
        <p class="link-title">Newsletter</p>
        <NewsletterForm/>
      </div>
    </div>
    <hr class="divider"/>
    <div class="copyright">
      <p>2023 furniro. All rights reserved</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  font-family: 'Poppins', sans-serif;
  padding: 2rem 5rem;
  max-width: 1920px;
  margin: 0 auto;

  &-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;

    @media (min-width: 1400px) {
      grid-template-columns: 32rem 10rem 10rem 1fr;
      gap: 5rem;
    }
  }

  &-left {
    .logo {
      font-weight: 700;
      font-size: 24px;
      margin: 0 0 2rem 0;
      cursor: pointer;
      transition: color 0.2s ease;

      &:hover {
        color: var(--furniro-primary-color, #000);
      }
    }

    .address {
      color: var(--furniro-text-grey);
      margin: 0.5rem 0 0 0;
      line-height: 1.6;
    }
  }

  .link-title {
    color: var(--furniro-text-grey);
    margin: 0 0 2rem 0;
    font-weight: 500;
    font-size: 1.1rem;
  }

  .links-list {
    padding: 0;
    margin: 0;
    list-style: none;

    .link-item {
      margin-bottom: 1.5rem;

      @media (min-width: 768px) {
        margin-bottom: 2rem;
      }

      @media (min-width: 1400px) {
        margin-bottom: 3rem;
      }

      .link {
        text-decoration: none;
        color: #000;
        transition: color 0.2s ease;

        &:hover {
          color: var(--furniro-primary-color, #000);
        }
      }
    }
  }

  .newsletter {
    @media (min-width: 768px) {
      grid-column: span 2;
    }

    @media (min-width: 1400px) {
      grid-column: auto;
    }
  }

  .divider {
    border: none;
    background-color: var(--furniro-hr-bg);
    width: 100%;
    height: 1px;
    margin: 3rem 0;
  }

  .copyright {
    p {
      font-weight: 400;
      font-size: 16px;
      color: var(--furniro-text-grey);
      margin: 0 0 2rem 0;
    }
  }
}
</style>