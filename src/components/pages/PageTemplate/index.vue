<template>
  <div class="page-template">
    <custom-header :updateCart="this.update"></custom-header>
      <stage>
        <p>HEMP HEMP</p>
        <p>HOORAY!</p>
      </stage>

      <article-block theme="white">

        <content-block>
          <product-shop @cartInfo="updateCart"></product-shop>
        </content-block>

      </article-block>

      <article-block theme="green" fullWidth="--full-width" tag="Hemp Hemp Hurray!">

        <content-block>
          <div class="row collapse">
            <div class="columns">
              <product-info></product-info>
            </div>
          </div>
        </content-block>

      </article-block>
  </div>
</template>

<script>
import ArticleBlock from '@/components/atoms/ArticleBlock/index.vue';
import ContentBlock from '@/components/atoms/ContentBlock/index.vue';
import Stage from '@/components/atoms/Stage/index.vue';

import ProductInfo from '@/components/molecules/ProductInfo/index.vue';

import CustomHeader from '@/components/organisms/CustomHeader/index.vue';
import ProductShop from '@/components/organisms/ProductShop/index.vue';

export default {
  name: 'PageTemplate',

  components: {
    ArticleBlock,
    ContentBlock,
    Stage,

    ProductInfo,

    CustomHeader,
    ProductShop,
  },

  data() {
    return {
      update: '',
    };
  },

  methods: {
    updateCart(data) {
      this.update = data;
    },
  },

};
</script>

<style>

</style>
