<template>
  <div class="singer">

  </div>
</template>

<script>
  import { getSingerList } from '@/service/singer'

  export default {
    name: 'singer',
    async created() {
      const singerList = await getSingerList()
      console.log(singerList)
    }
  }
</script>

<style lang="scss" scoped>
  .singer {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
  }
</style>
