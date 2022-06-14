<template>
    <q-page class="q-pa-md">
    <p class="route">Route: {{ $route.name }}</p>
    <p class="component">Component: IndexPage</p>
    <p class="content">State from store:
      {{ $route.name === 'Route2' ? contentRoute2 : contentRoute3 }}
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useContentStore } from 'stores/example-store';

export default defineComponent({
  name: 'IndexPage2',

  preFetch({ store, currentRoute }) {
    const contentStore = useContentStore(store);
    contentStore.setContent(
      currentRoute.name === 'Route2'
        ? 'contentRoute2'
        : 'contentRoute3',

      currentRoute.name === 'Route2'
        ? 'Content Route 2'
        : 'Content Route 3',
    );
  },

  setup() {
    const contentStore = useContentStore();
    const { contentRoute2, contentRoute3 } = contentStore;

    return {
      contentRoute2,
      contentRoute3,
    };
  },
});
</script>

<style lang="scss">
.route {
  font-size: 24px;
}

.component {
  font-size: 20px;
}

.content {
  font-size: 20px;
  font-weight: 600;
}
</style>
