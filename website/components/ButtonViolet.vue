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
    
    padding-left: 2vw;
    padding-right: 2vw;
    font-size: 1.2vw; 
    font-family: 'Jost'; 
    display: table-cell;
    vertical-align: middle;
    justify-content: flex-end;
    color: white;
    margin: 0;
    transition: background-color 0.3s ease;
    border-radius: 1vw;  
    width: 9vw;
    
    
}

.buttonViolet:hover {
  background-color: #7D5BA6;
  cursor: pointer;
}
.linkStyle{
  text-decoration: none;  
}

</style>
