<template>
    <NuxtLink :to = "link" :arial-label="`link to ${title} page`">
        <div class="image-container">
            <img class="image" :src = "image">
            <div class="overlay-text">{{ small_desc }}</div>
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
        cursor: pointer;
        overflow: hidden;
    }

    .image {
        border-radius: 10px;
        border: 1px solid black;
        width: 100%;
        display: block;
        transition: transform 0.5s ease, filter 0.5s ease;
        scale : 0.9;
    }

    .title {
        margin-top: 1vw;
        font-family: Jost;
        font-weight: 500;
        font-size: 1.8vw;
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

    .overlay-text {
        border-radius: 10px;
        font-family: Jost;
        font-size: 1.5vw;
        position: absolute;
        bottom: 20%; /* Position the text at the bottom */
        left: 50%;
        transform: translateX(-50%); /* Center the text horizontally */     
        text-align: center; /* Center align the text */
        color: white; /* Change based on your design */
        background-color: rgba(0, 0, 0, 0.7); /* Optional: for better visibility */
        padding: 10px; /* Optional: for better visibility */
        opacity: 0; /* Hide the text initially */
        transition: opacity 0.5s ease; /* Smooth transition effect */
        width: 86%;
        height: 10%; 
    }

    .image-container:hover .overlay-text {
        opacity: 1; /* Show the text on hover */
    }

</style>