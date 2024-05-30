<script>
export default {
  name: 'ButtonViolet',
  props: {
    name_button: String,
  }
}
</script>

<template>
    <button class="buttonViolet">{{name_button}}</button>
</template>

<style scoped>
.buttonViolet{
    background-color: #52417D;
    padding: 0.7vw 2vw;
    font-size: 1.2vw; 
    font-family: 'Jost'; 
    display: flex;
    justify-content: flex-end;
    color: white;
    margin: 0;
    transition: background-color 0.3s ease;
    border-radius: 1vw;
    text-decoration: none;
    
}

.buttonViolet:hover {
  background-color: #7D5BA6;
  cursor: pointer;
}
</style>
