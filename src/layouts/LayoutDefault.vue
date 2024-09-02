<template>
  <AppHeader/>
  <main>
    <router-view/>
  </main>
</template>

<script>
import AppHeader from '/src/components/AppHeader';

export default {
  components: {
    AppHeader,
  },
};
</script>