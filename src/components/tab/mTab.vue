/**
* Created by Android2 on 2018/3/1.
 *
 */


<template>
    <div class="mTab">
      <div class="tabItem">
        <router-link tag="span" class="tab-link" to="/recommend">
          推荐
        </router-link>
      </div>
      <div class="tabItem">
        <router-link tag="span" class="tab-link" to="/singer">
          歌手
        </router-link>
      </div>
      <div class="tabItem">
        <router-link tag="span" class="tab-link" to="/rank">
          排行
        </router-link>
      </div>
      <div class="tabItem">
        <router-link tag="span" class="tab-link" to="/search">
          搜索
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'mTab',
        data () {
            return {}
        }
        , components: {}
    }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/variable.styl";

  .mTab {
    display: flex;
    height: 44px
    line-height: 44px
  }
  .tabItem {
    flex: 1;
    text-align: center;
    .tab-link {
      color: $color-text-l;
      font-size: $font-size-medium;
    }
    .router-link-active{
      color: $color-theme
      border-bottom: $color-theme solid 2px;
      padding-bottom: 4px
    }
  }
</style>
