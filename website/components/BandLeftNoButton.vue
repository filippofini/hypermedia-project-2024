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
    padding: 2vw 5.5vw 2vw 5.5vw;
    flex-direction: row;
    background-color: #FFFFFF;
}

.left-columnBandLeftNoButton{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 5vw;

    min-width: 56vw;
    max-width: 56vw;

    background-color: color;
}

.right-columnBandLeftNoButton img {
    width: 100%;
}

.right-columnBandLeftNoButton{
    width: 100%;
    align-self: center;
}
</style>

