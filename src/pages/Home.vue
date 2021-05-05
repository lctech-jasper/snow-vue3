<template>
  <div>
    home
    <div>
      <router-link to="/users">Go to users</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
// import { RouterLink } from 'vue-router'
export default defineComponent({
  name: 'homePage',
  setup() {
    return {}
  }
})
</script>