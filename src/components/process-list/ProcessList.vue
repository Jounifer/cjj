<template>
  <div class="process-list" :style="`width: ${width}px;`">
    <ul>
      <li v-for="(item, index) in list"
        :key="index" :class="index%2 === 0 ? 'down' : 'up'">
        <b>
          <i v-if="index !== list.length - 1" class="line" :style="`width: ${lineLen}px`"></i>
        </b>
        <span>{{ item.date }}</span>
        <p>{{ item.content }}</p>
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
    list: {
      type: Array,
      defaultValue: [],
    },
  },
  computed: {
    lineLen() {

      return (this.width - (14 * this.list.length)) / (this.list.length - 1);

    },
  },
}
</script>

<style scoped lang="scss" src="./ProcessList.scss"></style>