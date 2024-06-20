<script setup>
  const props = defineProps(['description', 'namebutton','imageName', 'link','aria_label']);
  const imageSrc = computed(()=>`/_nuxt/assets/img/${props.imageName}`);
</script>

<template>
    <div class="container">
        <div class="left-column">
            <img :src = "imageSrc" width = "400" height = "300" alt="Image">
        </div>
        
        <div class="right-column">
            <p class="description"> {{description}} </p>
            
            <div class="button">
                <div class="button"><ButtonViolet :name_button = "namebutton" :link="link" :aria_label="aria_label"></ButtonViolet></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

.button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-decoration: none;
}

.container{
    display: flex;
    flex-direction: row;
    padding: 2vw 5.5vw 2vw 5.5vw;
    background-color: #FFCDDC;
}

.right-column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 
    padding-left: 5vw;
    min-width: 56vw;
    max-width: 56vw;

}

.left-column img {
    width:100%;
    height: auto;
}

.left-column {
    align-self: center;
    width: 100%;
}

@media screen and (max-width: 800px) {
    .container{
            display: flex;            
            flex-direction: column;
            flex-wrap:wrap;
            justify-content: center;
            align-items: center;            
    }
    .right-column{
        padding-left: 0;
        margin-top: 2%;
        text-align: center ;
    }
    .button{
        
        justify-content: center;
        margin-top: 2%;
    }
}
</style>