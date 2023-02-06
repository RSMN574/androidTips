 <template>
 <router-link :to="`/post/${ post._id }`" class="mx-auto max-h-48 w-6/12 md:w-11/12 sm:h-max  h-full justify-self-center xl:w-9/12 4k:w-10/12 lg:w-10/12 ">
 <div class="max-w-md h-full sm:h-max mx-auto md:h-max 596:h-max shadow-md overflow-hidden border border-slate-300 bg-[#f5f8fc] rounded-xl xl:max-w-2xl lg:max-w-2xl 4k:max-w-2xl hover:scale-105 transition ease-in-out">
  <div class="xl:flex 4k:flex lg:flex">
    <div class="xl:shrink-0 4k:shrink-0 lg:shrink-0">
      <img class=" h-full w-48  object-cover xl:h-full xl:w-48 sm:h-1/4 aspect-video md:w-full 596:w-full" v-if="post.mainImage" :src="CreateURL(post.mainImage)"  alt="">
    </div>
    <div class="p-4">
       <h1 class="block mt-1 text-lg leading-tight font-medium text-black" >{{ post.title }}</h1>
       <p class="mt-2 text-slate-800">{{post.introduction}}</p>
	<div class="flex items-center gap-2 p-4  ">
         <img class="rounded-full w-10 h-10" :src="( post.author.imageUrl  )">    <div class="flex flex-col">
          <strong class=" text-center text-slate-900 text-base font-medium  sm:text-sm  ">{{post.author.full_name }}</strong>
          <span class=" text-end text-slate-700 text-sm font-medium">{{post._createdAt.slice(0,10) }}</span>
       </div>
   </div>
    </div>
  </div>
</div>
</router-link>
	
	
</template>

<script>


import { CreateURL, TextToHTML } from '../utils'
export default {
	name: 'postCard',
	props:["post"],
	data(){
		return{
CreateURL, TextToHTML,

		}
	},mounted(){
		
	}

	,computed:{

	}
	

	}

</script>
<style scoped>

</style>