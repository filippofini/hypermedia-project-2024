<template>
  <!--SE SONO DELLE PERSONE STAMPO QUESTO-->
  <NuxtLink v-if = "props.testimonial == '0'" :to = "link" :arial-label="`link to ${name} ${surname} page`">
    <div class="avatar-with-name">
      <div class="avatar-container">
        <img class="avatar-image" :src = "image" alt="Avatar">
      </div>
      <span class="name-container">
        {{name}} {{ surname }} 
      </span>
      <br/>
      <div class="role">
        {{ role }}
      </div>
    </div>
    </NuxtLink>

    <!--SE SONO I TESTIMONIAL STAMPO QUESTO-->
    <div  v-else class="avatar-with-name">
      <div class="avatar-container">
        <img class="avatar-image" :src = "image" alt="Avatar">
      </div>
      <span class="name-container">
        {{name}} {{ surname }} 
      </span>
      <br/>
      <div class="role">
        {{ role }}
      </div>
    </div>
  </template>

<script setup>
const props = defineProps(['id', 'name', 'surname', 'role', 'link', 'image', 'testimonial']);

</script>

<script>
export default {
    name: 'PersonOv',

  data() {
    return {
      isHovered: false
    };
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

.avatar-with-name {
  text-align: center;
  display: inline-block;
  width: auto;
  margin: 2vw;
  width: 15vw;
  font-size: 1.2vw;
  transition: 0.3s ease;
}

.avatar-container {
  width: 15vw;
  height: 15vw; 
  border-radius: 50%;
  border: 2px solid black;
  overflow: hidden;
  margin: 0 auto;
  
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}
.avatar-with-name:hover{
  transform: scale(1.1);
}

.name-container {
  margin-top: 1vw;
  font-family: Jost;
  font-weight: 500;
  font-size: 1.5vw;
  display: inline-block;
  position: relative;
  color:black;
}

.role{
  margin-top: 1vw;
  font-size: 1vw;
  font-family: Jost;
  font-weight: 500;
  color:black;
  display: inline-block;
  position: relative;
}

.name-container::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0.2vw;
  bottom: -0.2vw; 
  left: 0;
  transition: width 0.3s ease; 
}
@media screen and (max-width: 850px) {
  .avatar-with-name{
    width: 30vh;
    .avatar-container{
      width: 30vh;
      height: 30vh;
    }

  }
  .role{
    font-size: 1.5vh;
  }

  .name-container{
    font-size: 2.5vh;
  }

}

</style>