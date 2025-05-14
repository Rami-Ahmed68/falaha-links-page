import { createStore } from "vuex";

export default createStore({
  state: {
    theme: window.localStorage.getItem("falaha_theme") || "dark",
  },
  getters: {},
  mutations: {
    ChangeTheme(state) {
      state.theme = state.theme == "dark" ? "light" : "dark";

      // update it in local storage
      window.localStorage.setItem("falaha_theme", state.theme);

      document.documentElement.setAttribute("data-theme", state.theme);
    },
  },
  actions: {},
  modules: {},
});
