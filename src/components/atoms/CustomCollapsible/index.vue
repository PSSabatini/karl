<template>
  <div class="custom-collapsible" @click="open()">

    <div class="collapsible-title-wrapper">
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

  cursor: pointer;

  border-top: 1px solid $black;
  border-bottom: 1px solid $black;

  .collapsible-title-wrapper {
    padding: 0 20px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .collapsible-content {
    overflow: hidden;
    max-height: 0px;

    transition: max-height 250ms ease-in-out;

    p {
      padding: 20px;
    }
  }

  .collapsible-content.--opened {
    display: inline-block;
    max-height: 1400px;
  }

  .icon-chevron-down.--opened {
    transform: rotate(180deg);
  }
}

</style>
