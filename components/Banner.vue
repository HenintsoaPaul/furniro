<script setup lang="ts">

</script>

<template>
  <section id="banner" aria-label="New Arrival banner">
    <nuxt-img src="/images/banner.jpg"
              alt="Scandinavian interior mockup with wall decal in cozy background"
              class="img-banner"
              preload/>

    <!-- hover -->
    <article class="br-radius">
      <h5 class="sub">New Arrival</h5>

      <h2 class="maj">
        Discover Our<br>
        New Collection
      </h2>

      <h4 class="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
        mattis.
      </h4>

      <button>
        <nuxt-link to="/shop">BUY NOW</nuxt-link>
      </button>
    </article>
  </section>
</template>

<style scoped lang="scss">
#banner {
  width: 100%;
  height: 45rem;
  position: relative;
  overflow: hidden;

  .img-banner {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 72%;
  }

  article {
    position: absolute;
    z-index: 2;
    bottom: 20%;
    right: 7%;
    width: 45rem;
    background: #FFF3E3;
    padding: 4rem 2.5rem 2.5rem;
    box-sizing: border-box;

    h2, h4, h5 {
      font-family: 'Poppins', sans-serif;
      margin: 0;

      &.sub {
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 3px;
        color: var(--furniro-text-dark);
      }

      &.maj {
        font-weight: 700;
        font-size: 52px;
        line-height: 65px;
        letter-spacing: 0;
        color: var(--furniro-primary-color);
      }

      &.para {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0;
        color: var(--furniro-text-dark);
      }
    }

    h4 {
      margin-top: .75rem;
    }

    h5 {
      margin-bottom: .75rem;
    }

    button {
      all: unset;
      margin-top: 4rem;
      font-family: 'Poppins', sans-serif;

      a {
        text-decoration: none;
        border: none;
        padding: 25px 72px;
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 3px;
        color: #fff;
        background-color: var(--furniro-primary-color);

        display: inline-block;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #614a15;
        }
      }
    }
  }
}
</style>