import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      name: "hao"
    },
    count: 0,
  }),
  getters: {
    user: (state) => {
      return state.user;
    },
    getterCount: (state) => {
      return state.count;
    }
  },
  actions: {
    setUser(user: any) {
      this.user = user;
    },
    increment() {
      this.count++
    },
  },
})

export default useUserStore;