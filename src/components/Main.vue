<template>
  <div :class="screenRatio">
    <div class="phone-bg" v-if="browser === 'phone'"></div>
    <common-menu :className="`${menuClass}main-header`"></common-menu>
    <octopus :className="`${menuClass}octopus`"></octopus>
    <flaglist :className="`${menuClass}flag-list`"></flaglist>
    <process-list
      :list="list"
      :width="820"
      :height="397.5"
      :className="`${menuClass}process-list`"></process-list>
    <contact></contact>
  </div>
</template>

<script>
import CommonMenu from './menu/Menu.vue'
import Octopus from './main/octopus/Octopus'
import Flaglist from './main/flaglist/Flaglist'
import ProcessList from './main/process-list/ProcessList'
import Contact from './main/contact/Contact'
import {
  mapState,
} from 'vuex'

export default {
  name: 'Main',
  components: {
    CommonMenu,
    Octopus,
    Flaglist,
    ProcessList,
    Contact,
  },
  computed: {
    ...mapState({
      browser: (state) => state.browser,
    }),
    screenRatio() {

      
      if (this.browser === 'phone') {

        return 'phone-main';

      }

      return 'main';

    },
    menuClass() {

      if (this.browser === 'phone') {

        return 'phone-';

      }

      return '';

    },
  },
  data() {

    return {
      list: [
        {
          date: '2021.Q2',
          content: '完成Ops内测',
        },
        {
          date: '2021.08',
          content: 'Ops正式版上线',
        },
        {
          date: '2021.09',
          content: '登录BSC开启流动性挖矿',
        },
        {
          date: '2021.Q3',
          content: '开放NFT拍卖行功能',
        },
        {
          date: '2021.Q3',
          content: '启动KOL孵化计划',
        },
        {
          date: '2021.Q4',
          content: 'Ops V2版本上线',
        },
        {
          date: '2021.Q4',
          content: '搭建SoicalFi战略联盟',
        },
      ],
    };

  },
}
</script>

<style scoped lang="scss" src="./Main.scss"></style>