<template>
  <div class="head-cont">
    <div class="images-cont">
      <div class="image-tow">
        <img src="../assets/falaha-tow.jpg" alt="" />
      </div>
      <div class="image-one">
        <img src="../assets/falaha-one.jpg" alt="" />
      </div>
    </div>
    <h1>Mohammad Falaha</h1>
  </div>
</template>

<style lang="scss">
@import "../sass/_vars.scss";

.head-cont {
  width: 100%;
  height: auto;

  .images-cont {
    width: 100%;
    max-height: 400px;
    position: relative;

    .image-tow {
      width: 100%;
      max-height: 200px;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 0 10px var(--shadow-color);
      background-color: red;

      @media (min-width: $phone) {
        max-height: 300px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .image-one {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      overflow: hidden;
      position: absolute;
      bottom: -10%;
      left: 10px;
      box-shadow: 0 0 10px var(--shadow-color);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  h1 {
    width: 100%;
    height: auto;
    margin-top: 30px;
    color: var(--theme-text);
    border-bottom: 1px solid var(--border-color);
  }
}
</style>
