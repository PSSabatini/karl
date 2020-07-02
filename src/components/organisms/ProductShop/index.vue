<template>
  <div class="product-shop">

    <div class="row">
      <div class="columns">

        <div class="image-container"></div>

      </div>
    </div>

    <div class="row">
      <div class="columns small-6 medium-4">

        <p class="product-title">{{ productTitle }}</p>
        <span class="product-price">{{ productPrice }}</span>

      </div>
    </div>

    <div class="row">
      <div class="columns medium-4">

        <div class="link-image-container">
          <a class="link-image" href="#">Flowpack</a>
          <a class="link-image" href="#">Tray (18 St)</a>
        </div>

      </div>
    </div>

  <div class="row">
    <div class="columns small-3">

      <custom-counter></custom-counter>

    </div>

    <div class="columns small-9">

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

export default {
  name: 'ProductShop',

  components: {
    CustomCounter,
    ButtonWithIcon,
  },

  props: {
    productTitle: {
      type: String,
      default: 'Hemp Hazelnut',
    },
    productPrice: {
      type: String,
      default: 'x,xx €',
    },
  },
};
</script>

<style lang="scss">
.product-shop {
  position: relative;

  .image-container {
    background-color: black;
    width: 100%;
    height: 50vh;
    margin-bottom: 10px;
  }

  .product-title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;

    color: $white;
    background-color: $black;

    text-align: center;

    padding: 5px;

    margin-bottom: 10px;
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

}

</style>
