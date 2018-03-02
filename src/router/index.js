import Vue from 'vue'
import Router from 'vue-router'

// import musicList from '@/components/musicList/musicList.vue'
import Recommend from '../views/recommend/Recommend.vue'
import Rank from '../views/rank/Rank.vue'
import Singer from '../views/singer/singer.vue'
import Search from '../views/search/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      redirect: "/recommend",
      component: Recommend
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
  ]
})
