<template>
  <div class="image-gallery">

    <div class="main-image">
      <figure>
        <img :src="selectedSrc" :alt="selectedAlt">
      </figure>
    </div>

    <div class="thumbnails">
      <figure v-for="(image, index) in imageArray" :key="index" @click="(e) => select(e)">
        <img :index="image.index" :src="require(`@/assets/${image.src}`)" :alt="image.alt">
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',

  props: {
    imageArray: {
      default: () => [],
    },
  },

  data() {
    return {
      show: true,
      selectedSrc: '',
      selectedAlt: '',
    };
  },

  mounted() {
    // eslint-disable-next-line
    const src = require('@/assets/flowpack_image.png');

    this.selectedSrc = src;
    this.selectedAlt = 'Flowpack Hemp';
  },

  methods: {
    select(e) {
      this.show = false;
      this.selectedSrc = e.target.src;
      this.selectedAlt = e.target.alt;
    },
  },

};
</script>

<style lang="scss">
.image-gallery {
  width: 100%;

  .main-image {

    figure {
      margin: 0;

      img {
        object-fit: contain;
        width: 100%;
        max-width: 900px;
        height: 250px;
      }
    }
  }

  .thumbnails {
    display: flex;

    figure {
      border: 1px solid $grey3;
      margin: 10px 10px 10px 0;

      &:hover{
        border: 2px solid $grey3;
        margin: 10px 10px 8px 0;
        cursor: pointer;
      }

      img {
        height: 100%;
        width: 100%;
        min-width: 50px;
        min-height: 50px;
        max-height: 70px;
        max-width: 70px;
        object-fit: contain;
      }
    }
  }
}
</style>
