<template>
    <section id="Movies">
      <h2 class="popular">Top-Rated Movies</h2>
      <div class="mov-container">
        
         
      <div v-for="Movie in TopRatedMovies" :key="Movie">
         <div class="mov">
      
      <img :src="`${IMAGE_BASE_URL}${BACKDROP_SIZE}${Movie.backdrop_path}`" alt="">
      <h2>{{Movie.title}}</h2>
          </div>
      </div>
    
    
      
      </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'Top-Rated',
  components: {
    
  },
 data(){
   return{
    IMAGE_BASE_URL : "http://image.tmdb.org/t/p/",
     BACKDROP_SIZE : "w780"
   }
 },
 computed:{
    ...mapState({
      TopRatedMovies: state=> state.TopRatedMovies
    })
 },

  mounted(){
    this.$store.dispatch('fetchTopRatedMovieDetails')
      console.log(this.TopRatedMovies)
  },
     


}
</script>
