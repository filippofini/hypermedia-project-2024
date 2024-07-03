<template>
  <div class = "generalCarousel">
  <div v-if = "props.act ==  '0' && !isServiceEmpty" class = "title-page-2">
    Services Supervised
  </div>
  <div v-if = "props.act == '1' && !isProjectEmpty" class = "title-page-2">
    Projects Supervised
  </div>

  <div class="carousel">
    <div class="itemCarousel" v-for="(activity, index) in collection" :key="index">
      <NuxtLink  v-if = "props.act == '0'" :to="'/activities/services/' + activity.id_service" class = "carousel-link">
        <div class="image-container">
          <div class="center">
            <img :src="activity.image" alt="Movie Poster"  class="image">   
            <div class="overlay" >
              <div >{{ activity.title }}</div>         
            </div>
          </div>
          </div>
          
      </NuxtLink>

      <NuxtLink  v-else :to="'/activities/projects/' + activity.id_project" class = "carousel-link">
        <div class="image-container">
          <div class="center">
            <img :src="activity.image" alt="Movie Poster" class="image">
            <div class="overlay" >
              <div >{{ activity.title }}
              </div>
            </div>  
          </div>
        </div>
        
      </NuxtLink>

    </div>
  </div>
  </div>
</template>

<script setup>
  //attributi
  const props = defineProps(['id','act']);
  
  //fetch di servizi e progetti
  const { data: services } = await useFetch('/api/serviceOfPers');

  const { data: projects } = await useFetch('/api/projectOfPers');

  var collection = [];
  var isProjectEmpty = true;
  var isServiceEmpty = true;

  //INSERISCO NELLA LISTA DA STAMPARE UNO TRA SERVIZI O PROGETTI
  if(props.act == '0'){

    for (const item of services.value) {
        if (item.id_worker == props.id && item.is_supervisor == true) {
            collection.push(item);
            isServiceEmpty = false;
        }
    }
  }else{
    for (const item of projects.value) {
        if (item.id_worker == props.id && item.is_supervisor == true) {
            collection.push(item);
            isProjectEmpty = false;
        }
    }
  }

  //console.log(collection);

  let hoverIndex = -1;

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');


.generalCarousel{
  padding-left: 5.5vw;
  padding-right:5.5vw;
}

.carousel {
  justify-content: center;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.itemCarousel {
  flex: 0 0 auto;
  scroll-snap-align: start;
  position: relative;
  margin-right: 1.0;
}

.overlay {
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Jost;
        font-size: 1.2vw;
        position: absolute; 
        color: white; 
        background-color: rgba(0, 0, 0, 0.7); 
        opacity: 0; 
        transition: opacity 0.5s ease; 
        width: 100%;
        height: 20%; 
        padding-left:1px;
}
.center{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        vertical-align: text-bottom;
    }

.carousel-link:hover .overlay {
  opacity: 1; 
}

.title-page-2 {
  margin-top: 2%;
}

.image-container {
  position: relative;
  width: 28vw;
  text-align: center;
  margin-top: 4%;
  cursor: pointer;
}

.image {
  border-radius: 10px;
  border: 1px solid black;
  width:100%;
  display: block;
  transition: transform 0.5s ease, filter 0.5s ease; 
}

@media screen and (max-width: 850px) {
  .image-container{
            width: 32vh;
  }
  
  .title-page-2{
    margin-top: 3vh;
  }
  .overlay {
    font-size: 2vh;
    height: 25%;
  }
}
</style>