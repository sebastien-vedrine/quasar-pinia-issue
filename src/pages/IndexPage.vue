<template>
  <q-page class="q-pa-md">
    <p class="route">Route: {{ $route.name }}</p>
    <p class="component">Component: IndexPage</p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>

<style lang="scss">
.route {
  font-size: 24px;
}

.component {
  font-size: 20px;
}
</style>
