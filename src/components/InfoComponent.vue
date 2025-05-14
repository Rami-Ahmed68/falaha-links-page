<template>
  <div class="info">
    <h3>Who am I :</h3>
    <span
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt
      mollitia maxime eveniet, illo adipisci laudantium inventore quas enim
      numquam.</span
    >

    <h3>Work :</h3>
    <span
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt
      mollitia maxime eveniet, illo adipisci laudantium inventore quas enim
      numquam.</span
    >

    <h3>I love :</h3>
    <span
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt
      mollitia maxime eveniet, illo adipisci laudantium inventore quas enim
      numquam.</span
    >
  </div>
</template>

<style lang="scss">
@import "../sass/vars";

.info {
  width: 100%;
  height: auto;
  color: var(--theme-text);
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;

  h3 {
    margin: 10px 0px 0px 0px;
    border-bottom: 5px solid var(--border-bg);
  }

  span {
    width: 98%;
    height: auto;
    margin: 0px 1%;
    color: var(--theme-text);
    font-size: $small;
    text-align: justify;
    text-align-last: left;
  }
}
</style>
