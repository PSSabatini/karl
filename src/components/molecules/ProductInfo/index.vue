<template>
  <div class="product-info">
    <div class="tag">
      <h4>Hemp Hemp Hurray!</h4>
    </div>
    <p>Hanf kann man auch essen…und zwar am besten in kleinen runden Energy Balls.
      Dazu noch Haselnüsse und Koffein für den Extrakick.
      So hat die Rakete wieder Schub auf'm Kessel und du kannst für den Rest des Tages durchstarten.</p>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
};
</script>

<style lang="scss">
.product-info {
  padding: 60px 20px 20px 20px;
  z-index: 80000;
  // overflow-y: visible;

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

  @include bp-medium {
    padding: 60px 60px 40px 60px;
  }
}

</style>
