<template>
    <NuxtLink :to = "link" :arial-label="`link to ${title} page`">
        <div class="image-container">
            <div class="center">
                <img class="image" :src = "image" alt = "project image">
                <div class="overlay">
                    <div class="overlay-text">{{ small_desc }}</div>
                </div>
            </div>
            <div class="title">{{title}}</div>
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps(['id', 'title', 'link', 'year', 'small_desc', 'image']);
</script>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
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

    .title {
        margin-top: 1vw;
        font-family: Jost;
        font-weight: 500;
        font-size:1.6vw;
        display: inline-block;
        position: relative;
        color:black;
    }

    .image-container:hover .image {
        filter: brightness(0.5); 
    }

    .image-container:hover .overlay {
        opacity: 1;
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

    .image-container:hover .overlay-text {
        opacity: 1;
    }

    .center{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        vertical-align: text-bottom;
    }
    @media screen and (max-width: 850px) {
        .image-container{
            width: 32vh;
        }
        .overlay {
            font-size: 2vh;
            height: 25%;
        }
        .title {
            font-size: 3vh;
        }
    }

</style>