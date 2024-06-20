<script>
export default {
  name: 'ButtonViolet',
  props: {
    name_button: String,
    link: String,
    aria_label: String,
  }
}
</script>

<template>
 
  <NuxtLink :to="link" :aria-label="aria_label" class="linkStyle">
    <button class="buttonViolet">{{name_button}}</button>
  </NuxtLink>

    
</template>

<style scoped>
.buttonViolet{
    background-color: #52417D;
    border: none;
    font-size: 2.3vh; 
    font-family: 'Jost'; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0;
    transition: background-color 0.3s ease;
    border-radius: 1vh;  
    width: 19vh;
    height: 7vh;
    white-space: normal;
    overflow: hidden;
    line-height: 1.1;
}
@media screen and (max-width: 900px) {
  .buttonViolet{
    width: 13vh;
    height: 5.5vh;
  }

}

.buttonViolet:hover {
  background-color: #7D5BA6;
  cursor: pointer;
}
.linkStyle{
  text-decoration: none;  
}

</style>
