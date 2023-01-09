<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{ color: color }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
})

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  console.log(props.name, 'props.name')
  if (props.name) {
    return `svg-icon icon-${props.name}`
  }
  return 'svg-icon'
})
</script>

<style lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
  position: absolute;
}
.el-input__wrapper {
  width: 100%;
}
.el-input {
  width: 100% !important;
  input {
    padding: 12px 5px 12px 28px !important;
  }
}
</style>
