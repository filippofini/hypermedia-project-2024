<template>
    <div class="avatar-with-name">
      <div class="avatar-container">
        <img class="avatar-image" src="@/assets/img/nomeImmagine.jpg" alt="Avatar">
      </div>
      <div class="name-container">{{ name }}</div>
    </div>
  </template>

<script setup>
const props = defineProps(['avatarSrc', 'name']);
</script>

<script>
export default {
    name: 'RectList',

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
}

.avatar-container {
  width: 15vw;
  height: 15vw; 
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name-container {
  margin-top: 1vw;
  font-family: Jost;
  font-weight: 500;
  font-size: 1.8vw;
  display: inline-block;
  position: relative;
}

.name-container::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px; 
  left: 0;
  background-color: #333;
  transition: width 0.3s ease; 
}

.name-container:hover::before {
  width: 100%;
}
</style>