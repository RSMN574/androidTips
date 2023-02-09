<template>

<div class="fixed z-50" v-wechat-title="post.title" ><Navigator ></Navigator></div>

	<div class=" pt-32 text-center w-full  bg-[#f5f8fc]  self-center  mx-auto shadow-lg border border-slate-300  rounded-xl sm:w-screen">
		<div class="mx-auto max-w-sm alert alert-warning z-0 mb-8">
	<svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M4.94024 35.0004H35.0602C38.1402 35.0004 40.0602 31.6604 38.5202 29.0004L23.4602 2.98035C21.9202 0.320352 18.0802 0.320352 16.5402 2.98035L1.48024 29.0004C-0.0597576 31.6604 1.86024 35.0004 4.94024 35.0004ZM20.0002 21.0004C18.9002 21.0004 18.0002 20.1004 18.0002 19.0004V15.0004C18.0002 13.9004 18.9002 13.0004 20.0002 13.0004C21.1002 13.0004 22.0002 13.9004 22.0002 15.0004V19.0004C22.0002 20.1004 21.1002 21.0004 20.0002 21.0004ZM22.0002 29.0004H18.0002V25.0004H22.0002V29.0004Z" fill="#F98600" />
	</svg>
	<div class="flex flex-col">
		<span>本網站為開發版</span>
		<span class="text-content2">有任何建議請聯絡我們FB</span>
	</div>
</div>
	<div class="  mx-auto ">
	<h1 class="  mx-4  text-2xl ">{{post.title}}</h1>
	</div>

	<br>
	<div class="overflow-x-clip text-left p-8" id="block">
  <SanityBlocks :blocks="blocks"  :serializers="serializers"/>
	</div>
	
	</div>

</template>

<script>
import Navigator from '@/components/nav.vue'
import { SanityBlocks } from 'sanity-blocks-vue-component';
import sanity from '../client'

export default {
 
components:{
	Navigator,SanityBlocks,
},
data(){
	return{ 
		id:this.$route.params.id,
		post:{ },
        blocks : [ ],
	serializers:{
		types: {
   image: (value)=> <img class="w-5/12 xl:w-1/5 lg:w-1/5 sm:w-full 4k:w-2/12 lazyload" data-src="original.jpg" src={"https://cdn.sanity.io/images/2v2qnpwf/production/"+value.asset._ref.substring(6,value.asset._ref.length-4)+".jpg"} />
	},
  
	},

		
 
  
	}
},
mounted(){
	
	const query = '*[_type == "post"  && _id == $id][0] { ..., author-> }'
			const params = { id: this.id }
			
			sanity.fetch(query, params).then(data => {
			this.post= data
			this.blocks= data.body
			console.log(this.post)
			})
		


},methods:{
	
}

	
}
</script>