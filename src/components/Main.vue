<template>
  <div class="main">
    <common-menu></common-menu>
    <octopus></octopus>
    <flaglist></flaglist>
    <process-list :list="list" width="800"></process-list>
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
      list: [{},{},{}],
    };

  },
}
</script>

<style scoped lang="scss" src="./Main.scss"></style>