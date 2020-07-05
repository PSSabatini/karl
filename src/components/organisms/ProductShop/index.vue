<template>
  <div class="product-shop">

    <div class="image-container">
      <image-gallery :imageArray="imageArray"></image-gallery>
    </div>

    <div class="row collapse">
      <div class="columns small-6 large-4">

        <p class="product-title">{{ productTitle }}</p>
        <span class="product-price">{{ productPrice }}</span>

      </div>
    </div>

    <div class="row collapse">
      <div class="columns small-6 large-4">

        <div class="link-product-type-container">
          <a class="link-product-type" @click="(e) => selectedProduct(e)">Flowpack</a>
          <a class="link-product-type" @click="(e) => selectedProduct(e)">Tray (18 St)</a>
        </div>

      </div>

      <div  v-if="errorMessage !== ''" class="columns small-6 large-7">
        <span class="error-message">{{errorMessage}}</span>
      </div>
    </div>

  <div class="row collapse">
    <div class="columns small-3 large-3">

      <custom-counter @amount="getAmount"></custom-counter>

    </div>
    <div class="columns small-9 large-6">

      <button-with-icon
        iconOption="cart-plus"
        color="black"
        position="right"
        label="in den warenkorb"
        @click.native="addCart()">
      </button-with-icon>

    </div>
  </div>

  <div class="row collapse">
    <div class="columns large-9">

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
      default: () => ([
        {
          src: 'flowpack_image.png',
          alt: 'Flowpack Hemp',
        },
        {
          src: 'tray.png',
          alt: 'Tray Hemp',
        },
      ]),
    },
  },

  data() {
    return {
      amount: 0,
      productType: '',
      errorMessage: '',
    };
  },

  methods: {
    getAmount(value) {
      this.amount = value;
    },

    selectedProduct(e) {
      const linkArray = document.getElementsByClassName('link-product-type');

      linkArray.forEach((link) => {
        if (link.classList.contains('--selected')) {
          link.classList.remove('--selected');
        }
      });
      e.target.classList.add('--selected');
      this.productType = e.target.innerText;
    },

    addCart() {
    // error handling example
      if (this.amount !== 0 && this.productType !== '') {
        this.errorMessage = '';
        const cartInfo = {
          amount: this.amount,
          productType: this.productType,
        };
        this.$emit('cartInfo', cartInfo);
      } else if (this.amount === 0 && this.productType === '') {
        this.errorMessage = 'Please, select the product and quantity.';
      } else if (this.productType === '') {
        this.errorMessage = 'Please, select the product';
      } else {
        this.errorMessage = 'Please, select the quantity';
      }
    },
  },
};
</script>

<style lang="scss">
.product-shop {
  position: relative;
  padding-top: 80px;
  padding-bottom: 20px;

  @include bp-small {
    padding-top: 90px;
  }

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
    display: inline-block;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;

    margin-bottom: 20px;
  }

  .link-product-type-container {
    margin-bottom: 20px;

    .link-product-type {
      text-decoration: none;
      color: $black;

      font-size: 16px;
      line-height: 24px;
      font-weight: 500;

      margin-right: 10px;

      cursor: pointer;

      &:visited {
        color: $black;
      }

      &:hover {
        font-weight: 700;
        border-bottom: 2px solid $black;
      }
    }

    .link-product-type.--selected {
      font-weight: 700;
    }
  }

  .error-message {
    display: inline-block;
    color: $red;
    padding-top: 5px;
  }
}

</style>
