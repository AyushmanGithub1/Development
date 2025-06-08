<script>
import Child from './child.vue';
export default {
  name: 'Parent',
  data() {
    return {
    }
  },
  components: {
    Child
  }
}
</script>

<template>
  <Child :msg="'Hello'" :element="'h1'"/>
</template>