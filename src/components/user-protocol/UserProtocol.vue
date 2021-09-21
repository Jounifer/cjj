<template>
  <div :class="screenRatio">
    <common-menu :className="menuClass" ref="menu"></common-menu>
    <div class="content">
      <cn-content v-if="isEn"></cn-content>
      <zn-content v-else></zn-content>
    </div>
    <up-button></up-button>
  </div>
</template>

<script>
import {
  mapState,
} from 'vuex'
import CommonMenu from '../menu/Menu'
import CnContent from './CnContent.vue'
import ZnContent from './ZnContent.vue'
import UpButton from '../up-button/UpButton.vue'

export default {
  name: 'user-protocol',
  components: {
    CommonMenu,
    CnContent,
    ZnContent,
    UpButton,
  },
  computed: {
    ...mapState({
      isEn: (state) => state.isEn,
      browser: (state) => state.browser,
    }),
    menuClass() {

      if (this.browser === 'phone') {

        return 'phone-protocol-header';

      }

      return 'protocol-header';

    },
    screenRatio() {

      if (this.menuClass === 'phone-protocol-header') {

        return 'phone-protocol';

      }

      return 'protocol';
      
    },
  },
  mounted() {

    const odiv = document.querySelector('.content');
    this.$refs.menu.$el.style.width = `${odiv.clientWidth}px`;

  },
}
</script>

<style lang="scss" src="./UserProtocol.scss"></style>
