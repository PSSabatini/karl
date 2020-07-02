<template>
  <div class="article-block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ArticleBlock',
};
</script>

<style lang="scss">
.article-block {
  position: relative;
  z-index: 1;
  background-color: $white;
  overflow: scroll;
  height: 100%;

  right: 0;

  @include bp-small () {
    height: 100%;
    width: 50%;
    float: right;
    top: 70px;
  }

  @include bp-medium () {
    width: 50%;
    float: right;
    top: 110px;
  }

  // @include bp-large () {
  //   padding: 0 20px;
  //   width: calc(50% -40px);
  // }
}

</style>
