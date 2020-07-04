<template>
  <div class="content-block">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentBlock',

};
</script>

<style lang="scss">
  .content-block {
    background-color: transparent;

    padding: 40px 20px;

    @include bp-small {
      padding: 80px 40px;
    }

    @include bp-large {
      padding: 80px 60px;
    }
  }
</style>
