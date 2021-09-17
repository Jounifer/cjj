<template>
  <div class="main">
    <common-menu></common-menu>
    <octopus></octopus>
    <flaglist></flaglist>
    <process-list :list="list" :width="820"></process-list>
  </div>
</template>

<script>
import CommonMenu from './menu/Menu.vue'
import Octopus from './octopus/Octopus'
import Flaglist from './flaglist/Flaglist'
import ProcessList from './process-list/ProcessList'

export default {
  name: 'Main',
  components: {
    CommonMenu,
    Octopus,
    Flaglist,
    ProcessList,
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
          content: '登陆BSC开启流动性挖矿',
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