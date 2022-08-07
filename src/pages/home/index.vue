<script lang="ts">
import axios from 'axios';
axios.get('/mock/message').then((res: any) => {
  console.log(res);
});
</script>

<template>
  <div>hello world</div>
</template>

<style>
</style>
