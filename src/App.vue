<template >
      <section id="header">
       <img src="./assets/netflixlogo.png" class = "logo" alt = ""> 
       <nav class="nav-bar">
    <router-link to="/" class="header-title" >Home</router-link> |
    <router-link to="/about" class="header-title">About</router-link>
      </nav>
      <nav class="nav-bar2">
        <img src="./assets/search.png" class = "search-icon" alt = ""> 
        <img src="./assets/profile.jpeg" class = "profile-icon" alt = ""> 
      </nav>
      </section>
  
  <router-view/>
</template>
<script>
export default{
   
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    margin:0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Spartan',sans-serif;
    background-color: black;
}
body{
    width:100%;
}
.logo{
  width: 100px;
}
#header{
    height:75px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    background: rgb(14, 13, 13);
    box-shadow: 0 5px 15px rgba(0,0,0,0.06);
    z-index:999;
    position:sticky;
    top: 0;
    left:0;
}
.header-title{
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding-right: 10px;
  text-decoration: none;
}
.nav-bar{
   display: flex ;
   justify-content: space-between;
    align-items : center;
    margin-left: 15px;
    margin-right:700px;
   
     }
.nav-bar2{
    display: flex ;
    align-items : center;
   justify-content: space-between;
   margin-right: 300px;
     }

.search-icon{
  color:white;
  height: 20px;
 
}
.profile-icon{
  color:white;
  height: 20px;
  margin-left: 10px;
}
</style>
