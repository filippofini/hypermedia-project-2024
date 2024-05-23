<script setup>
  const props = defineProps(['description', 'namebutton','imageName']);
  const imageSrc = computed(()=>`/_nuxt/assets/img/${props.imageName}`);
</script>


<template>
    <div class = "containerBandRight">
        <div class = "left-columnBandRight">
            <p class = "textBandRight"> {{description}} </p>
            
            <div class = "buttonBandRight">
                <ButtonViolet :name_button = "namebutton"></ButtonViolet>
            </div>
        </div>

        <div class="right-columnBandRight">
            <img :src = "imageSrc" alt="Image description">
        </div>
        
        
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

.containerBandRight{
    display: flex;
    padding: 2vw;
    flex-direction: row;
    background-color: #FFFFFF;
}

.textBandRight
{
    max-width: 100%;
    word-break: break-word;
}

.left-columnBandRight{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 5vw;
    padding-left: 1vw;

    min-height: 23vw;
    min-width: 57vw;
    max-width: 57vw;

    font-size: 1.2vw; 
    font-family: 'Jost'; 

    background-color: color;
}
.buttonBandRight{
    display: flex;
    flex-direction: row;

}
.right-columnBandRight img {
    max-width: 31vw;
    max-height: 30vw;
}

.right-columnBandRight{
  min-width: 28vw; 
  max-width: 28vw;
}

</style>