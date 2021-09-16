<template>
  <div class="process-list" :style="`width: ${width}px;`">
    <ul>
      <li v-for="(item, index) in list"
        :key="index">
        <b></b>  
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
}
</script>

<style scoped lang="scss" src="./ProcessList.scss"></style>