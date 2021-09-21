<template>
  <div :class="className"
    :style="`${className.indexOf('phone') > -1 ? `height: ${height}px` : `width: ${width}px`}`">
    <ul>
      <li v-for="(item, index) in list"
        :key="index" :class="index%2 === 0 ? 'down' : 'up'">
        <b>
          <i v-if="index !== list.length - 1" class="line"
          :style="`${className.indexOf('phone') > -1 ? `height: ${lineLen}px` : `width: ${lineLen}px`}`"></i>
        </b>
        <span>{{ item.date }}</span>
        <p v-if="item.content.indexOf('登录BSC') > -1">
          <label style="margin-right: 42px;">登录BSC</label><br>{{ item.content.substr(5) }}
        </p>
        <p v-else>
          {{ item.content }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'process-list',
  props: {
    width: {
      type: Number,
      defaultValue: 200,
    },
    height: {
      type: Number,
      defaultValue: 200,
    },
    type: {
      type: String,
      defaultValue: 'vertical',//'horizontal'
    },
    className: {
      type: String,
      defaultValue: 'process-list',
    },
    list: {
      type: Array,
      defaultValue: [],
    },
  },
  computed: {
    lineLen() {

      if (this.className.indexOf('phone') > -1) {

        return (this.height - (13 * this.list.length)) / (this.list.length - 1);

      }

      return (this.width - (14 * this.list.length)) / (this.list.length - 1);

    },
  },
}
</script>

<style scoped lang="scss" src="./ProcessList.scss"></style>
<style scoped lang="scss" src="./Phone-ProcessList.scss"></style>