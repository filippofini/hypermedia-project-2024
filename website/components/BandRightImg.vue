<script setup>
  const props = defineProps(['description', 'namebutton','imageName', 'link','aria_label']);
  const imageSrc = computed(()=>`/_nuxt/assets/img/${props.imageName}`);
</script>


<template>
    <div class = "containerBandRight">
        <div class = "left-columnBandRight">
            <p class = "description"> {{description}} </p>
            
            <div class = "buttonBandRight">
                <div class="buttonBandRight"><ButtonViolet :name_button = "namebutton" :link="link" :aria_label="aria_label"></ButtonViolet></div>
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
    padding: 2vw 5.5vw 2vw 5.5vw;
    flex-direction: row;
    background-color: #FFFFFF;
}

.left-columnBandRight{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 5vw;
    min-width: 56vw;
    max-width: 56vw;

    background-color: color;
}
.buttonBandRight{
    display: flex;
    flex-direction: row;
    text-decoration: none;

}
.right-columnBandRight img {
    width:100%;
}

.right-columnBandRight{
    align-self: center;
    width:100%;
}

</style>