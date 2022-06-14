import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
  state: () => ({
    contentRoute2: null,
    contentRoute3: null,
  }),

  actions: {
    setContent(name, content) {
      this[name] = content;
    },
  },
});
