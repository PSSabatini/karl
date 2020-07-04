<template>
  <div class="product-features">

    <img class="dots" src="@/assets/dots.png" alt="dots"/>

    <h5 class="feature-title">{{ featureTitle }}</h5>
    <p class="feature-description">{{ featureDescription }}</p>

    <div class="feature-image-container">
      <figure v-for="(feature, index) in imageArray" :key="index">
        <img class="feature-image" :src="require(`@/assets/${feature.src}`)" :alt="feature.name">
        <figcaption>{{ feature.description }}</figcaption>
      </figure>
    </div>

    <img class="dots" src="@/assets/dots.png" alt="dots"/>

    <h5 class="feature-title">{{ productInfoTitle }}</h5>
    <p class="feature-description">{{ productInfoDescription }}</p>

    <img class="dots" src="@/assets/dots.png" alt="dots"/>

  </div>
</template>

<script>
export default {
  name: 'ProductFeatures',

  props: {
    imageArray: {
      default: () => ([
        {
          src: 'Koffein.svg',
          name: 'Koffein',
          description: 'Mit reinem Koffein',
        },
        {
          src: 'Hoher Ballaststoffgehalt.svg',
          name: 'Hoher Ballaststoffgehalt',
          description: 'Hoher Gehalt an Ballaststoffen',
        },
        {
          src: 'Ohne Zuckerzusatz.svg',
          name: 'Ohne Zuckerzusatz',
          description: 'Ohne Zusatz von Zucker',
        },
        {
          src: 'Vegan.svg',
          name: 'Vegan',
          description: 'Vegan',
        },
        {
          src: 'Proteinquelle.svg',
          name: 'Proteinquelle',
          description: 'Proteinquelle',
        },
        {
          src: 'Bio Siegel.svg',
          name: 'Biologish',
          description: 'Biologish',
        },
      ]),
    },
    featureTitle: {
      type: String,
      default: 'Natürliche Produkte',
    },
    featureDescription: {
      type: String,
      default: 'Karl Karlo, deine Quelle aus natürlichen und nachhaltigen BIO-Produkten.',
    },
    productInfoTitle: {
      type: String,
      default: 'Produktversprechen',
    },
    productInfoDescription: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
  },

};
</script>

<style lang="scss">
.product-features {
  background-color: transparent;

  .dots {
    margin: 40px 0px;
    width: 40%;
    left: 50%;
  }

  .feature-description {
    font-size: 16px;
    line-height: 24px;

    @include bp-small {
      font-size: 24px;
      line-height: 34px;
    }
  }

  .feature-image-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    figure {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-basis: calc(100% / 3);
      margin: 0 0 40px 0;

      .feature-image {
        margin-bottom: 20px;
      }

      figcaption {
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        color: $black;
        text-align: center;
        margin: 0;
        min-width: 180px;

        @include bp-small {
          font-size: 24px;
          line-height: 34px;
        }
      }

    }
  }
}

</style>
