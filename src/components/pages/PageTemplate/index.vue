<template>
  <div class="page-template">
    <custom-header></custom-header>
      <stage>
        <p>HEMP HEMP</p>
        <p>HOORAY!</p>
      </stage>

      <article-block theme="white">

        <content-block>
          <product-shop></product-shop>
        </content-block>

      </article-block>

      <article-block theme="green">

        <content-block theme="green">
          <div class="row collapse">
            <div class="columns">
              <product-info></product-info>
            </div>

            <div class="columns">
              <custom-collapsible>
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.'
              </custom-collapsible>

              <product-features></product-features>
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
import CustomCollapsible from '@/components/atoms/CustomCollapsible/index.vue';
import ProductFeatures from '@/components/atoms/ProductFeatures/index.vue';

import CustomHeader from '@/components/molecules/CustomHeader/index.vue';
import ProductInfo from '@/components/molecules/ProductInfo/index.vue';

import ProductShop from '@/components/organisms/ProductShop/index.vue';

export default {
  name: 'PageTemplate',

  components: {
    ArticleBlock,
    ContentBlock,
    Stage,
    CustomCollapsible,
    ProductFeatures,

    CustomHeader,
    ProductInfo,

    ProductShop,
  },

};
</script>

<style>

</style>
