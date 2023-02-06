<template>
 
  <div class="fixed"><mainNav class="fixed"></mainNav></div>

  <div class="container mx-auto py-20 ">
    最新文章
  </div>
  
  <div class="flex flex-row  sm:flex-col md:flex-col 596:flex-col sm:gap-y-16 md:gap-y-16 596:gap-y-16  justify-center bg-[#F9F6FD] lg:gap-x-8 xl:gap-x-12 4k:gap-x-20"  >
    <homeCard v-for="(post, i) in post" :key="i" :post="post"></homeCard>
  </div>

</template>

<script>
// @ is an alias to /src
import mainNav from '@/components/nav.vue'
import homeCard from '@/components/homeCard.vue'
export default {
  name: 'HomeView',
  components: {
    mainNav, homeCard
  }, data() {
    return {
      post: {}
    }
  }, mounted() {
    if(/r/gi.test(location.href)){
	location.assign(location.href.substring(0, location.href.length - 2))
			location.reload(true);

		}
    window.addEventListener('load', async () => {
      await this.$store.dispatch('FetchPosts', "home")
      this.post = this.$store.state.post.home
      console.log(this.post)
    })
  }
}
</script>
