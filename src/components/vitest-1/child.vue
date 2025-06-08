<script>
export default {
  name: 'Child',
  data() {
    return {
    }
  },
  props:['msg','element'],
}
</script>

<template>
    <Component :is="element">
        {{ msg }}
    </Component>
</template>