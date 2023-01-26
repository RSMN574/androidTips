<template>
 <mainNav class="fixed"></mainNav>
 <homeCard></homeCard>
</template>

<script>
// @ is an alias to /src
import mainNav from '@/components/nav.vue'
import homeCard from '@/components/homeCard.vue'
export default {
  name: 'HomeView',
  components: {
    mainNav,homeCard
  }
}
</script>
