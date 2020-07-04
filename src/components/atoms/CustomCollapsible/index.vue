<template>
  <div class="custom-collapsible" @click="open()">

    <div class="collapsible-title-wrapper" :class="{'--opened': opened }">
      <span class="collapsible-title">{{ collapsibleTitle }}</span>
      <span class="icon-chevron-down" :class="{'--opened': opened }"></span>
    </div>

    <div class="collapsible-content" :class="{ '--opened': opened }">
      <p><slot></slot></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CustomCollapsible',

  props: {
    collapsibleTitle: {
      type: String,
      default: 'Zutaten & Nährwerte',
    },
  },

  data() {
    return {
      opened: false,
    };
  },

  methods: {
    open() {
      if (this.opened === true) {
        this.opened = false;
      } else {
        this.opened = true;
      }
    },
  },
};
</script>

<style lang="scss">
.custom-collapsible {
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  background-color: transparent;
  display: inline-block;
  margin-bottom: 20px;

  cursor: pointer;

  @include bp-large {
    font-size: 24px;
    line-height: 34px;
  }

  .collapsible-title-wrapper {
    padding: 0 20px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid $black;
    border-bottom: 1px solid $black;
  }

  .collapsible-title-wrapper.--opened {
    font-weight: 700;
    border-bottom: 0px solid $black;
  }

  .collapsible-content {
    display: none;

    p {
      padding: 20px;
    }
  }

  .collapsible-content.--opened {
    display: block;

    -webkit-animation: slide-down 350ms ease;
    -moz-animation: slide-down 350ms ease;

    transition: translate 350ms ease;

    border-bottom: 1px solid $black;
  }

    @-webkit-keyframes slide-down {
      0% { opacity: 0; -webkit-transform: translateY(-20%); }
      100% { opacity: 1; -webkit-transform: translateY(0); }
    }

    @-moz-keyframes slide-down {
      0% { opacity: 0; -moz-transform: translateY(-20%); }
      100% { opacity: 1; -moz-transform: translateY(0); }
    }

  .icon-chevron-down.--opened {
    transform: rotate(180deg);
  }
}

</style>
