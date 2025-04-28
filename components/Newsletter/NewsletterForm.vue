<script setup lang="ts">

</script>

<template>
  <form>
    <input type="text"
           class="border-bottom"
           name="inp-name"
           placeholder="Enter Your Email Address"
           required>
    <button type="submit"
            class="border-bottom">
      SUBSCRIBE
    </button>
  </form>
</template>

<style scoped lang="scss">
.border-bottom {
  border: none;
  border-bottom: 1px solid #000;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0;
}

form {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0;

  button {
    padding: 0 0 7px 0;
    background-color: transparent;

    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
  }

  input {
    padding: 0 0 3px 0;
    margin: 0 .5rem 0 0;

    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
  }
}
</style>