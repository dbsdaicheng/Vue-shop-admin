<script lang="ts">
import axios from 'axios';
import Layout from '@/layouts/index.vue';
axios.get('/mock/message').then((res: any) => {
  console.log(res);
});
export default {
  name: 'App',
  components: {
    Layout
  }
};
</script>

<template>
  <Layout />
</template>

<style>
</style>
