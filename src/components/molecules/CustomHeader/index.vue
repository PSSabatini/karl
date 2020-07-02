<template>
  <div class="custom-header">

    <burger-menu></burger-menu>

    <img class="karl_logo" src="@/assets/logo_long.svg" alt="logo">

    <div class="link-container">

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

    <span class="icon-user"></span>
    <span class="icon icon-shopping-cart"></span>

  </div>
</template>

<script>
import BurgerMenu from '@/components/atoms/BurgerMenu/index.vue';

export default {
  name: 'CustomHeader',

  components: {
    BurgerMenu,
  },
};
</script>

<style lang="scss">
  .custom-header {
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 200;

    width: 100%;
    height: 70px;

    background-color: $white;
    color: $black;

    top: 0;
    left: 0;

    -webkit-box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);
    -moz-box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);
    box-shadow: 0px 4px 6px -1px rgba(194,194,194,0.8);

    .karl_logo {
      margin-left: 65px;
      height: 30px;
    }

    .icon-shopping-cart:before {
      right: 20px;
      top: 25px;
      position: absolute;

      cursor: pointer;

      color: $black;
      font-size: 20px;
    }

      span:hover::before {
        transition: 250ms ease color;
        color: $hempHazelnut;
      }

    .icon-user:before {
      display: none;
    }

    .link-container {
      display: none;

      .menu-icon {
        height: 25px;
        margin: -5px 5px;
      }
    }

    // Styles for Desktop
    @include bp-medium {
      height: 110px;

      .karl_logo {
        margin-left: 60px;
        height: 40px;
       }

      .icon-shopping-cart:before {
        right: 60px;
        top: 50px;
      }

      .icon-user:before {
        display: inline-block;
        right: 100px;
        top: 50px;
        position: absolute;

        color: $black;
        font-size: 18px;

        cursor: pointer;
      }

      .icon-user:hover {
        color: $hempHazelnut;
      }

      .link-container {
        display: inline-block;
        padding: 10px 0 0 40px;

        .link {
          text-decoration: none;
          color: $black;
          font-weight: 700;
          font-size: 16px;

          padding: 0 5px;

          transition: 250ms ease color;

          &:visited {
            color: $black;
          }

          &:hover {
            color: $hempHazelnut;
          }
        }
      }

    }
  }
</style>
