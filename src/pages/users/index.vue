<template>
  <div>
    users
    <cccc />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import cccc from 'components/mycom.vue'

export default defineComponent({  
  components: { cccc },
  mounted() {
    console.log('mounted')
  },
})
</script>
