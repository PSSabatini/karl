<template>
  <div class="button-with-icon">
    <custom-button :color="color" invert>
      <div class="label-container" :class="position">
        <span class="icon" :class="`icon-${iconOption}`"></span>
        <span class="label">{{ label }}</span>
      </div>
    </custom-button>
  </div>
</template>

<script>
import CustomButton from '@/components/atoms/CustomButton/index.vue';

export default {
  name: 'ButtonWithIcon',

  components: {
    CustomButton,
  },

  props: {
    position: {
      type: String,
      default: 'left',
    },
    iconOption: {
      type: String,
      default: 'applepay',
    },
    color: {
      type: String,
      default: 'neutral',
    },
    label: {
      type: String,
      default: 'Express Checkout',
    },
  },
};
</script>

<style lang="scss">
.button-with-icon {
  .custom-button {
    padding: 0px 5px;
    position: relative;
  }

  .label-container {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: inline-block;
      top: 0;
    }

    span::before {
      margin: 0 10px;
    }

    span::after {
      margin: 0 10px;
    }

    .icon-applepay {
      font-size: 40px;
      line-height: 40px;
    }

    .icon-paypal {
      color: $paypal;
    }

    .label {
      line-height: 50px;
    }

    &.right {
      flex-direction: row-reverse;
    }
  }
}

</style>
