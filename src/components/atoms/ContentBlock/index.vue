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

    padding: 60px 0;

    @include bp-small {
      padding: 80px 0;
    }
  }
</style>
