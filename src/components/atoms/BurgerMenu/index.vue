<template>
  <div class="burger-menu">

    <div class="burger-menu-icon" :class="{'--active': active}">
      <a role="button" @click="toggleMenu()">
        <span></span>
      </a>
    </div>

    <div class="menu-link-container" :class="{'--active': active}">
      <a class="link" href="#">
        <img class="menu-icon" src="@/assets/arm_icon.png" />
        Produkte
      </a>
      <a class="link" href="#">
        <img class="menu-icon" src="@/assets/rocket_icon.png" />
        Mission
      </a>
      <a class="link" href="#">
        <img class="menu-icon" src="@/assets/buddy_icon.png" />
        Das Team
      </a>
      <a class="link" href="#">
        <img class="menu-icon" src="@/assets/cloud_icon.png" />
        Kontakt
      </a>

    </div>
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

    .burger-menu-icon {
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
  }

  .burger-menu-icon.--active {
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

  .menu-link-container {
    position: absolute;
    display: none;
    background-color: $white;

    height: 40vh;
    width: 100%;

    z-index: 200;
    flex-direction: column;
    left: 0px;
    top: 69px;
    padding: 10px 30px;

    @include bp-small {
      height: 30px;

      flex-direction: row;
      padding-bottom: 31px;
    }

    -webkit-box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);
    -moz-box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);
    box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);

    opacity: 0;

    transition: opacity 200ms ease;

    .menu-icon {
      height: 20px;
      widows: 20px;
      margin-right: 10px;
    }

    .link {
      padding: 0;
      display: flex;
      align-items: center;
      height: 100%;

      font-size: 16px;
      color: $black;
      font-weight: 700;
      text-decoration: none;

      margin: 10px 0px;

      @include bp-small {
        margin-right: 40px;
      }

      &:visited {
        color: $black;
      }

      &:hover {
        color: $physalisTurmeric;
      }
    }
  }

  .menu-link-container::before {
    content: '';
    position: absolute;
    height: 60vh;
    width: 100%;
    top: 43vh;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: $white, $alpha: 0);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    -moz-backdrop-filter: blur(5px);

    @include bp-small {
      top: 71px;
      height: 100vh;
    }
  }
  .menu-link-container.--active {
    display: flex;
    opacity: 1;
  }
}

@include bp-medium {
  .burger-menu {
    display: none;
  }
}
</style>
