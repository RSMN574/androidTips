<template>
    <mainNav class="fixed"></mainNav>
    <div class="container mx-auto py-6">
      <div class="breadcrumbs text-sm mb-5">
	<ul>
		<li>
			<router-link to="/">首頁</router-link></li>
		<li>影音娛樂</li>
	</ul>
</div>
<div class="grid justify-items-stretch ">
				<postCard v-for="(post, i) in post" :key="i" :post="post" class="justify-self-center " />
			</div>
</div>
</template>
   
   <script>
   // @ is an alias to /src
   import mainNav from '@/components/nav.vue'
   import postCard from '@/components/postCard.vue'
   export default {
     name: 'viewC',
     components: {
       mainNav,postCard
     },data(){
      return{
        post:{}
      }
     },mounted(){
      if(/r/gi.test(location.href)){
	location.assign(location.href.substring(0, location.href.length - 2))
			location.reload(true);

		}
window.addEventListener('load',async ()=>{
 await this.$store.dispatch('FetchPosts',"view3")
this.post=  this.$store.state.post.view3
		console.log(this.post)
		})
		}
   }
   </script>
   