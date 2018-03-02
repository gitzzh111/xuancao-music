/**
* Created by Android2 on 2018/3/1.
 *
 */

<template>
    <div class="mHeader">
        <div class="icon">icon</div>
        <p class="text">h-header</p>
        <div class="user">user</div>
    </div>
</template>

<script>
    export default {
        name: 'mHeader',
        data () {
            return {}
        }
        , components: {}
    }
</script>

<style scoped lang="stylus">

  @import "~common/stylus/variable.styl";

  .mHeader {
    position: relative;
    top: 0;
    width:100%;
    height: 44px;
    color: $color-theme;
  }
  .mHeader>.icon {
    display: inline-block;
  }
  .mHeader>.text {
    line-height: 44px;
    font-size: 18px;
    display: inline-block;
  }
  .mHeader>.user {
    /*display: inline-block;*/
    float: right;
  }
</style>
