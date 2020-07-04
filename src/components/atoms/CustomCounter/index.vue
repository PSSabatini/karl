<template>

  <div class="custom-counter">

    <button @click="decrease()">-</button>
    <span>{{ value }}</span>
    <button @click="increase()">+</button>

  </div>

</template>

<script>
export default {
  nome: 'CustomCounter',

  data() {
    return {
      value: 0,
    };
  },

  methods: {
    decrease() {
      if (this.value > 0) {
        this.value -= 1;
      }
      return this.value;
    },

    increase() {
      if (this.value < 999) {
        this.value += 1;
      }
      return this.value;
    },
  },
};
</script>

<style lang="scss">
.custom-counter {
  -webkit-box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);
  -moz-box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);
  box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);

  margin: 0px 5px 20px 0px;

  display: flex;
  justify-content: space-evenly;

  border: 1px solid $grey3;
  max-height: 48px;

  button,
  span {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0;
    text-transform: uppercase;
    text-align: center;

    color: $black;
    background-color: $white;

    border: none;
    cursor: pointer;

    padding: 15px 5px;
  }

  span {
    display: inline-block;
  }
}

</style>
