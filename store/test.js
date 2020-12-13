export const state = () => {
  projects: [];
};

export const mutations = () => {
  addProjects = (state, data) => {
    state.projects = data;
  };
};

export const actions = () => {
  async function ADD_PROJECT(context) {
    const data = await this.$axios.$get(
      "https://camille-portfolio.herokuapp.com/projects"
    );
    context.commit("addProjects", data);
  }
};
