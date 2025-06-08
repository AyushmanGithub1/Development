<template>
    <div>
      <h1>Hello {{ name }}</h1>
      <button @click="increment">Clicked {{ count }} times</button>
    </div>
  </template>
<script>

export default {
  name: 'Comp',
  data() {
    return {
      count:0
    }
  },
  props:{
    name: {
      type: String,
      required: true
    }
  },
  methods:{
    increment() {
      this.count++;
    }
  },
}
</script>
