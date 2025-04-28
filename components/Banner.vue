<script setup lang="ts">

</script>

<template>
  <div id="banner">
    <nuxt-img src="/images/img.png" alt="banner img"/>

    <!-- hover -->
    <div>
      <p class="sub">New Arrival</p>
      <p class="maj">Discover Our
        New Collection</p>
      <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
        mattis.</p>

      <button>BUY NOW</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
#banner {
  width: 100%;
  height: 45rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  div {
    position: absolute;
    bottom: 20%;
    right: 10%;
    height: 28rem;
    width: 40rem;

    background: #FFF3E3;
    padding: 5rem 2.5rem;
    box-sizing: border-box;
    border-radius: 6px;

    p {
      font-family: 'Poppins', sans-serif;
      margin: 0;

      &.sub {
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 3px;
        color: #333;
      }

      &.maj {
        font-weight: 700;
        font-size: 52px;
        line-height: 65px;
        letter-spacing: 0;
        color: #B88E2F;
      }

      &.para {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0;
        color: #333;
      }
    }

    button {
      margin-top: 3rem;
      width: 35%;
      height: 4rem;
      border: none;

      padding: 25px 72px ;

      font-weight: 700;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 3px;
      color: #fff;

      background-color: #B88E2F;
    }
  }
}
</style>