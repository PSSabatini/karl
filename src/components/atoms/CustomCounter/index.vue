<template>

  <div class="custom-counter">

    <button @click="decrease()">-</button>
    <input type="number" readonly min="0" max="999" :value="value">
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

    margin: 10px 0;
    width: 20%;
    min-width: 120px;

    display: flex;

    border: 1px solid $grey3;

  button,
  input {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0;
    text-transform: uppercase;
    color: $black;
    background-color: $white;

    text-align: center;

    border: none;

    transition: background-color 0.4s, color 0.4s;
    cursor: pointer;

    width: 100%;
    height: 100%;
    padding: 16px 0;
  }
}

</style>
