<script>
import Child from './child.vue';
export default {
  name: 'Grandparent',
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
  <Child :msg="'Hola'" :element="'p'"/>
</template>