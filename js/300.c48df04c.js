"use strict";(self["webpackChunkandroid_tips"]=self["webpackChunkandroid_tips"]||[]).push([[300],{1300:function(s,t,l){l.r(t),l.d(t,{default:function(){return x}});var e=l(3396),i=l(7139);const a={class:"fixed z-50"},o={class:"pt-32 text-center w-full bg-[#f5f8fc] self-center mx-auto shadow-lg border border-slate-300 rounded-xl sm:w-screen"},n=(0,e.uE)('<div class="mx-auto max-w-sm alert alert-warning z-0 mb-8"><svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.94024 35.0004H35.0602C38.1402 35.0004 40.0602 31.6604 38.5202 29.0004L23.4602 2.98035C21.9202 0.320352 18.0802 0.320352 16.5402 2.98035L1.48024 29.0004C-0.0597576 31.6604 1.86024 35.0004 4.94024 35.0004ZM20.0002 21.0004C18.9002 21.0004 18.0002 20.1004 18.0002 19.0004V15.0004C18.0002 13.9004 18.9002 13.0004 20.0002 13.0004C21.1002 13.0004 22.0002 13.9004 22.0002 15.0004V19.0004C22.0002 20.1004 21.1002 21.0004 20.0002 21.0004ZM22.0002 29.0004H18.0002V25.0004H22.0002V29.0004Z" fill="#F98600"></path></svg><div class="flex flex-col"><span>本網站為開發版</span><span class="text-content2">有任何建議請聯絡我們FB</span></div></div>',1),r={class:"mx-auto"},c={class:"mx-4 text-2xl"},d=(0,e._)("br",null,null,-1),p={class:"overflow-x-clip text-left p-8",id:"block"};function u(s,t,l,u,w,f){const h=(0,e.up)("Navigator"),g=(0,e.up)("SanityBlocks"),v=(0,e.Q2)("wechat-title");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.wy)(((0,e.wg)(),(0,e.iD)("div",a,[(0,e.Wm)(h)])),[[v,w.post.title]]),(0,e._)("div",o,[n,(0,e._)("div",r,[(0,e._)("h1",c,(0,i.zw)(w.post.title),1)]),d,(0,e._)("div",p,[(0,e.Wm)(g,{blocks:w.blocks,serializers:w.serializers},null,8,["blocks","serializers"])])])],64)}var w=l(6585),f=l(5710),h=l(2356),g={components:{Navigator:w.Z,SanityBlocks:f.w},data(){return{id:this.$route.params.id,post:{},blocks:[],serializers:{types:{image:s=>(0,e.Wm)("img",{class:"w-5/12 xl:w-1/5 lg:w-1/5 sm:w-full 4k:w-2/12 lazyload","data-src":"original.jpg",src:"https://cdn.sanity.io/images/2v2qnpwf/production/"+s.asset._ref.substring(6,s.asset._ref.length-4)+".jpg"},null)}}}},mounted(){const s='*[_type == "post"  && _id == $id][0] { ..., author-> }',t={id:this.id};h.Z.fetch(s,t).then((s=>{this.post=s,this.blocks=s.body,console.log(this.post)}))},methods:{}},v=l(89);const m=(0,v.Z)(g,[["render",u]]);var x=m}}]);
//# sourceMappingURL=300.c48df04c.js.map