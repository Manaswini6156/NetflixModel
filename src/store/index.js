import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
   MovieDetails:[],
   TopRatedMovies:[],
   ActionMovies:[],
  },
  getters: {
  },
  mutations: {
      //https://api.themoviedb.org/3/discover/movie?api_key=d4746d83c29bbb362adda8888e86b4a1&with_genres=28&language=en-US
      fetchActionMovieDetails(state){
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=d4746d83c29bbb362adda8888e86b4a1&with_genres=28&language=en-US")
      .then(res=>{
        console.log(res)
        res.data.results.forEach((item)=>{
          //console.log(item)
           state.ActionMovies.push(item)
           
        })
        console.log(state.ActionMovies)
      })
      .catch(err => console.log(err.message))
    },




    fetchMovieDetails(state){
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d4746d83c29bbb362adda8888e86b4a1&language=en')
    .then(res=>{
      console.log(res)
      res.data.results.forEach((item)=>{
        //console.log(item)
         state.MovieDetails.push(item)
         
      })
      console.log(state.MovieDetails)
    })
    
    .catch(err => console.log(err.message))
    },

    fetchTopRatedMovieDetails(state){
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=d4746d83c29bbb362adda8888e86b4a1')
    .then(res=>{
      console.log(res)
      res.data.results.forEach((item)=>{
        //console.log(item)
         state.TopRatedMovies.push(item)
         
      })
      console.log(state.TopRatedMovies)
    })
    
    .catch(err => console.log(err.message))
    }
  },
  actions: {
    fetchMovieDetails : context=>
    {
      context.commit('fetchMovieDetails')
    },
    fetchTopRatedMovieDetails : context=>
    {
      context.commit('fetchTopRatedMovieDetails')
    },
    fetchActionMovieDetails : context=>
    {
      context.commit('fetchActionMovieDetails')
    }

    },
  modules: {
  }
})
