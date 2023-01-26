<template>

<div class="fixed" ><Navigator ></Navigator></div>

	<div class=" pt-24 text-center w-full  bg-[#f5f8fc]  self-center  mx-auto shadow-lg border border-slate-300  rounded-xl sm:w-screen">
	<div class="  mx-auto ">
	<h1 class="  mx-auto  text-2xl ">{{post.title}}</h1>
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
},data(){
	return{ 
		id:this.$route.params.id,
		post:{ },
        blocks : [ ],
	serializers:{
		types: {
   image: (value)=> <img class="w-5/12 sm:w-full" src={"https://cdn.sanity.io/images/42dlbyyj/production/"+value.asset._ref.substring(6,value.asset._ref.length-4)+".jpg"} />
	},
  
	},

		
 
  
	}
},
mounted(){
	
	const query = '*[_type == "post" || _type == "home" && _id == $id][0] { ..., author-> }'
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