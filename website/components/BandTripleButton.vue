<script setup>
  const props = defineProps(['description', 'namebutton1', 'link1', 'namebutton2', 'link2', 'namebutton3', 'link3','imageName','aria_label']);
  const imageSrc = computed(()=>`/_nuxt/assets/img/${props.imageName}`);
</script>


<template>
    <div class = "containerBandRight">
        <div class = "left-columnBandRight">
            <div>
            <p class = "description"> {{description}} </p>
            </div>
            
            <div class="buttonBandRight">
                <ButtonViolet :name_button = "namebutton1" :link="link1" :aria_label="aria_label" class="button-margin"></ButtonViolet>
                <ButtonViolet :name_button = "namebutton2" :link="link2" :aria_label="aria_label" class="button-margin"></ButtonViolet>
                <ButtonViolet :name_button = "namebutton3" :link="link3" :aria_label="aria_label" class="button-margin"></ButtonViolet>
            </div>

        </div>

        <div class="right-columnBandRight">
            <img :src = "imageName" width = "400" height = "300" alt="Image">
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
    justify-content: space-evenly;
    padding-right: 5vw;
    max-width: 56vw;
    background-color: color;
}
.buttonBandRight{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;

}
.right-columnBandRight img {
    width: 100%;
    height: auto;
}

.right-columnBandRight{
  align-self: center;
  width:100%;
}
@media screen and (max-width: 850px) {

    .right-columnBandRight img {
        display: none;
        

    }
    .left-columnBandRight{
        justify-content: center;
        align-self: center;
        padding-right: 0;
        padding: 0;
        margin-top: 2%;
        max-width: 100%;
    }

    .containerBandRight{
        display: flex;
        flex-direction: column;
        margin-bottom: 3vh;
        
    }
    .button-margin{
        margin-top: 4%;
    }
}

</style>