<template>
  <div class="burger-menu" :class="{'--active': active}">
    <a role="button" @click="toggleMenu()">
      <span></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',

  data() {
    return {
      active: false,
    };
  },

  methods: {
    toggleMenu() {
      if (!this.active) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
  },
};
</script>

<style lang="scss">
@include bp-max-medium() {
  .burger-menu {
    display: inline-block;
    position: fixed;
    left: 8px;
    top: 1px;
    width: 50px;
    height: 50px;
    z-index: 200;
    cursor: pointer;

    a {
      position: relative;
      display: block;
      width: 50px;
      height: 50px;
    }

    span {
      position: absolute;
      width: 20px;
      height: 1px;
      top: 26px;
      left: 50%;

      background-color: $black;
      transform: translate(-50%, 0) rotate(0deg);
      transition: all 320ms ease 120ms;

      &::before,
      &::after {
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        height: 100%;
        width: 100%;

        background-color: $black;

        transition: all 320ms ease 120ms;
      }

      &::before {
        transform: translate(-50%, 11px) rotate(0deg);
        margin-top: 3px;
      }

      &::after {
        transform: translate(-50%, 7px) rotate(0deg);
      }
    }
  }

  .burger-menu.--active {
    span {
      transform: translate(-50%, 0) rotate(45deg);

      background-color: transparent;

      &::before,
      &::after {
        width: 29px;
      }

      &::before {
        transform: translate(-50%, 0) rotate(90deg);
        margin-top: 0px;
      }

      &::after {
        transform: translate(-50%, 0) rotate(0deg);
      }
    }
  }
}

@include bp-medium {
  .burger-menu {
    display: none;
  }
}
</style>
