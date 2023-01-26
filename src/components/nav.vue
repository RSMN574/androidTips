<template>
    <nav class="backdrop-blur-md bg-white/40 w-screen h-20 shadow-lg rounded-3xl 596:px-2 ">
        <div class="flex flex-row bg-transparent my-auto ">
  <div class="basis-1/5 bg-transparent inline  text-right md:text-left 596:basis-2/6 align-top 596:text-left sm:basis-5/6 sm:text-left md:basis-5/6"> <router-link to="/"><img class="w-8 m-0 inline align-top" src="../assets/a-k-o-f.svg"> <span class="align-top">AndroidTips</span></router-link></div>
  <div class="basis-3/5 bg-transparent  596:basis-4/6 md:hidden sm:hidden">
  <div class="flex flex-row gap-x-6 justify-center lg:gap-x-4 md:gap-x-2 596:gap-x-3 bg-transparent">
  <div><router-link to="/viewA">美化手機</router-link></div>
  <div><router-link to="/viewB">網路軟體</router-link></div>
  <div><router-link to="/viewC">影音娛樂</router-link></div>
  <div><router-link to="/viewD">刷機專區</router-link></div>
  <div><router-link to="/viewE">其他</router-link></div>
</div>      </div>
  <div class="basis-2/5 bg-transparent lg:basis-1/5 md:hidden 596:hidden sm:hidden"><input class="input h-8" placeholder="搜尋" /></div>
  <div class="hidden md:block sm:block md:basis-1/6 sm:basis-1/6">
    <svg @click="mobileNav=true" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512">
<g>
	<path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
	<path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z"/>
	<path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z"/>
</g>
</svg>
    </div>
</div>
   
    </nav>
    <el-drawer
    v-model="mobileNav"
    title="I am the title"
   :with-header="false"
   size="50%"
   direction="ltr"
  >

    <div class="flex flex-col mt-14 gap-y-3">
        <div>美化手機</div>
  <div>網路軟體</div>
  <div>影音娛樂</div>
  <div>刷機專區</div>
  <div>其他</div> 
</div>
  </el-drawer>
</template>
<style scoped>

</style>
<script>


export default {
    name:'mainNav',
    components:{
       

    },
        data(){
            return{
                mobileNav:false
            }
           
        }
    
}
</script>