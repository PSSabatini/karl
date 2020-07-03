<template>
  <div class="content-block" :class="theme">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentBlock',

  props: {
    theme: {
      type: String,
      default: 'white',
    },
  },
};
</script>

<style lang="scss">
.content-block {
  width: 100%;
  z-index: 1000;

  padding: 40px 0;
}

.content-block.green {
  background-color: $hempHazelnut;
}
</style>
