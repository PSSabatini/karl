<template>

  <button
    class="custom-button"
    :class="[color, invert, border]"
    :disabled="disabled"
    @click="onClick">

    <slot></slot>

  </button>

</template>

<script>
export default {
  name: 'CustomButton',

  props: {
    color: {
      type: String,
      default: 'neutral',
    },
    invert: {
      type: String,
      default: '--invert',
    },
    border: {
      type: String,
      default: '--border',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },

};
</script>

<style lang="scss">
  .custom-button {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0;
    text-transform: uppercase;
    color: $black;
    cursor: pointer;

    width: 100%;
    height: 50px;
    padding: 16px 20px;
    margin: 10px 0;
    border: none;

    -webkit-box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);
    -moz-box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);
    box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);

    transition: background-color 0.4s, color 0.4s;

    &:disabled {
      background-color: $grey3;
      color: $grey2;
      cursor: not-allowed;
    }

    &:hover {
      color: $white;
      background-color: $black;
    }

    &.green {
      color: $hempHazelnut;

      &:hover {
        color: $white;
        background-color: $hempHazelnut;
      }
    }

    &.yellow {
      color: $coconutLemon;

      &:hover {
        color: $white;
        background-color: $coconutLemon;
      }
    }

    &.black {
      color: $white;
      background-color: $black;

      &:hover {
        color: $black;
        background-color: $white;
      }
    }

    &.orange {
      color: $physalisTurmeric;

      &:hover {
        color: $white;
        background-color: $physalisTurmeric;
      }
    }

    &.brown {
      color: $peanutCocoa;

      &:hover {
        color: $white;
        background-color: $peanutCocoa;
      }
    }
  }

  .custom-button.yellow.--invert {
    color: $white;
    background-color: $coconutLemon;

    &:hover {
      background-color: $white;
      color: $coconutLemon;
    }
  }

  .custom-button.brown.--invert {
    color: $white;
    background-color: $peanutCocoa;

    &:hover {
      background-color: $white;
      color: $peanutCocoa;
    }
  }

  .custom-button.orange.--invert {
    color: $white;
    background-color: $physalisTurmeric;

    &:hover {
      background-color: $white;
      color: $physalisTurmeric;
    }
  }

  .custom-button.black.--invert {
    color: $black;
    background-color: $white;

    &:hover {
      background-color: $black;
      color: $white;
    }
  }

  .custom-button.green.--invert {
    color: $white;
    background-color: $hempHazelnut;

    &:hover {
      background-color: $white;
      color: $hempHazelnut;
    }
  }

  .custom-button.neutral.--invert {
    color: $white;
    background-color: $black;

    &:hover {
      background-color: $white;
      color: $black;
    }
  }

  .custom-button.--border {
    border: 1px solid $black;
  }

</style>
