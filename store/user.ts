import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
  actions: {
    setUser(user: any) {
      this.user = user;
    },
  },
})

export default useUserStore;