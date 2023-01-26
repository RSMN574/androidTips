<template>
    <mainNav class="fixed"></mainNav>
    <div class="container mx-auto py-6">
<div class="breadcrumbs text-sm ">
	<ul>
		<li>
			<router-link to="/">首頁</router-link></li>
		<li>其他</li>
	</ul>
</div>
</div>
</template>
   
   <script>
   // @ is an alias to /src
   import mainNav from '@/components/nav.vue'
   
   export default {
     name: 'viewE',
     components: {
       mainNav
     },data(){
      return{
        post:{}
      }
     },mounted(){
window.addEventListener('load',async ()=>{
 await this.$store.dispatch('FetchPosts',"view5")
this.post=  this.$store.state.post.view5
		console.log(this.post)
		})
		}
   }
   </script>
   