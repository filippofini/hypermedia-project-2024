<script setup>
  const props = defineProps(['description','imageName']);
  
</script>

<template>
    <div class = "container-bandLeftNoButton">
      <div class = "left-columnBandLeftNoButton">
        <p class = "description"> {{description}} </p>
      </div> 
      <div class="right-columnBandLeftNoButton">
        <img src="@/assets/img/nomeImmagine.jpg" alt="Image description">
      </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
.container-bandLeftNoButton{
  display: flex;
    padding: 2vw;
    flex-direction: row;
    background-color: #FFFFFF;
}

.left-columnBandLeftNoButton{
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

.right-columnBandLeftNoButton img {
    max-width: 31vw;
    max-height: 30vw;
}

.right-columnBandLeftNoButton{
  min-width: 28vw; 
  max-width: 28vw;
}
</style>

