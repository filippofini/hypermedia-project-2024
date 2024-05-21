<template>  
    <button class="button-container">
        <a href="" class="back-button" @click.prevent="$router.back()" role="button" aria-label="Back button">&#10554;</a>  
    </button>
</template>

<style scoped>
    button {
        border: none;        
        cursor: pointer;
    }

    .button-container {        
        width: 7vh;
        height: 7vh;
        margin: 0.5%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color:  #B96090;
        transition: all 0.2s ease-out;
    }

    .back-button {
        color: white;
        font-weight: bolder;
        font-size: xx-large;
        border-radius: 50%;
        text-decoration: none;
        
              
        
    }

    .button-container:hover {
        background-color: #6B5AA1;
    }

    .button-container:active {
        background-color: #52417D;
    }
</style>

