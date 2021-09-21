<template>
  <div :class="className">
    
    <template v-if="className === 'phone-octopus'">
      <div class="octopus-content">
        <div class="content-top">
          <div>
            <p class="text-left">NFT For Everyone</p>
            <p class="text-left">Open Social Square</p>
          </div>
          <div class="btn-list">
            <a class="app-button" href="https://testflight.apple.com/join/sOAMUKJB"></a>
            <a class="apk-button" href="https://opsapk-beijing.oss-cn-beijing.aliyuncs.com/OPS_release.apk">
            </a>
          </div>
        </div>
        <span>
          Ops是一款Web3.0时代SocialFi+NFT网络社交平台<br>
          用户可通过平台分享最新动态<br>
          随时随地关注圈内新鲜事<br>
        </span>
        <div class="octopus-bg">
          <img src="../../../assets/images/octopus1.png" height="248" alt="">
        </div>
      </div>
    </template>
    <template v-else>
      <div class="octopus-content">
        <p class="text-right">NFT For Everyone</p>
        <p class="text-left">Open Social Square</p>
        <span>
          Ops是一款Web3.0时代SocialFi+NFT网络社交平台<br>
          用户可通过平台分享最新动态<br>
          随时随地关注圈内新鲜事<br>
        </span><br>
        <div class="download" @click="btnVisible = !btnVisible">
          <span>Download Ops</span>
          <transition name="fade">
            <div class="btn-list" v-if="btnVisible">
              <a class="app-button" href="https://testflight.apple.com/join/sOAMUKJB"></a>
              <a class="apk-button" href="https://opsapk-beijing.oss-cn-beijing.aliyuncs.com/OPS_release.apk">
              </a>
            </div>
          </transition>
        </div>
      </div>
      <div class="octopus-bg">
        <img src="../../../assets/images/octopus.png" height="663" alt="">
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'octopus',
  props: {
    className: {
      type: String,
      defaultValue: 'octopus',
    },
  },
  data() {

    return { btnVisible: false };

  },
}
</script>

<style scoped lang="scss" src="./Octopus.scss"></style>
<style scoped lang="scss" src="./Phone-Octopus.scss"></style>