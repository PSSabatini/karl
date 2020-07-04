<template>
  <div class="product-info">
    <p>
      Hanf kann man auch essen…und zwar am besten in kleinen runden Energy Balls.
      Dazu noch Haselnüsse und Koffein für den Extrakick.
      So hat die Rakete wieder Schub auf'm Kessel und du kannst für den Rest des Tages durchstarten.
    </p>

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
</template>

<script>
import CustomCollapsible from '@/components/atoms/CustomCollapsible/index.vue';
import ProductFeatures from '@/components/atoms/ProductFeatures/index.vue';

export default {
  name: 'ProductInfo',

  components: {
    CustomCollapsible,
    ProductFeatures,
  },
};
</script>

<style lang="scss">
.product-info {

  .tag {
    background-color: $black;
    color: $white;
    padding: 20px;
    transform: rotate(355deg);
    position: absolute;
    top: -40px;
    z-index: 5000;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  .custom-collapsible {
    margin-left: -20px;
    margin-right: -20px;
    width: calc(100% + 40px);

    @include bp-small {
      margin-left: -40px;
      margin-right: -40px;
      width: calc(100% + 80px);

      .collapsible-title-wrapper {
        padding: 0 40px;
      }

      .collapsible-content {
        p{
          padding: 20px 40px;
        }
      }
    }

    @include bp-large {
      margin-left: -60px;
      margin-right: -60px;
      width: calc(100% + 120px);

      .collapsible-title-wrapper {
        padding: 0 60px;
      }

      .collapsible-content {
        p{
          padding: 20px 60px;
        }
      }
    }
  }
}

</style>
