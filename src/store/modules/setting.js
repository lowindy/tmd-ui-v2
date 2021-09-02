/* eslint-disable space-before-function-paren */
const state = {
  toggleMenu: false,
};

const getters = {
  toggleMenu: (state) => state.toggleMenu,
};

const actions = {
  menuToggleAction: function ({ commit }) {
    commit('setMenuToggle');
  },
};
const mutations = {
  setMenuToggle: (state) => {
    state.toggleMenu = !state.toggleMenu;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
