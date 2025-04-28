<script setup lang="ts">

const titles = [
    "Description",
    "Additional Information",
    "Reviews[5]"
]

</script>

<template>
  <h3 class="focused">Description</h3>
  <h3>Additional Information</h3>
  <h3>Reviews[5]</h3>

  <div id="desc">
    <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the
      unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>

    <p>
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as
      one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio
      which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue
      knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap
      enables easy and stylish travel.
    </p>
  </div>

  <div id="sary">
    <img src="/images/sofa.png" alt="sofa">
    <img src="/images/sofa.png" alt="sofa">
  </div>
</template>

<style scoped lang="scss">

h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0;

  color: #9F9F9F;

  .focused {
    color: black;
  }
}

#sary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .5rem;

  img {
    width: 605px;
    height: 348px;
  }
}

</style>