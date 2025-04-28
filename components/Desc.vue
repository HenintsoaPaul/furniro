<script setup lang="ts">

interface MyLink {
  name: string;
  path: string;
  focused: boolean;
}

const links: MyLink[] = [
  {name: "Description", path: "/desc", focused: true},
  {name: "Additional Information", path: "/info", focused: false},
  {name: "Reviews[5]", path: "/reviews", focused: false},
]

const descCards = [
  {imgPath: "/images/sofa.png", imgAlt: "Sofa"},
  {imgPath: "/images/sofa.png", imgAlt: "Sofa"},
]

</script>

<template>
  <section id="desc">
    <nav aria-label="Product description navigation">
      <ul>
        <li v-for="(li, idx) in links" :key="idx">
          <nuxt-link :to="li.path" :class="{ 'focused' : li.focused }">
            {{ li.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>


    <article aria-label="Product description details">
      <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the
        unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>

      <p>
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as
        one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced
        audio
        which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The
        analogue
        knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap
        enables easy and stylish travel.
      </p>
    </article>

    <div id="cards-container">
      <DescCard v-for="(dc, idx) in descCards" :key="idx"
                :img-path="dc.imgPath" :img-alt="dc.imgAlt"/>
    </div>
  </section>
</template>

<style scoped lang="scss">
#desc {
  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;

    padding: 0;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 3rem;


      li {
        list-style: none;

        a {
          text-decoration: none;
          color: #9F9F9F;

          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 100%;
          letter-spacing: 0;

          &.focused {
            color: black;
          }
        }
      }
    }
  }

  article {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    padding: 0 25rem;

    p {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0;
      color: #9F9F9F;
    }
  }

  #cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5rem;
    padding: 0 1rem;
  }
}
</style>