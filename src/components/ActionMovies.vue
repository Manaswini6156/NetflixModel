<template>
    <section id="Movies">
      <h2 class="popular">Action Movies</h2>
      <div class="mov-container">
        
         
      <div v-for="Movie in ActionMovies" :key="Movie">
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
    name:'ActionMovies',
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
      ActionMovies: state=> state.ActionMovies
    })
 },

  mounted(){
    this.$store.dispatch('fetchActionMovieDetails')
      console.log(this.ActionMovies)
  },
     


}
</script>
