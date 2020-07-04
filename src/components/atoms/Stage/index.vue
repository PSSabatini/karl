<template>
  <div class="stage">

    <div class="stage-background">
      <img class="image-background" src="@/assets/hazelnut_pattern.png" alt="hazelnut_pattern">
    </div>

    <div class="cloud-container">
      <img class="cloud" src="@/assets/cloud.svg" alt="cloud">

      <div class="title-container">
        <div class="text-container">
          <slot></slot>
        </div>
        <img src="@/assets/Hemp Hazelnut.svg" />
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Stage',
};
</script>

<style lang="scss">
.stage {
  position: relative;
  width: 100%;
  top: 25px;
  z-index: 50;

  .stage-background {
    position: relative;
    padding-top: 210px;

    img.image-background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      object-fit: cover;
    }
  }

  .cloud-container {
    position: absolute;
    left: calc(50% - 160px);
    top: 95px;
    width: 400px;

    img.cloud {
      width: 320px;
    }

    .title-container {
      position: absolute;
      top: 65px;
      left: 10px;
      transform: rotate(-5deg);
      min-width: 280px;

      .text-container {
        text-align: center;
        color: $white;

        font-family: 'Bungee', cursive;
        font-size: 34px;
        font-weight: 700;
        line-height: 38px;
        text-transform: uppercase;

        p:first-child {
          color: $hempHazelnut;
        }
      }

      img {
        width: 55px;
        position: absolute;
        right: -5px;
        top: 40px;
      }
    }

  }

  // TABLET STYLES

  @include bp-small {

    width: 50%;
    height: 100vh;
    position: fixed;
    bottom: 0;

    .stage-background {
      padding-top: 0px;
      height: 100vh;
    }

    .cloud-container {
      left: calc(50% - 190px);
      top: calc(50% - 200px);
      width: 380px;

      img.cloud {
        width: 380px;
      }

      .title-container {
        top: 55px;
        left: 50px;

        .text-container {
          font-size: 46px;
          line-height: 58px;
        }

        img {
          width: 60px;
          right: -35px;
          top: 70px;
        }
      }
    }
  }

  // DESK STYLES

  @include bp-medium {
    top: 110px;

    .cloud-container {
      left: calc(50% - 250px);
      width: 500px;

      img.cloud {
        width: 500px;
      }

      .title-container {
        top: 85px;
        left: 65px;

        .text-container {
          font-size: 60px;
          line-height: 65px;
        }

        img {
          width: 75px;
          right: -45px;
          top: 80px;
        }
      }
    }

    // Large Styles

    @include bp-large {

    .cloud-container {
      left: calc(50% - 300px);

      width: 600px;

      img.cloud {
        width: 600px;
      }

      .title-container {
        top: 105px;
        left: 75px;

        .text-container {
          font-size: 72px;
          line-height: 86px;
        }

        img {
          width: 95px;
          right: -60px;
          top: 95px;
        }
      }
    }
    }

  }
}

</style>
