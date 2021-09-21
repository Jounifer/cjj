<template>
  <div class="contact">
    <a class="twitter" href="https://twitter.com/OPS_SocialNFT"></a>
    <a class="telegram" href="https://t.me/OpsGlobalNetwork"></a>
    <a class="wechat" @click="wechatVisible = !wechatVisible">
      <div class="code">
        <div class="wechat-code">
          <img src="../../../assets/images/wechat-code.png" alt="">
          <span v-if="isEn">Ops Wechat Public</span>
          <span v-else>Ops 公众号</span>
        </div>
        <div class="wechat-code">
          <img src="../../../assets/images/chat-code.png" alt="">
          <span v-if="isEn">Hot group chat🔥️</span>
          <span v-else>加入火爆🔥️群聊</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import {
  mapState,
} from 'vuex'

export default {
  name: 'contact',
  computed: {
    ...mapState({
      isEn: (state) => state.isEn,
    }),
  },
  data() {

    return {
      wechatVisible: false,
    };

  },
}
</script>

<style scoped lang="scss" src="./Contact.scss"></style>