<template>
  <div id="app">
    <m-header></m-header>
    <m-tab></m-tab>
    <router-view/>
    <player></player>
  </div>
</template>

<script>

  import mHeader from "@/components/mHeader/mHeader.vue"
  import mTab from "@/components/tab/mTab.vue"
  import player from "@/components/player/player.vue"

export default {
  name: 'App'
  , components: {
      mHeader
      , mTab
      , player
  }
}
</script>

<style lang="stylus">

  #app {

  }
</style>
