/* eslint-disable */ 
import { createStore } from 'vuex'
import sanity from '../client'
export default createStore({
  state: {
    post:{
      view1:[],
      view2:[],
      view3:[],
      view4:[],
      view5:[],
      home:[]

    }
  },
  getters: {
  },
  mutations: {
    SET_POSTS (state, posts) {
      switch (posts.target) {
        case "view1":
          state.post.view1.push(posts)
          break;
          case "view2":
            state.post.view2.push(posts)
            break;
            case "view3":
              state.post.view3.push(posts)
              break;
              case "view4":
                state.post.view4.push(posts)
                break;
                case "view5":
                  state.post.view5.push(posts)
                  break;
                  case "home":
                  state.post.home.push(posts)
                  break;
      }
    }
  },
  actions: {
    async FetchPosts({ commit ,state,dispatch},target ) {
      let query 
      if(target ==="home"){
        query  = `*[ _type=="post" ]| order(_updatedAt)[0...3] `
      }else{
        query  = `*[ _type=="post" && category=="${target}" ]| order(_updatedAt) `
      }
		    

           sanity.fetch(query).then(async posts => {
         for(let i in posts){
          if(target==="home"){
            posts[i].target="home"
          }else{
            posts[i].target=posts[i].category
          }
          
           posts[i].author.full_name=  await dispatch('FetchAuthor' ,posts[i].author._ref)
           posts[i].author.imageUrl=await dispatch('fetchAuthorImg' ,posts[i].author.full_name)
      
            commit('SET_POSTS', posts[i])
        }
		
         console.log(state.post)
      
			})

			}, 
      async FetchAuthor({context,},id){        
        var re=""
    let author_id=id
    console.log( author_id)
     await sanity.fetch( `*[ _type=="author" && _id=="${author_id}"]`).then(author => {
 
  re=String( author[0].name)
 
         })
      
         return re
       },
       async fetchAuthorImg({context,},author){
        let re
         console.log(author)
              let query =`*[_type == 'author' && name =="${author}"]{
         name,
         "imageUrl": image.asset->url
       }`
         
        await sanity.fetch(query ).then(a=> {
         
          console.log(a)
       re=a[0].imageUrl
      
       
               })
          return re
             }
  },
  modules: {
  }
})
