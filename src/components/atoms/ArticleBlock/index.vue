<template>
  <div class="article-block" :class="[ theme, fullWidth ]">

    <div v-if="tag" class="tag">
      <h2>{{ tag }}</h2>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ArticleBlock',

  props: {
    fullWidth: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'white',
    },
    tag: {
      type: String,
      default: '',
    },
  },
};
</script>

 <style lang="scss">
  .article-block {
    @include bp-small {
      width: 50%;
      margin-left: calc(50% - 1px);
    }

    .tag {
      background-color: $black;
      color: $white;

      transform: rotate(355deg);

      position:absolute;
      padding: 10px 20px;
      margin-top: -15px;
      margin-left: -5px;

      @include bp-small {
        margin-top: -21px;
      }

      @include bp-large {
        margin-top: -30px;
      }
    }
  }

  .article-block.green {
    background-color: $hempHazelnut;
  }

  .article-block.--full-width {
    @include bp-small {
      z-index: 150;
      position: absolute;
      width: 100%;
      margin-left: 0;
    }

    @include bp-medium {
      margin-left: calc(50% - 1px);
      width: 50%;
      background-color: $hempHazelnut;
    }
  }
</style>
