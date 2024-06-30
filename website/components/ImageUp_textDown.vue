<template>
    <div class="content-container">            
            <div>
                <img :src = "imageName" alt="Image description">
            </div>


            <h3 class="title"> {{title}} </h3>                
            <p class="text"> {{description}} </p>  
 
    </div>
</template>

<script setup>
  const props = defineProps(['description','imageName','title']);
  const imageSrc = computed(()=>`/_nuxt/assets/img/${props.imageName}`);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

    .content-container{
        display: flex;
        flex-direction: column;        
        background-color: transparent;        
        align-items: center;
        object-fit: contain;
    }   

    .content-container img{
        max-width: 25vw;
        max-height: 16vw;
        min-width: 25vw;
        min-height: 12.5vw;
        border: 1px solid black;       
    }

    .content-container p{
        max-width: 25vw;
        
    }

    .text{        
        font-family: 'Jost';
        max-width: 100%;
        text-align: center;
        word-break: break-word;      
        margin: 1vh;
    }

    .title{
        font-family: 'Jost';
        max-width: 100%;
        text-align: center;
        font-weight: bold;
        margin: 1vh;
    }
    @media screen and (max-width: 850px) {
        .content-container p{
            max-width: 90vw;
        }
        .content-container img{
        max-width: 80vw;
        max-height: none;    
        }
    }
</style>
