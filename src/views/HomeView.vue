<template>
  <div class="home" @scroll="ScrollD">

    <img src = "../assets/heroimage.png" class="hero">
  
    
     <ActionMovies></ActionMovies>

    <section id="Movies" @scroll="ScrollD">
      <h2 class="popular">POPULAR MOVIES</h2>
      <div class="mov-container" ref="scroll-content" >
        
       <span  class="arrow__btn left-arrow" @click="scrollLeft" >‹</span>
      <div v-for="(Movie,i) in MovieDetails" :key="Movie" @click="onClick($event,i)">
         <div class="mov">
      
      <img :src="`${IMAGE_BASE_URL}${BACKDROP_SIZE}${Movie.backdrop_path}`" alt="">
      <h2>{{Movie.title}}</h2>
          </div>
      </div>
      <span  class="arrow__btn right-arrow" @click="scrollRight" >›</span>
    
    
      
      </div>
    </section>
   
    <Top-Rated></Top-Rated>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeroSection from '@/components/HeroSection.vue'
import { reactive, toRaw } from 'vue'
import {mapState} from 'vuex'
import TopRated from '@/components/TopRated.vue'
import ActionMovies from '@/components/ActionMovies.vue'
import observer from '@/components/index1'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    HeroSection,
    TopRated,
    ActionMovies
  },
 data(){
   return{
    IMAGE_BASE_URL : "http://image.tmdb.org/t/p/",
     BACKDROP_SIZE : "w780",
     options:{
      root: document.querySelector(".root"),
     },
     target : document.querySelectorAll(".mov"),
   }
 },
 methods:{
     scrollLeft() {
      let content = document.querySelector(".mov-container");
      content.scrollLeft -= 1000;
    },
    scrollRight() {
      let content = document.querySelector(".mov-container");
      content.scrollLeft += 1000;
    },
  onClick(event,i){
     console.log(i)
  }
     
 },
 computed:{
    ...mapState({
      MovieDetails: state=> state.MovieDetails
    })
 },

  mounted(){
    this.$store.dispatch('fetchMovieDetails')
      console.log(this.MovieDetails)
    
}
   
}


</script>

<style>

.home{
margin-left: 30px;
  margin-right: 30px;
  color: white;
  
}
.hero{
  height: 550px;
  width:100%;
  
}
.manu{
  background-color: aliceblue;
}

#Movies{
  text-align:center;
}
.popular{
  margin-top: 30px;
  text-align: start;
}
#Movies .mov-container {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: no-wrap;
     overflow: auto;
}
.mov-container::-webkit-scrollbar {
  display: none;
}

.mov{
   width: 63%;
    min-width: 250px;
    padding:10px 8px;
    /*cursor: pointer;*/
    box-shadow: 20px 20px 30px rgba(0,0,0,0.02);
    margin:15px 0;
    transition: 0.2s ease;
   
}
.mov img{
  
  width:300px;
  border: 0cm;
  border-radius: 0.5vh;
   cursor:pointer ;
   
}


.icon{
   position: absolute;
   background-color: rgb(235, 231, 231);
   margin-top:80px;
  color: #fff;
  text-decoration: none;
  font-size: 4em;
 
  width: 70px;
  padding: 20px;
  text-align: center;
  z-index: 1;
}

.arrow__btn {
  position: absolute;
  color: #fff;
  text-decoration: none;
  font-size: 4em;
  background: rgb(0, 0, 0);
  width: 80px;
  padding: 20px;
  text-align: center;
  z-index: 1;
}
.left-arrow {
  
  margin-top: 40px;
  left: 0;
  background: linear-gradient(
    -90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}

.right-arrow {
  
  margin-top: 40px;
  right: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}

</style>