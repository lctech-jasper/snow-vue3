<template>
  <div>
    users
    <wrap-ele>
      <div class="aaaa">
        webcompoent slot
      </div>
      <cccc />
    </wrap-ele>
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

<style>
  .aaaa {
    background-color: green;
  }
</style>