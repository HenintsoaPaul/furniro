<script setup lang="ts">

const links = [
  "Home",
  "Shop",
  "About",
  "Contact",
]

const helps = [
  "Payment Options",
  "Returns",
  "Privacy Policies",
]

</script>

<template>
  <div id="footer">
    <!--    left-->
    <div id="footer-left">
      <h1 id="title">Furniro.</h1>

      <p>
        400 University Drive Suite 200 Coral Gables,
        FL 33134 USA
      </p>
    </div>

    <!--    links-->
    <div id="footer-links">
      <ul>
        <li v-for="(li, idx) in links" :key="idx">
          {{ li }}
        </li>
      </ul>
    </div>

    <!--    help-->
    <div id="footer-helps">
      <ul>
        <li v-for="(li, idx) in helps" :key="idx">
          {{ li }}
        </li>
      </ul>
    </div>

    <!--    newsletter-->
    <div id="newsletter">
      <form>
        <input type="text" name="inp-name" required>
        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>

    <hr>

    <!--    copyright-->
    <div id="copyright">
      <p>2023 furino. All rights reverved</p>
    </div>
  </div>

</template>

<style scoped lang="scss">
#footer {
  font-family: 'Poppins', sans-serif;
  line-height: 100%;
  letter-spacing: 0;
  padding: 0 5rem;

  display: grid;

  #title {
    font-weight: 700;
    font-size: 24px;
  }

  p {
    color: #9F9F9F;
  }

  #copyright {
    p {
      font-weight: 400;
      font-size: 16px
    }
  }
}
</style>