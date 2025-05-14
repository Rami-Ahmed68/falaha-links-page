<template>
  <div class="home">
    <div class="line">
      <h1>Falaha</h1>
      <button @click="ChangeTheme" class="theme-toggle">
        {{ icon }}
      </button>
    </div>

    <HeadComponnet />
    <InfoComponnet />
    <LinksComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeadComponnet from "@/components/HeadComponent";
import InfoComponnet from "@/components/InfoComponent";
import LinksComponent from "@/components/LinksComponent/";

export default {
  name: "HomeView",
  data() {
    return {
      icon: "☀️",
    };
  },
  components: {
    HeadComponnet,
    InfoComponnet,
    LinksComponent,
  },
  methods: {
    ChangeTheme() {
      this.$store.commit("ChangeTheme");

      this.icon = this.icon === "☀️" ? "🌙" : "☀️";
    },
  },
};
</script>

<style lang="scss">
@import "../sass/vars";

.home {
  width: 50%;
  height: auto;
  margin: auto;

  @media (max-width: $phone) {
    width: 96%;
    margin: 0px 2%;
  }

  .line {
    width: 100%;
    height: 40px;
    margin: 10px 0px;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: var(--theme-text);
    }

    button {
      width: 35px;
      height: 35px;
      border-radius: 5px;
      border: none;
      background-color: var(--icon-theme-color);
      cursor: pointer;
    }
  }
}
</style>
