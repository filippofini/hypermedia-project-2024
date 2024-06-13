<script setup>
  const props = defineProps(['description', 'namebutton1', 'link1', 'namebutton2', 'link2', 'namebutton3', 'link3','imageName','aria_label']);
  const imageSrc = computed(()=>`/_nuxt/assets/img/${props.imageName}`);
</script>


<template>
    <div class = "containerBandRight">
        <div class = "left-columnBandRight">
            <p class = "description"> {{description}} </p>
            
            <div class="buttonBandRight">
                <ButtonViolet :name_button = "namebutton1" :link="link1" :aria_label="aria_label"></ButtonViolet>
                <ButtonViolet :name_button = "namebutton2" :link="link2" :aria_label="aria_label"></ButtonViolet>
                <ButtonViolet :name_button = "namebutton3" :link="link3" :aria_label="aria_label"></ButtonViolet>
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


.left-columnBandRight{
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 5vw;
    padding-left: 1vw;

    min-height: 23vw;
    min-width: 57vw;
    max-width: 57vw;

    background-color: color;
}
.buttonBandRight{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;

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