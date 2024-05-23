<template>
    <div class="content-container">            
            <div>
                <img :src = "imageSrc" alt="Image description">
            </div>

            <div>                
                <p class="text"> {{description}} </p>  
            </div>   
    </div>
</template>

<script setup>
  const props = defineProps(['description','imageName']);
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
        max-height: 12.5vw;
        min-width: 25vw;
        min-height: 12.5vw;        
    }

    .content-container p{
        max-width: 25vw;
        
    }

    .text{        
        font-family: 'Jost';
        max-width: 100%;
        text-align: center;
        
    }

</style>
