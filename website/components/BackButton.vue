<template>  
    <button class="button-container">
        <a href="" class="back-button" @click.prevent="$router.back()" role="button" aria-label="Back button">
            <img src="@/assets/bb_arrow.png"></img>
        </a>  
    </button>
</template>

<style scoped>
    button {
        border: solid;     
        cursor: pointer;
    }

    .button-container {        
        width: 7vh;
        height: 7vh;
        min-width: 25px;
        min-height: 25px;
        margin: 1%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color:  #B96090; 
        border-color:#F2D3E7 ;
        transition: all 0.2s ease-out;
    }

    .back-button {
        color: white;
        font-weight: bolder;
        font-size: xx-large;
        border-radius: 50%;
        text-decoration: none;

              
        
    }

    .back-button img{
        object-fit: contain;   
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .button-container:hover {
        background-color: #6B5AA1;
    }

    .button-container:active {
        background-color: #52417D;
    }
</style>

