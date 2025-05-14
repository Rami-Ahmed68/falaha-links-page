<template>
  <div class="links">
    <h2>links</h2>

    <ul>
      <li v-for="(link, index) in this.links" :key="index">
        <a :href="link.link">{{ link.title }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "FaceBook", link: "" },
        { title: "Instagram", link: "" },
        { title: "FaceBook", link: "" },
        { title: "FaceBook", link: "" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../sass/vars";
.links {
  width: 100%;
  height: auto;
  margin: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;

  h2 {
    width: auto;
    height: auto;
    border-bottom: 5px solid var(--border-bg);
    color: var(--theme-text);
  }

  ul {
    width: 100%;
    height: auto;
    padding: 10px 0px;
    list-style-type: none;

    li {
      margin: 10px 0px;

      a {
        width: auto;
        list-style-type: none;
        margin: 10px 0px;
        padding: 5px 10px;
        border-radius: 5px;
        color: var(--blue-1);
        text-decoration: none;
        margin: 10px 5px;
        cursor: pointer;
        transition-duration: 0.5s;
      }

      a:hover {
        background-color: var(--blue-2);
      }
    }
  }
}
</style>
