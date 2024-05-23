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
    padding: 1vw;
    font-size: 1.2vw; 
    font-family: 'Jost'; 
    display: flex;
    justify-content: flex-end;
    border: 0;
    color: white;
    margin: 0;
    transition: background-color 0.3s ease;
}

.buttonViolet:hover {
    background-color: #6B5AA1; 
    cursor: pointer;
}
</style>
