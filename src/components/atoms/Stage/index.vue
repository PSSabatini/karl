<template>
  <div class="stage">

    <div class="stage-background">
      <img src="@/assets/hazelnut_pattern.png" alt="hazelnut_pattern">
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
  width: 100%;

  .stage-background {
  position: relative;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: (6 / 16) * 100%;
  }

    img {
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
    transform: translate(10%, -50%);
    position: relative;
    min-width: 346px;

    img.cloud {
      width: 80%;
      min-width: 250px;
    }

    .title-container {
      position: fixed;
      top: 43%;
      left: 40%;
      transform: rotate(-5deg) translate(-50%, -50%);
      min-width: 200px;

      .text-container {
        text-align: center;
        color: $white;

        font-family: 'Bungee', cursive;
        font-size: 34px;
        font-weight: 700;
        line-height: 38px;

        p:first-child {
          color: $hempHazelnut;
        }
      }

      img {
        max-width: 45px;
        position: absolute;
        right: -30px;
        top: 39px;
      }
    }

  }

  // TABLET STYLES

  @include bp-small {
    .stage-background {
      &:before {
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        padding-top: 100%;
        padding-left: (6 / 16) * 100%;
      }
    }

    .cloud-container {
      transform: translate(10%, -150%);

      .title-container {
        .text-container {
          font-size: 46px;
          line-height: 58px;
        }

        img {
          max-width: 100px;
          right: -85px;
          top: 60px;
        }
      }
    }
  }

  // DESK STYLES

  @include bp-medium {
    .cloud-container {
      transform: translate(10%, -185%);
      .title-container {
        .text-container {
          font-size: 72px;
          line-height: 86px;
        }

        img {
          max-width: 150px;
          right: -120px;
          top: 115px;
        }
      }
    }

  }
}

</style>
