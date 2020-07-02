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

  padding: 0;

  @include bp-small () {
    padding: 0 20px;
  }

  @include bp-medium () {
    padding: 0 60px;
  }

  @include bp-large () {
    padding: 0 100px;
  }
}

.article-block.green {
  background-color: $hempHazelnut;
}

</style>
