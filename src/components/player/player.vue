/**
* Created by Android2 on 2018/3/1.
 *
 */


<template>
    <div class="bottom">
      player
    </div>
</template>

<script>
    export default {
        name: 'player',
        data () {
            return {}
        }
        , components: {}
    }
</script>

<style scoped lang="stylus">

  @import "~common/stylus/variable.styl";

  .bottom{
    position: fixed;
    bottom:0;
    color: $color-text-l;
  }
</style>
