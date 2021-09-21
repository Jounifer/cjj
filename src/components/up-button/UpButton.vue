<template>
  <div
    class="czr-btta"
    :style="`right: ${btnVisible ? `${0 + scrollWidth}px` : '-45px'};`"
    @click="handle">
    <i class="icn-up-small"></i>
  </div>
</template>

<script>
export default {
  name: 'up-button',
  data() {

    return { btnVisible: false };

  },
  computed: {
    scrollWidth() {

      const oDiv = document.querySelector(".content");
      return oDiv.offsetWidth - oDiv.clientWidth;

    },
    top() {

      return this.getPageScrollY();

    },
  },
  methods: {
    getPageScrollY() {

      let yScroll = 0;
      if (document.querySelector('.content')) {

        yScroll = document.querySelector('.content').scrollTop;

      } else {

        if (self.pageYOffset) {

            yScroll = self.pageYOffset;

        } else if (document.documentElement && document.documentElement.scrollTop) {

            yScroll = document.documentElement.scrollTop;

        } else if (document.body) {

            yScroll = document.body.scrollTop;

        }

      }

      return yScroll;

    },
    showBtn() {

      const yScroll = this.getPageScrollY();
      if (yScroll > window.screen.height) {

        this.btnVisible = true;

      } else {

        this.btnVisible = false;

      }
      if (yScroll > 10) {

        if (document.querySelector(".main-header")) {

          document.querySelector(".main-header").className = 'main-header scrolled';

        } else if (document.querySelector(".phone-main-header")) {

          document.querySelector(".phone-main-header").className = 'phone-main-header scrolled';

        } else if (document.querySelector(".protocol-header")) {

          document.querySelector(".protocol-header").className = 'protocol-header scrolled';

        } else if (document.querySelector(".phone-protocol-header")) {

          document.querySelector(".phone-protocol-header").className = 'phone-protocol-header scrolled';

        }

      } else {

        if (document.querySelector(".main-header")) {

          document.querySelector(".main-header").className = 'main-header';

        } else if (document.querySelector(".phone-main-header")) {

          document.querySelector(".phone-main-header").className = 'phone-main-header';

        } else if (document.querySelector(".protocol-header")) {

          document.querySelector(".protocol-header").className = 'protocol-header';

        } else if (document.querySelector(".phone-protocol-header")) {

          document.querySelector(".phone-protocol-header").className = 'phone-protocol-header';

        }

      }

    },
    handle() {

      if (document.querySelector('.content')) {

        document.querySelector('.content').scrollTop = 0;

      } else {

        if (document.documentElement && document.documentElement.scrollTop) {

            document.documentElement.scrollTop = 0;

        } else if (document.body) {

            document.body.scrollTop = 0;

        }

      }

    },
  },
  mounted() {

    (document.querySelector('.content') || window).addEventListener("scroll", this.showBtn);

  },
  destroyed() {

    (document.querySelector('.content') || window).removeEventListener("scroll", this.showBtn);

  },
}
</script>

<style lang="scss" src="./UpButton.scss"></style>