<script setup>
  const props = defineProps(['description','imageName']);
  const imageSrc = computed(()=>`/_nuxt/assets/img/${props.imageName}`);
</script>

<template>
    <div class = "container-bandLeftNoButton">
       
        <div class="right-columnBandLeftNoButton">
            <img :src = "imageName" width = "400" height = "300" alt="Image">
        </div>
        <div class = "left-columnBandLeftNoButton">
            <p class = "description"> {{description}} </p>
        </div> 
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
.container-bandLeftNoButton{
    display: flex;
    padding: 2vw 5.5vw 2vw 5.5vw;
    flex-direction: row;
    background-color: #A78BCA;
    
}



.left-columnBandLeftNoButton{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left:5vw;
    min-width: 56vw;
    max-width: 56vw;

    background-color: color;

    
}

.right-columnBandLeftNoButton img {
    width:100%;
    height: auto;
}

.right-columnBandLeftNoButton{
    width: 100%;
    align-self: center;
}
@media screen and (max-width: 850px) {
    .container-bandLeftNoButton{
            display: flex;            
            flex-direction: column;
            flex-wrap:wrap;
            justify-content: center;
            align-items: center;   
            margin-bottom: 3vh;         
    }
    .left-columnBandLeftNoButton{
        padding-left: 0;
        margin-top: 2%;
        text-align: center ;
        max-width: 100%;
    }
}
</style>

