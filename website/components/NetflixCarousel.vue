<template>
  <div class = "generalCarousel">
  <div v-if = "props.act ==  '0' && !isServiceEmpty" class = "mainTitleCarousel">
    Services Supervised
  </div>
  <div v-if = "props.act == '1' && !isProjectEmpty" class = "mainTitleCarousel">
    Projects Supervised
  </div>

  <div class="carousel">
    <div class="itemCarousel" v-for="(activity, index) in collection" :key="index">
      <NuxtLink  v-if = "props.act == '0'" :to="'/activities/services/' + activity.id_service" class = "carousel-link">
        <div class="image-container">
          <img :src="activity.image" alt="Movie Poster"  class="image">
        </div>
          <div class="titleCarousel">{{ activity.title }}</div>
      </NuxtLink>

      <NuxtLink  v-else :to="'/activities/projects/' + activity.id_project" class = "carousel-link">
        <div class="image-container">
          <img :src="activity.image" alt="Movie Poster" class="image">
        </div>  
        <div class="titleCarousel" >{{ activity.title }}</div>
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

.titleCarousel {
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.2vw;
  text-align: center;
  font-family: Jost;
  opacity: 0;
}

.carousel-link:hover .titleCarousel {
  opacity: 1; 
}

.mainTitleCarousel {
  font-size: 2vw;
  font-weight: bold;
  margin-top: 2.0vw;
  margin-bottom: 2.0vw;
  text-align: center;
  font-family: Jost;
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
  
  .mainTitleCarousel{
    font-size: 2.6vh;
  }
}
</style>