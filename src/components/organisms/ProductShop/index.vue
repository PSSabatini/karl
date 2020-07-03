<template>
  <div class="product-shop">

    <div class="row">
      <div class="columns">

        <div class="image-container">
          <image-gallery :imageArray="imageArray"></image-gallery>
        </div>

      </div>
    </div>

    <div class="row">
      <div class="columns small-6 medium-6">

        <p class="product-title">{{ productTitle }}</p>
        <span class="product-price">{{ productPrice }}</span>

      </div>
    </div>

    <div class="row">
      <div class="columns medium-6">

        <div class="link-image-container">
          <a class="link-image" href="#">Flowpack</a>
          <a class="link-image" href="#">Tray (18 St)</a>
        </div>

      </div>
    </div>

  <div class="row">
    <div class="columns small-4">

      <custom-counter></custom-counter>

    </div>

    <div class="columns small-8">

      <button-with-icon
        iconOption="cart-plus"
        color="black"
        position="right"
        label="in den warenkorb">
      </button-with-icon>

    </div>
  </div>

  <div class="row">
    <div class="columns">

      <button-with-icon
        iconOption="applepay"
        color="neutral"
        position="left"
        label="express checkout">
      </button-with-icon>

    </div>
  </div>

  </div>
</template>

<script>
import CustomCounter from '@/components/atoms/CustomCounter/index.vue';
import ButtonWithIcon from '@/components/molecules/ButtonWithIcon/index.vue';
import ImageGallery from '@/components/atoms/ImageGallery/index.vue';

export default {
  name: 'ProductShop',

  components: {
    CustomCounter,
    ButtonWithIcon,
    ImageGallery,
  },

  props: {
    productTitle: {
      type: String,
      default: 'Hemp Hazelnut',
    },
    productPrice: {
      type: String,
      default: '1,95 €',
    },
    imageArray: {
      default: [
        {
          src: 'flowpack_image.png',
          alt: 'Flowpack Hemp',
        },
        {
          src: 'tray.png',
          alt: 'Tray Hemp',
        },
      ],
    },
  },
};
</script>

<style lang="scss">
.product-shop {
  position: relative;

  .image-container {
    top: 0;
    left: 0;
    background-color: $white;
    width: 100%;
    min-height: 170px;
    max-height: 460px;
    margin-bottom: 10px;

    display: flex;
    justify-content: center;

    .product-image {
      object-fit: contain;
    }
  }

  .product-title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;

    color: $white;
    background-color: $black;

    text-align: center;

    padding: 5px;

    margin-bottom: 20px;
  }

  .product-price {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;

    margin-bottom: 10px;
  }

  .link-image-container {
    .link-image {
      text-decoration: none;
      color: $black;

      font-size: 16px;
      line-height: 24px;
      font-weight: 500;

      margin-right: 10px;

      &:visited {
        color: $black;
      }

      &:hover {
        font-weight: 700;
        border-bottom: 2px solid $black;
      }
    }
  }

  @include bp-medium {
    padding: 0 40px;
  }

}

</style>
