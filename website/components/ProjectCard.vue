<template>
    <nuxtLink :to = "link" :arial-label="`link to ${title} page`">
        <div class="image-container">
            <img class="image" :src = "imageSrc">
            <div class="overlay-text">{{ small_desc }}</div>
            <div class="title">{{title}}</div>
        </div>
    </nuxtLink>
</template>

<script setup>
    const props = defineProps(['id', 'title', 'link', 'year', 'small_desc']);
    const imageSrc = computed(()=>`https://lbxvjvepkckcqdeigtxg.supabase.co/storage/v1/object/public/img_projects/${props.id}.jpeg`);
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
        width: 100%;
        display: block;
        transition: transform 0.5s ease, filter 0.5s ease;
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
        font-family: Jost;
        font-size: 1.5vw;
        position: absolute;
        bottom: 53px; /* Position the text at the bottom */
        left: 50%;
        transform: translateX(-50%); /* Center the text horizontally */
        width: 100%; /* Ensure the text spans the entire width */
        height: 20%; 
        text-align: center; /* Center align the text */
        color: white; /* Change based on your design */
        background-color: rgba(0, 0, 0, 0.7); /* Optional: for better visibility */
        padding: 10px; /* Optional: for better visibility */
        opacity: 0; /* Hide the text initially */
        transition: opacity 0.5s ease; /* Smooth transition effect */
    }

    .image-container:hover .overlay-text {
        opacity: 1; /* Show the text on hover */
    }

</style>