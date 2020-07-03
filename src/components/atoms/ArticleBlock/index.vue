<template>
  <div class="article-block" :class="theme">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ArticleBlock',

  props: {
    theme: {
      type: String,
      default: 'white',
    },
  },
};
</script>

<style lang="scss">
.article-block {
  position: relative;
  z-index: 1;
  background-color: $white;
  overflow-y: scroll;
  height: 100%;
  top: 70px;

  right: 0;

  .content-block {
    right: 0;
    float: right;
  }

  @include bp-small () {
    .content-block {
      height: 100%;
      width: 50%;
      right: 0;
    }
  }

  @include bp-medium () {
    .content-block {
      width: 50%;
      right: 0;
      top: 110px;
    }
  }

  // @include bp-large () {
  //   padding: 0 20px;
  //   width: calc(50% -40px);
  // }
}

.article-block.green {
  background-color: $hempHazelnut;

  @include bp-max-medium () {
    z-index: 1000;
    .content-block {
      width: 100%;
      z-index: 1000;
      height: 100%;
    }
  }

  @include bp-medium() {
    .content-block {
      width: 50%;
      float: right;
    }
  }
}

</style>
