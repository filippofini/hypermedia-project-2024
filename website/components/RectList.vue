<script setup>
const props = defineProps(['description', 'title', 'imageName']);
const imageSrc = computed(()=>`/_nuxt/assets/img/${props.imageName}`);
</script>

<template>
 <div class="image-container">
        <img :src = "imageSrc" alt="Description" class="image">
        <div class="overlay">
            <div class="description">{{description}}</div>
        </div>
        <div class="title">{{title}}</div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');



.image-container {
    position: relative;
    width: 20vw;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
}

.image {
    width: 100%;
    display: block;
    transition: transform 0.3s ease, filter 0.3s ease;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'Jost'; 
    width: 100%;
    height: 100%;
    font-size: 1.2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    color: white;
    text-align: center; 
    padding: 1.3vw; 
    box-sizing: border-box; 
}

.title {
    display: flex;
    text-align: left;
    font-family: 'Jost'; 
    font-size: 1.2vw;
    margin-top: 0.5vw;
    font-weight: 500; 
}

.image-container:hover .image {
    filter: brightness(0.5); 
}

.image-container:hover .overlay {
    opacity: 1;
}

</style>