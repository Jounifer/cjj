<template>
  <div class="main-header">
    <template v-if="false">
      <div class="menu">
        <ul v-if="isEn">
          <li><a href="https://mining.opsnft.net">To Farm</a></li>
          <li><a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0xF878D657926BE3372e1f17973F289ffb6cd17c3b">Buy OPS</a></li>
        </ul>
        <ul v-else>
          <li class="menu-text-space"><a href="https://mining.opsnft.net">农场</a></li>
          <li><a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0xF878D657926BE3372e1f17973F289ffb6cd17c3b">购买OPS</a></li>
        </ul>
        <div class="menu-button" @click="expandMenu">
          <i class="line top"></i>
          <i class="line center"></i>
          <i class="line bottom"></i>
        </div>
        <div
          class="home"
          v-if="className === 'phone-protocol-header'"
          @click="toRouter('Main')">{{isEn ? 'Home' : '首页'}}</div>
      </div>
      <div class="item-box">
        <ul v-if="isEn">
          <li><a href="https://www.yuque.com/ops2021/ops/aq4r2u">White Paper</a></li>
          <li :class="`${$router.currentRoute.name === 'user-protocol' ? 'active' : ''}`">
            <a @click="toRouter('user-protocol')">Terms of Use</a>
          </li>
          <li :class="`${$router.currentRoute.name === 'private-protocol' ? 'active' : ''}`">
            <a @click="toRouter('private-protocol')">Privacy Policy</a>
          </li>
          <li><a href="https://www.certik.org/projects/opsnft">Audit</a></li>
          <li><a @click="handleEn(false)">简体中文</a></li>
        </ul>
        <ul v-else>
          <li class="menu-text-space"><a href="https://www.yuque.com/ops2021/ops/aq4r2u">白皮书</a></li>
          <li :class="`menu-text-space ${$router.currentRoute.name === 'user-protocol' ? 'active' : ''}`">
            <a @click="toRouter('user-protocol')">用户协议</a>
          </li>
          <li :class="`menu-text-space ${$router.currentRoute.name === 'private-protocol' ? 'active' : ''}`">
            <a @click="toRouter('private-protocol')">隐私协议</a>
          </li>
          <li class="menu-text-space"><a href="https://www.certik.org/projects/opsnft">审计</a></li>
          <li><a @click="handleEn(true)">English</a></li>
        </ul>
        <div class="model" @click="expandMenu"></div>
      </div>
    </template>
    <template v-else>
      <img
        src="../../assets/images/logo.png"
        height="60" alt=""
        @click="toRouter('Main')">
      <ul v-if="isEn">
        <li><a href="https://mining.opsnft.net">To Farm</a></li>
        <li><a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0xF878D657926BE3372e1f17973F289ffb6cd17c3b">Buy OPS</a></li>
        <li><a href="https://www.yuque.com/ops2021/ops/aq4r2u">White Paper</a></li>
        <li :class="`${$router.currentRoute.name === 'user-protocol' ? 'active' : ''}`">
          <a @click="toRouter('user-protocol')">Terms of Use</a>
        </li>
        <li :class="`${$router.currentRoute.name === 'private-protocol' ? 'active' : ''}`">
          <a @click="toRouter('private-protocol')">Privacy Policy</a>
        </li>
        <li><a href="https://www.certik.org/projects/opsnft">Audit</a></li>
        <li class="lang"><a @click="handleEn(false)">中</a></li>
      </ul>
      <ul v-else>
        <li class="menu-text-space"><a href="https://mining.opsnft.net">农场</a></li>
        <li><a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0xF878D657926BE3372e1f17973F289ffb6cd17c3b">购买OPS</a></li>
        <li class="menu-text-space"><a href="https://www.yuque.com/ops2021/ops/aq4r2u">白皮书</a></li>
        <li :class="`menu-text-space ${$router.currentRoute.name === 'user-protocol' ? 'active' : ''}`">
          <a @click="toRouter('user-protocol')">用户协议</a>
        </li>
        <li :class="`menu-text-space ${$router.currentRoute.name === 'private-protocol' ? 'active' : ''}`">
          <a @click="toRouter('private-protocol')">隐私协议</a>
        </li>
        <li class="menu-text-space"><a href="https://www.certik.org/projects/opsnft">审计</a></li>
        <li class="lang"><a @click="handleEn(true)">En</a></li>
      </ul>
    </template>
  </div>
</template>

<script>
import {
  mapState,
  mapActions,
} from 'vuex';

export default {
  name: 'common-menu',
  props: {
    className: {
      type: String,
      defaultValue: 'main-header',
    },
  },
  computed: {
    ...mapState({
      isEn: (state) => state.isEn,
    }),
  },
  data() {

    return {
      isExpand: false,
    };

  },
  methods: {
    ...mapActions([
      'setIsEnAsync',
    ]),
    toRouter(name) {

      if (name) {

        if (this.$router.currentRoute.name === name) {

          return;

        }
        document.removeEventListener('touchmove', this.stopTouchMove, {passive: false});
        this.$router.push(name);
        document.title = this.isEn
          ? `${this.$router.currentRoute.meta.CnTitle} - Ops`
          : `${this.$router.currentRoute.meta.ZnTitle} - Ops`;

      }

    },
    handleEn(flag) {

      this.setIsEnAsync(flag);
      document.title = flag
          ? `${this.$router.currentRoute.meta.CnTitle} - Ops`
          : `${this.$router.currentRoute.meta.ZnTitle} - Ops`;

    },
    stopTouchMove(e) {

      e.preventDefault();

    },
    expandMenu() {

      this.isExpand = !this.isExpand;
      if (this.isExpand) {

        document.addEventListener('touchmove', this.stopTouchMove, {passive: false});

      } else {

        document.removeEventListener('touchmove', this.stopTouchMove, {passive: false});

      }

    },
  },
}
</script>

<style lang="scss" src="./Menu.scss" scoped></style>
<style lang="scss" src="./Phone-Menu.scss" scoped></style>